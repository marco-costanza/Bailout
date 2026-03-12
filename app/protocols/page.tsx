"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, User, Clock } from "lucide-react";

const PROTOCOLLI_PLACEHOLDER = [
  {
    id: "1",
    titolo: "Fondamenti Bitcoin e Self-Custody",
    docente: "Docente da definire",
    prezzo: "€99",
    durata: "6 ore",
    descrizione: "Dalla teoria alla pratica: acquisto, custodia e gestione dei tuoi satoshi in totale autonomia.",
  },
  {
    id: "2",
    titolo: "Hardware Wallet e Sicurezza",
    docente: "Docente da definire",
    prezzo: "€149",
    durata: "4 moduli",
    descrizione: "Scelta, configurazione e uso sicuro del tuo hardware wallet. Zero compromessi sulla sicurezza.",
  },
  {
    id: "3",
    titolo: "Privacy e Anonimato",
    docente: "Docente da definire",
    prezzo: "€129",
    durata: "5 ore",
    descrizione: "Migliori pratiche per acquisto e spesa in anonimato. Strumenti e procedure operative.",
  },
  {
    id: "4",
    titolo: "Mining: dalle basi all'operatività",
    docente: "Docente da definire",
    prezzo: "€179",
    durata: "8 ore",
    descrizione: "Proof of Work, mining domestico e industriale. Come partecipare alla rete in prima persona.",
  },
  {
    id: "5",
    titolo: "Lightning Network e Layer 2",
    docente: "Docente da definire",
    prezzo: "€149",
    durata: "6 ore",
    descrizione: "Micro-pagamenti istantanei, Liquid e altri layer. Teoria e setup pratico.",
  },
  {
    id: "6",
    titolo: "Nodi e Protocollo",
    docente: "Docente da definire",
    prezzo: "€199",
    durata: "10 ore",
    descrizione: "Avvia il tuo nodo, verifica le transazioni e contribuisci alla decentralizzazione del network.",
  },
] as const;

export default function ProtocolsPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,97,2,0.15)_0,transparent_50%)]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4" />
              <span>Catalogo corsi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Bailout Protocols: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                Diventa Sovrano del Tuo Stack
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Videocorsi pratici venduti singolarmente. Ogni protocollo ha il suo docente, prezzo e durata: scegli ciò che ti serve e studia al tuo ritmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#corsi"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
              >
                Scopri i protocolli <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/consulenza"
                className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-base font-semibold px-8 py-4 rounded-md transition-colors border border-white/10 w-full sm:w-auto"
              >
                Bisogno di supporto privato?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Griglia Corsi (placeholder) */}
      <section id="corsi" className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">I protocolli</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Corsi on-demand acquistabili singolarmente. Ogni protocollo è tenuto da un docente del network Bailout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROTOCOLLI_PLACEHOLDER.map((corso) => (
              <motion.div
                key={corso.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors flex flex-col h-full"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{corso.titolo}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="w-4 h-4 text-primary" />
                    {corso.docente}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    {corso.durata}
                  </span>
                </div>
                <p className="text-primary font-semibold text-lg mb-4">{corso.prezzo}</p>
                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">{corso.descrizione}</p>
                <span className="inline-flex justify-center items-center py-2.5 px-4 rounded-md bg-white/5 text-text-secondary text-sm font-medium border border-white/10 cursor-not-allowed">
                  Prossimamente
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Altri Servizi Section */}
      <section className="py-24 bg-background-card/50 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Cerchi un supporto più mirato?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Se i corsi non bastano, scopri i nostri servizi esclusivi dal vivo o le consulenze individuali.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all flex flex-col h-full group">
              <h3 className="text-2xl font-semibold text-white mb-2">Eventi Live e On-Demand</h3>
              <p className="text-text-secondary mb-8 flex-1">
                Partecipa alle sessioni approfondite in diretta streaming (o dal vivo) con i docenti, comprensive di sessioni finali Q&A per dissipare ogni dubbio.
              </p>
              <Link
                href="/consensus"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:underline"
              >
                Scopri Bailout Consensus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all flex flex-col h-full group">
              <h3 className="text-2xl font-semibold text-white mb-2">Consulenze 1-to-1 e per Aziende</h3>
              <p className="text-text-secondary mb-8 flex-1">
                L&apos;intervento ingegneristico privato per annullare l&apos;errore umano. Ideale per Private, Corporate o per realizzare architetture complesse (Mining Farm, Multisig etc.).
              </p>
              <Link
                href="/consulenza"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:underline"
              >
                Scopri il Servizio Dedicato <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
