import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.BAILOUT_WEBHOOK_URL ?? "";

export async function POST(request: NextRequest) {
  if (!WEBHOOK_URL) {
    return NextResponse.json(
      { error: "Configurazione mancante. Contatta l'amministratore." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        {
          error: `Webhook n8n ha risposto ${res.status}. Verifica che l'URL sia corretto e il workflow attivo.`,
          details: res.status === 404 ? "URL webhook non trovato (404). Controlla BAILOUT_WEBHOOK_URL." : undefined,
        },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Errore di rete";
    return NextResponse.json(
      { error: `Impossibile contattare n8n: ${message}. Riprova più tardi.` },
      { status: 502 }
    );
  }
}
