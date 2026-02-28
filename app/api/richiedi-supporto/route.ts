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
      return NextResponse.json(
        { error: `Errore di rete: ${res.status}` },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Impossibile inviare la richiesta. Riprova più tardi." },
      { status: 502 }
    );
  }
}
