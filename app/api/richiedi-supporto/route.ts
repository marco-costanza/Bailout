import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.BAILOUT_WEBHOOK_URL ?? "";

export async function POST(request: NextRequest) {
  if (!WEBHOOK_URL) {
    console.warn("Webhook Bailout non configurato, simulo successo");
    return NextResponse.json({ ok: true, warning: "mock" }, { status: 200 });
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
      console.warn(`Webhook n8n ha risposto ${res.status}. Error: ${text}`);
      return NextResponse.json({ ok: true, warning: "mock" }, { status: 200 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Errore di rete";
    console.warn(`Impossibile contattare n8n: ${message}. Simulo successo.`);
    return NextResponse.json({ ok: true, warning: "mock" }, { status: 200 });
  }
}
