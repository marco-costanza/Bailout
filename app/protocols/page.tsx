"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShieldCheck, Zap } from "lucide-react";

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
              <span>La nostra accademia di formazione</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Bailout Protocols: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                Diventa Sovrano del Tuo Stack
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Il percorso online strutturato passo-passo (0 a 100) per comprendere il network Bitcoin e padroneggiare in totale autonomia la self-custody.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://marcocostanza.it/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
              >
                Inizia ora il percorso <ArrowRight className="w-5 h-5" />
              </Link>
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

      {/* Curriculum / Struttura */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Cosa trovi all&apos;interno</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Tutto ciò che ti serve per acquistare, gestire ed utilizzare i tuoi satoshi al 100%. In completa sicurezza ed anonimato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fondamenti Economici</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Perché Bitcoin esiste? Come funziona la TimeChain, proof of work e perché sconfigge l&apos;inflazione fiat.
              </p>
            </div>
            
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sicurezza</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Come scegliere e configurare il tuo hardware wallet. Come gestire le tue transazioni. Come diventare il sovrano del tuo patrimonio.
              </p>
            </div>
            
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy e anonimato</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tutte le migliori pratiche per gestire l&apos;acquisto e la spesa in totale sicurezza e anonimato.
              </p>
            </div>

            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mining</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Approfondisci le basi del mining e della Proof of Work. Scopri come partecipare alla rete costruendo la tua operatività casalinga o industriale.
              </p>
            </div>

            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Layer 2</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Studia e applica Lightning Network, Liquid e altri layer secondari per micro-transazioni istantanee, confidenziali e a bassissimo costo.
              </p>
            </div>

            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nodi e protocollo</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Avvia e gestisci il tuo nodo personale. Contribuisci attivamente alla decentralizzazione del network interagendo senza intermediari.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing / Offer Section */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-background-card rounded-2xl border border-primary/20 overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            
            <div className="p-8 sm:p-12 md:flex justify-between items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-white mb-4">Iscrizione Annuale</h2>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold text-white">€499</span>
                  <span className="text-text-secondary mb-1">/ anno</span>
                </div>
                
                <h4 className="text-lg font-medium text-white mb-3">Cosa offriamo:</h4>
                <ul className="space-y-3 text-text-secondary mb-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Accesso on-demand a tutti i &quot;Protocolli&quot; (videocorsi pratici).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>L&apos;Academy è un ambiente vivo: viene rilasciata una nuova lezione ogni settimana, tenuta dai diversi docenti e professionisti del nostro network.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Assistente AI integrato (addestrato sui nostri materiali) per uno studio interattivo in tempo reale.</span>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
                <Link 
                  href="https://marcocostanza.it/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-4 rounded-md transition-colors"
                >
                  Acquista l&apos;Accesso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Altri Servizi Section */}
      <section className="py-24 bg-background-card/50 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Cerchi un supporto più mirato?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Se l&apos;Academy non fa al caso tuo, scopri i nostri servizi esclusivi dal vivo o le consulenze individuali.
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
