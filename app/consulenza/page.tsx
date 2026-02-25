"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConsulenzaPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background-dark relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-xl mx-auto px-4 sm:px-6 py-16">
        <Link
          href="/#proof-of-work"
          className="inline-flex items-center gap-1 text-bitcoin text-sm font-medium hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Torna ai servizi
        </Link>

        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Consulenza tecnica
        </h1>
        <p className="text-text-muted text-lg mb-8">
          Raccontaci di cosa hai bisogno: ti ricontattiamo noi con il professionista più adatto.
        </p>

        <div className="rounded-xl card-border bg-background-card/60 p-6 sm:p-8">
          <div className="flex gap-2 mb-8">
            <span
              className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-bitcoin" : "bg-white/10"}`}
              aria-hidden="true"
            />
            <span
              className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-bitcoin" : "bg-white/10"}`}
              aria-hidden="true"
            />
          </div>

          {step === 1 && (
            <section aria-labelledby="step1-heading">
              <h2 id="step1-heading" className="text-xl font-semibold text-white mb-4">
                Step 1 — I tuoi dati (placeholder)
              </h2>
              <p className="text-text-secondary text-sm mb-4">
                Nome, email, telefono. Form da integrare con backend o servizio di invio.
              </p>
              <div className="space-y-3 text-sm text-text-muted">
                <p>Campo nome (placeholder)</p>
                <p>Campo email (placeholder)</p>
                <p>Campo telefono (placeholder)</p>
              </div>
              <Button
                type="button"
                className="mt-6"
                onClick={() => setStep(2)}
              >
                Avanti
              </Button>
            </section>
          )}

          {step === 2 && (
            <section aria-labelledby="step2-heading">
              <h2 id="step2-heading" className="text-xl font-semibold text-white mb-4">
                Step 2 — Di cosa hai bisogno (placeholder)
              </h2>
              <p className="text-text-secondary text-sm mb-4">
                Nodi, wallet, setup, azienda/privato. Campi da definire.
              </p>
              <div className="space-y-3 text-sm text-text-muted">
                <p>Area di interesse (placeholder)</p>
                <p>Messaggio (placeholder)</p>
              </div>
              <div className="flex gap-3 mt-6">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Indietro
                </Button>
                <Button type="button">Invia richiesta</Button>
              </div>
            </section>
          )}
        </div>

        <p className="text-text-muted text-sm mt-6 text-center">
          Dopo l&apos;invio ti contatteremo per organizzare un incontro in videocall o dal vivo.
        </p>
      </div>
    </div>
  );
}
