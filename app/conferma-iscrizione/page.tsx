"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function ConfermaIscrizionePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
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
          {/* Logo e badge */}
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
              <Mail className="w-4 h-4 text-bitcoin" aria-hidden="true" />
              <span className="text-sm text-white/90">Controlla la tua email</span>
            </div>
          </div>

          {/* Titolo e messaggio */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Conferma la tua iscrizione
          </h1>
          <div className="rounded-2xl p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm text-center">
            <p className="text-white/90 mb-4">
              Dobbiamo confermare il tuo indirizzo email per completare il processo di iscrizione.
            </p>
            <p className="text-white/90 mb-4">
              Clicca sul link presente nell&apos;e-mail che ti abbiamo appena inviato.
            </p>
            <p className="text-white/90 font-medium">
              Non ti iscriverai se non fai clic sul link di conferma.
            </p>
          </div>

          {/* Suggerimenti e link home */}
          <div className="mt-8 space-y-6 flex flex-col items-center">
            <p className="text-sm text-white/70 text-center">
              Non hai ricevuto l&apos;email? Controlla la cartella{" "}
              <strong>Spam</strong> o <strong>Promozioni</strong>.
            </p>
            <p className="text-sm text-white/60 text-center">
              Hai sbagliato indirizzo?
              <Link
                href="/#newsletter"
                className="inline-flex items-center justify-center gap-1.5 text-bitcoin hover:text-bitcoin-hover underline underline-offset-2 font-medium mt-2 ml-1"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
                Iscriviti di nuovo dalla home
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
