"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BitcoinAcademyPage() {
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

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link
          href="/#proof-of-work"
          className="inline-flex items-center gap-1 text-bitcoin text-sm font-medium hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Torna ai servizi
        </Link>

        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Bitcoin Academy
        </h1>
        <p className="text-text-muted text-lg mb-8">
          Percorso strutturato per capire Bitcoin dalla base: economia, tecnologia e sovranità.
        </p>

        <div className="rounded-xl card-border bg-background-card/60 p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contenuto (placeholder)</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Qui troverai la presentazione dell&apos;Academy: lezioni disponibili, moduli, prezzi e modalità di accesso. Contenuto da completare.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Modalità</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Videolezioni on demand, supporto docenti, accesso quando vuoi. Dettagli da definire.
            </p>
          </section>
          <p className="text-text-muted text-sm">
            Per informazioni: contattaci dalla home o compila il form nella sezione Consulenza.
          </p>
        </div>
      </div>
    </div>
  );
}
