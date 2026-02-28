"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Server, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function NodesPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,97,2,0.1)_0,transparent_50%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Server className="w-4 h-4" />
              <span>Infrastrutture B2B ad Alto Profilo</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Bailout Nodes: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                Il tuo Partner Tecnologico
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Affianchiamo aziende, fondi e istituzioni nello sviluppo di network on-premise, casseforti inattaccabili (Multisig avanzati), integrazione di gateway di pagamento e design di Mining Farm personalizzate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/richiedi-supporto"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
              >
                Organizza una Pre-Call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ambiti d'azione */}
      <section className="py-20 border-t border-white/5 bg-background-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">L'Ingegneria incontra la Compliance</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Operazioni strategiche pensate per il tuo Business o per la successione aziendale dei tuoi fondi crittografici.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nodi & Payments (L2)</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Setup di Nodi Bitcoin on-premise non censorabili e installazione gateway per accettare pagamenti in Lightning Network (es. BTCPay Server). Converti o trattieni liquidità scavalcando il banking system.
              </p>
            </div>
            
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multisig Corporate</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Strutturazione chiavi asimmetriche (es. 2-of-3 o 3-of-5) distribuite tra i soci e/o eredi per eliminare il single point of failure ed assicurare la successione delle liquidità aziendali nei prossimi decenni.
              </p>
            </div>
            
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Consulenza su Mining</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Studio di fattibilità economica (hardware, hash rate, costi energia). Valutazione per integrazione ASICS in ambito industriale per sfruttare gli esuberi di calore o recuperare i costi energetici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Process */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            
          <h2 className="text-3xl font-semibold text-white mb-6">Dal setup all'operatività in house</h2>
          <p className="text-text-secondary mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            I lavori di ingegneria Corporate e Private per infrastrutture superiori richiedono tempo e attenzione totale.<br/><br/>
            I costi di realizzazione partono da <span className="text-primary font-semibold">2.500€</span> (+ eventuali costi legati all'acquisto degli hardware o server dedicati).<br/><br/>
            Si procede esclusivamente su <strong>preventivo personalizzato</strong>, elaborato dopo una Call di Analisi da 500€ (somma che verrà interamente dedotta dal costo finale se confermerai i lavori).
          </p>
          
          <Link 
            href="/richiedi-supporto"
            className="inline-flex justify-center items-center gap-2 bg-white text-black hover:bg-gray-200 text-base font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Sottoponici il tuo Caso Aziendale
          </Link>
        </div>
      </section>
    </div>
  );
}
