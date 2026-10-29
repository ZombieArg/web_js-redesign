export const runtime = "nodejs";

const ORIGINS = new Set(["busqueda", "asistente_ia", "linkedin", "referido", "evento", "prensa", "otro"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactInput = {
  event_id: string;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  process: string;
  origen_declarado: string;
  origen_declarado_otro: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  landing_url: string | null;
};

function field(body: Record<string, unknown>, key: string, max: number, required = false): string | null {
  const value = body[key];
  if (value == null || value === "") {
    if (required) throw new Error(`Missing ${key}`);
    return null;
  }
  if (typeof value !== "string" || value.trim().length > max || (required && !value.trim())) throw new Error(`Invalid ${key}`);
  return value.trim();
}

function parseContact(value: unknown): ContactInput {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid body");
  const body = value as Record<string, unknown>;
  if (field(body, "website", 200)) throw new Error("Invalid submission");
  const event_id = field(body, "event_id", 120, true)!;
  const name = field(body, "name", 160, true)!;
  const company = field(body, "company", 255, true)!;
  const email = field(body, "email", 254, true)!.toLowerCase();
  const whatsapp = field(body, "whatsapp", 40, true)!;
  const process = field(body, "process", 5000, true)!;
  const origen_declarado = field(body, "origen_declarado", 80, true)!;
  const origen_declarado_otro = field(body, "origen_declarado_otro", 100);
  const utm_source = field(body, "utm_source", 160);
  const utm_medium = field(body, "utm_medium", 160);
  const utm_campaign = field(body, "utm_campaign", 160);
  const landing_url = field(body, "landing_url", 500);
  if (!/^[a-f0-9-]{36}$/i.test(event_id) || !EMAIL.test(email) || whatsapp.length < 7 || !ORIGINS.has(origen_declarado)) throw new Error("Invalid contact details");
  if (origen_declarado === "otro" && !origen_declarado_otro) throw new Error("Missing other origin");
  if (landing_url) {
    const url = new URL(landing_url);
    if (!(["http:", "https:"].includes(url.protocol))) throw new Error("Invalid landing URL");
  }
  return { event_id, name, company, email, whatsapp, process, origen_declarado, origen_declarado_otro,
    utm_source, utm_medium, utm_campaign, landing_url };
}

async function sendNotification(input: ContactInput) {
  const key = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  if (!key || !domain) return;
  const from = process.env.MAIL_FROM || "Formulario web <hola@datavoices.com.ar>";
  const to = process.env.CONTACT_NOTIFY_EMAIL || "hola@datavoices.com.ar";
  const text = [
    `Nombre: ${input.name}`, `Empresa: ${input.company}`, `Email: ${input.email}`,
    `WhatsApp: ${input.whatsapp}`, `Proceso a revisar: ${input.process}`,
    `Origen declarado: ${input.origen_declarado}${input.origen_declarado_otro ? ` (${input.origen_declarado_otro})` : ""}`,
  ].join("\n");
  const form = new FormData();
  form.set("from", from);
  form.set("to", to);
  form.set("h:Reply-To", input.email);
  form.set("subject", `Nuevo diagnóstico solicitado — ${input.email}`);
  form.set("text", text);
  const base = (process.env.MAILGUN_BASE_URL || "https://api.mailgun.net").replace(/\/$/, "");
  try {
    const response = await fetch(`${base}/v3/${domain}/messages`, {
      method: "POST",
      headers: { Authorization: `Basic ${Buffer.from(`api:${key}`).toString("base64")}` },
      body: form,
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) console.error("Contact notification failed:", response.status);
  } catch (error) { console.error("Contact notification unavailable:", error instanceof Error ? error.name : "error"); }
}

export async function POST(request: Request) {
  const endpoint = process.env.CRM_INGEST_URL;
  const token = process.env.CRM_WEB_INGEST_TOKEN;
  if (!endpoint || !token) return Response.json({ error: "Contact service unavailable" }, { status: 503 });
  let input: ContactInput;
  try {
    const text = await request.text();
    if (text.length > 16_000) throw new Error("Submission too large");
    input = parseContact(JSON.parse(text));
  } catch {
    return Response.json({ error: "Invalid contact form" }, { status: 400 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, schema_version: "web.contact.v1", source_system: "datavoices-web",
        occurred_at: new Date().toISOString() }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (response.status !== 200 && response.status !== 201) {
      console.error("CRM contact ingestion failed:", response.status);
      return Response.json({ error: "Contact service unavailable" }, { status: 503 });
    }
    const result = await response.json() as { opportunity_id?: string; duplicate?: boolean };
    if (!result.opportunity_id) throw new Error("CRM confirmation missing opportunity_id");
    if (!result.duplicate) await sendNotification(input);
    return Response.json({ ok: true, event_id: input.event_id, opportunity_id: result.opportunity_id }, { status: 200 });
  } catch (error) {
    console.error("CRM contact ingestion unavailable:", error instanceof Error ? error.name : "error");
    return Response.json({ error: "Contact service unavailable" }, { status: 503 });
  }
}
