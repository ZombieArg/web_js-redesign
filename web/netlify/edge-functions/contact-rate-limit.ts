// Netlify aplica este límite por IP antes de ejecutar el Route Handler de Next.
// Un retorno undefined continúa con /api/contact sin consumir el body.
export default function contactRateLimit() {
  return undefined;
}

export const config = {
  path: "/api/contact",
  rateLimit: {
    windowLimit: 5,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};
