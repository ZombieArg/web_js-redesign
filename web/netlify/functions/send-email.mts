/**
 * Envío del formulario de contacto.
 *
 * Reemplaza a api/server.js (Express + nodemailer + mailgun-transport), que
 * estaba en el repo pero no desplegado en ningún lado: ceciliabot.datavoices.com.ar
 * hoy corre el backend de Cecilia, que no tiene rutas de mail, así que
 * POST /api/send-email devolvía 404 tanto acá como en el sitio viejo.
 *
 * Se llama a la API HTTP de Mailgun con fetch en vez de usar nodemailer: evita
 * sumar tres dependencias para armar un POST con auth básica.
 *
 * Sin MAILGUN_API_KEY o MAILGUN_DOMAIN responde 503, no 500: el formulario no
 * está roto, falta configuración. El front muestra el toast de error igual.
 */

const TO = "hola@datavoices.com.ar";
const FROM = "Formulario web <hola@datavoices.com.ar>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const handler = async (request: Request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  if (!apiKey || !domain) {
    console.error("Mailgun sin configurar: falta MAILGUN_API_KEY o MAILGUN_DOMAIN");
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  let email: string;
  let message: string;
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
    message = typeof body?.message === "string" ? body.message.trim() : "";
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validación mínima. El detalle de los campos ya lo exige el formulario;
  // acá solo se evita mandar un mail vacío o sin remitente utilizable.
  if (!email || !email.includes("@") || !message) {
    return new Response(JSON.stringify({ error: "Missing email or message" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const form = new URLSearchParams({
    from: FROM,
    to: TO,
    // replyTo apunta a quien completó el formulario: responder desde el cliente
    // de mail le llega a la persona, no a la casilla propia.
    "h:Reply-To": email,
    subject: `Nuevo diagnóstico solicitado — ${email}`,
    text: `Contacto: ${email}\n\n${message}`,
    html: `<h3>Nuevo diagnóstico solicitado</h3><p><strong>Contacto:</strong> ${escapeHtml(email)}</p><pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(message)}</pre>`,
  });

  try {
    const res = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    });

    if (!res.ok) {
      // El cuerpo de Mailgun puede traer datos del mensaje: se loguea el
      // status y no se devuelve al cliente.
      console.error("Mailgun respondió", res.status, await res.text());
      return new Response(JSON.stringify({ error: "Email delivery failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error llamando a Mailgun:", error);
    return new Response(JSON.stringify({ error: "Email delivery failed" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export default handler;

/** Netlify sirve la función en esta ruta, así que no hace falta redirect. */
export const config = {
  path: "/api/send-email",
};
