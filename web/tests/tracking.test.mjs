import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const source = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/lib/tracking.ts"), "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function storage() {
  const entries = new Map();
  return {
    getItem: (key) => entries.get(key) ?? null,
    setItem: (key, value) => entries.set(key, value),
  };
}

function setup() {
  const localStorage = storage();
  const sessionStorage = storage();
  const location = {
    hostname: "preview.netlify.app",
    pathname: "/",
    search: "",
  };
  const context = {
    exports: {},
    URL, URLSearchParams, Date,
    window: { localStorage, sessionStorage, location },
    document: { referrer: "" },
  };
  vm.runInNewContext(js, context);
  return { ...context, tracking: context.exports, localStorage, sessionStorage, location };
}

test("origin follows the seven priority rules", () => {
  const { tracking } = setup();
  assert.equal(tracking.classifyOrigin("linkedin", "cpc", "chatgpt.com"), "paid");
  assert.equal(tracking.classifyOrigin("newsletter", "social", "google.com"), "email");
  assert.equal(tracking.classifyOrigin("", "", "chat.openai.com"), "ai_assistant");
  assert.equal(tracking.classifyOrigin("google", "organic", ""), "organico_buscador");
  assert.equal(tracking.classifyOrigin("linkedin", "social", ""), "social_organico");
  assert.equal(tracking.classifyOrigin("", "", "example.org"), "sitio_externo");
  assert.equal(tracking.classifyOrigin("partner", "", ""), "sitio_externo");
  assert.equal(tracking.classifyOrigin("", "", ""), "directo");
});

test("first stays fixed, last follows new campaign and direct reload does not erase it", () => {
  const { tracking, localStorage, location } = setup();
  tracking.updateTouches();
  assert.equal(JSON.parse(localStorage.getItem("dv_first_touch")).origen, "directo");
  location.pathname = "/contacto";
  location.search = "?utm_source=linkedin&utm_medium=social&utm_campaign=test";
  tracking.updateTouches();
  assert.equal(JSON.parse(localStorage.getItem("dv_first_touch")).origen, "directo");
  assert.equal(JSON.parse(localStorage.getItem("dv_last_touch")).origen, "social_organico");
  location.search = "";
  tracking.updateTouches();
  assert.equal(JSON.parse(localStorage.getItem("dv_last_touch")).utm_campaign, "test");
  const props = tracking.attributionContext();
  assert.equal(props.origen, "directo");
  assert.equal(props.last_utm_campaign, "test");
  assert.equal(props.entry_cta_id, null);
});

test("expired first touch is rewritten; own referrer is ignored", () => {
  const { tracking, localStorage, location, document } = setup();
  const old = {
    origen: "paid", utm_source: "old", utm_medium: "cpc", utm_campaign: "",
    referrer_domain: "", landing_page: "/", ts: Date.now() - 91 * 86400000,
  };
  localStorage.setItem("dv_first_touch", JSON.stringify(old));
  document.referrer = "https://datavoices.com.ar/contacto";
  location.pathname = "/en/cecilia";
  tracking.updateTouches();
  assert.equal(JSON.parse(localStorage.getItem("dv_first_touch")).origen, "directo");
  assert.equal(tracking.pageContext("/en/cecilia").page_type, "cecilia");
  assert.equal(tracking.pageContext("/en/cecilia").lang, "en");
  assert.equal(tracking.pageContext("/casos/normsy").page_type, "caso");
});
