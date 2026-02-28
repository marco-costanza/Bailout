"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const API_URL = "/api/richiedi-supporto";

export default function RichiediSupportoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const payload = {
      nome: (form.querySelector("#nome") as HTMLInputElement).value.trim(),
      cognome: (form.querySelector("#cognome") as HTMLInputElement).value.trim(),
      email: (form.querySelector("#email") as HTMLInputElement).value.trim(),
      telegram: (form.querySelector("#telegram") as HTMLInputElement).value.trim() || undefined,
      ambito: (form.querySelector("#ambito") as HTMLSelectElement).value,
      descrizione: (form.querySelector("#descrizione") as HTMLTextAreaElement).value.trim(),
    };

    setIsLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      const errMsg = (data as { error?: string; details?: string }).error;
      const details = (data as { details?: string }).details;
      if (!res.ok) {
        console.error("Errore API richiede supporto:", details ? `${errMsg} ${details}` : errMsg ?? `Errore: ${res.status}`);
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error("Errore invio richiesta supporto:", err);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-background-card border border-white/10 rounded-2xl p-10 max-w-lg text-center"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-4">Richiesta Ricevuta</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Abbiamo ricevuto il tuo modulo di applicazione. Il nostro team tecnico valuterà la
            fattibilità del tuo caso e ti contatterà al più presto per organizzare una prima analisi
            conoscitiva.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-md transition-colors border border-white/10"
          >
            Torna alla Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Richiesta di Consulenza Tecnica
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Bailout opera a stretto contatto con un numero selezionato di clienti privati e
              corporate. Compila il modulo con massima precisione per permetterci di valutare le
              tue necessità ingegneristiche.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-10 flex gap-4">
            <ShieldAlert className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-sm text-text-secondary">
              <strong>Avviso Importante:</strong> Questo modulo serve esclusivamente per consulenze
              di tipo tecnico/ingegneristico (Nodi, Multisig, Mining). Se stai cercando consulenza
              per l&apos;allocazione patrimoniale o investimenti, rivolgiti alla nostra boutique{" "}
              <a
                href="https://whalestreet.it"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhaleStreet
              </a>
              .
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-background-card/50 p-6 sm:p-10 rounded-2xl border border-white/5"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white border-b border-white/10 pb-2">
                Informazioni Base
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="block text-sm font-medium text-text-secondary">
                    Nome *
                  </label>
                  <input
                    required
                    type="text"
                    id="nome"
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cognome" className="block text-sm font-medium text-text-secondary">
                    Cognome *
                  </label>
                  <input
                    required
                    type="text"
                    id="cognome"
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="La tua email principale"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="telegram" className="block text-sm font-medium text-text-secondary">
                  Username Telegram (Opzionale, consigliato)
                </label>
                <input
                  type="text"
                  id="telegram"
                  className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="@tuousername"
                />
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-medium text-white border-b border-white/10 pb-2">
                Ambito Tecnico
              </h3>
              <div className="space-y-2">
                <label htmlFor="ambito" className="block text-sm font-medium text-text-secondary">
                  Scegli la tipologia *
                </label>
                <select
                  required
                  id="ambito"
                  className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled selected>
                    Seleziona un&apos;area di interesse
                  </option>
                  <option value="multisig">Self-Custody e Soluzioni Multisig</option>
                  <option value="nodo">Setup e Routing su Nodo Lightning / On-Chain</option>
                  <option value="mining">Analisi / Installazione Mining Farm</option>
                  <option value="corporate">Adozione Corporate (Pagamenti L2, Riserve)</option>
                  <option value="altro">Altre necessità hardware/software specifiche</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="descrizione" className="block text-sm font-medium text-text-secondary">
                  Descrivi la tua necessità *
                </label>
                <textarea
                  required
                  id="descrizione"
                  rows={5}
                  className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-y"
                  placeholder="Cosa stai cercando di implementare? Quali problematiche stai affrontando nel tuo setup attuale?"
                />
              </div>
            </div>

            {error && (
              <div className="flex gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-4 rounded-md transition-colors mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                  Invio in corso...
                </>
              ) : (
                <>
                  Invia Applicazione a Bailout <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-xs text-text-secondary text-center mt-4">
              Cliccando su invia acconsenti al trattamento dei dati personali ai fini operativi della
              consulenza.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
