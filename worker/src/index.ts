const ALLOWED_ORIGINS = [
  "https://sedanuryildiz.com",
  "https://www.sedanuryildiz.com",
  "http://localhost:5173",
  "http://localhost:4173",
];

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("Origin");
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(request: Request, body: unknown, init: ResponseInit = {}): Response {
  return Response.json(body, {
    ...init,
    headers: { "Cache-Control": "no-store", ...corsHeaders(request), ...init.headers },
  });
}

export default {
  async fetch(request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname !== "/api/analytics") {
      return json(request, { error: "Not Found" }, { status: 404 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }

    if (request.method !== "POST") {
      return json(request, { error: "Method Not Allowed" }, { status: 405, headers: { Allow: "POST" } });
    }

    // Dummy handler: the body is accepted but not used yet.
    return json(request, {
      success: true,
      message: "Analytics event received",
      eventId: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    });
  },
} satisfies ExportedHandler<Env>;
