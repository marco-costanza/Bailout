"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MasterclassPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
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
          Masterclass
        </h1>
        <p className="text-text-muted text-lg mb-8">
          Sessioni intensive su temi avanzati: Lightning, self-custody, privacy. In videochiamata o dal vivo.
        </p>

        <div className="rounded-xl card-border bg-background-card/60 p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Prossime masterclass (placeholder)</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Elenco delle prossime date e temi. Contenuto da completare.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Registrazioni passate</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Possibilità di acquistare le registrazioni delle masterclass già svolte. Dettagli e link da aggiungere.
            </p>
          </section>
          <p className="text-text-muted text-sm">
            Per iscriverti alle nuove o acquistare le registrazioni: contattaci dalla home.
          </p>
        </div>
      </div>
    </div>
  );
}
