import { FormEvent, useState } from "react";
import { Header } from "../components/Header";

// In dev, Vite proxies /api to the local Worker (see vite.config.ts).
const API_URL =
  import.meta.env.VITE_API_URL ??
  (import.meta.env.PROD ? "https://api.sedanuryildiz.com" : "");

type Result =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; ok: boolean; code: number; body: unknown }
  | { status: "error"; message: string };

export function Analytics() {
  const [event, setEvent] = useState("pageview");
  const [path, setPath] = useState("/analytics");
  const [result, setResult] = useState<Result>({ status: "idle" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setResult({ status: "loading" });
    try {
      const response = await fetch(`${API_URL}/api/analytics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, path }),
      });
      const body = await response.json().catch(() => null);
      setResult({ status: "done", ok: response.ok, code: response.status, body });
    } catch (err) {
      setResult({
        status: "error",
        message: err instanceof Error ? err.message : String(err),
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-mono">
      <Header />
      <main className="pt-32">
        <div className="px-6 pb-6 flex justify-between items-center border-b border-neutral-200">
          <div className="flex gap-4 text-sm">
            <span className="text-neutral-400">API</span>
            <span>/</span>
            <span>ANALYTICS</span>
          </div>
        </div>
        <div className="p-6 text-sm max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-neutral-400">EVENT</span>
              <input
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                required
                className="border border-neutral-200 px-3 py-2 focus:outline-none focus:border-neutral-900"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-neutral-400">PATH</span>
              <input
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="border border-neutral-200 px-3 py-2 focus:outline-none focus:border-neutral-900"
              />
            </label>
            <button
              type="submit"
              disabled={result.status === "loading"}
              className="self-start bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {result.status === "loading" ? "SENDING..." : "SEND EVENT"}
            </button>
          </form>

          {result.status === "done" && (
            <div className="mt-6">
              <div className={result.ok ? "text-green-700" : "text-red-700"}>
                {result.code} {result.ok ? "OK" : "ERROR"}
              </div>
              <pre className="mt-2 p-3 bg-neutral-100 overflow-x-auto">
                {JSON.stringify(result.body, null, 2)}
              </pre>
            </div>
          )}
          {result.status === "error" && (
            <div className="mt-6 text-red-700">Request failed: {result.message}</div>
          )}
        </div>
      </main>
    </div>
  );
}
