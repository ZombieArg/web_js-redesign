import assert from "node:assert/strict";
import { test } from "node:test";
import { NextRequest } from "next/server";
import proxy from "../src/proxy";

const ORIGIN = "https://datavoices.com.ar";

async function respond(path: string) {
  return proxy(new NextRequest(`${ORIGIN}${path}`));
}

function location(response: Response) {
  const raw = response.headers.get("location");
  assert.ok(raw, "expected a Location header");
  return new URL(raw, ORIGIN);
}

function assertStaysOnRequestHost(url: URL) {
  assert.equal(url.protocol, "https:");
  assert.equal(url.host, "datavoices.com.ar");
  assert.equal(url.hostname, "datavoices.com.ar");
  assert.equal(url.pathname.startsWith("//"), false);
}

async function assertRedirect(path: string, pathname: string, search = "") {
  const response = await respond(path);
  assert.equal(response.status, 308);
  const target = location(response);
  assertStaysOnRequestHost(target);
  assert.equal(target.pathname, pathname);
  assert.equal(target.search, search);
  assert.equal(response.headers.get("cache-control"), "no-cache");
  assert.equal(response.headers.get("netlify-cdn-cache-control"), "no-cache");
  return target;
}

test("double slash never changes the host", async () => {
  const host = await assertRedirect("//host/", "/host");
  assert.notEqual(host.hostname, "host");

  const evil = await assertRedirect("//evil%E3%80%82com/", "/evil%E3%80%82com");
  assert.notEqual(evil.hostname, "evil.com");
  assert.equal(evil.href.startsWith("https://evil.com"), false);
  assert.equal(evil.href.startsWith("https://blog"), false);
});

test("cecilia with a trailing slash redirects on the same host", async () => {
  await assertRedirect("/cecilia/", "/cecilia");
  await assertRedirect("/en/cecilia/", "/en/cecilia");
});

test("blog posts redirect to the slashless url", async () => {
  await assertRedirect("/blog/agente-de-ia-vs-chatbot/", "/blog/agente-de-ia-vs-chatbot");
  await assertRedirect("/en/blog/ai-agent-vs-chatbot/", "/en/blog/ai-agent-vs-chatbot");
});

test("trailing slash keeps the query string", async () => {
  await assertRedirect(
    "/blog/agente-de-ia-vs-chatbot/?utm_source=x&utm_medium=y",
    "/blog/agente-de-ia-vs-chatbot",
    "?utm_source=x&utm_medium=y",
  );
});

test("the home url does not redirect", async () => {
  const response = await respond("/");
  assert.notEqual(response.status, 308);
  assert.equal(response.headers.get("location"), null);
});
