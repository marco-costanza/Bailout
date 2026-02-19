"use client";

import Image from "next/image";
import Link from "next/link";
import { Anchor, Mail, Home } from "lucide-react";

export default function ArrivederciPage() {
  return (
    <div className="min-h-screen bg-background-dark relative overflow-hidden">
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-bitcoin opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      ></div>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col items-center w-full">
            <Link
              href="/"
              className="flex justify-center mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-bitcoin focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark rounded-lg"
            >
              <Image
                src="/images/Bailout_logo.png"
                alt="Bailout – Torna alla home"
                width={200}
                height={125}
                className="w-full max-w-[200px] object-contain"
              />
            </Link>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
              role="status"
              aria-live="polite"
            >
              <Anchor className="w-4 h-4 text-bitcoin" aria-hidden="true" />
              <span className="text-sm text-white/90">Ancora qui per te</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Arrivederci
          </h1>
          <div className="rounded-2xl p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm text-center">
            <p className="text-white/90 mb-4">
              Hai lasciato la nostra newsletter. Nessun problema: la sovranità è
              anche scegliere da chi ricevere contenuti.
            </p>
            <p className="text-white/90 mb-4">
              Se un giorno vorrai rimetterti in gioco con noi, saremo qui. Proof
              of work, non promesse — ma la porta resta aperta.
            </p>
            <p className="text-white/80 text-sm">
              Qualcosa non è andato come volevi, o ti sei disiscritto per errore?
              Scrivici pure: siamo a disposizione.
            </p>
            <p className="mt-4">
              <a
                href="mailto:info@bailoutacademy.it"
                className="inline-flex items-center gap-2 text-bitcoin hover:text-bitcoin-hover font-medium underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-bitcoin focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark rounded"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                info@bailoutacademy.it
              </a>
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Home className="w-4 h-4 shrink-0" aria-hidden="true" />
              Torna alla home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
