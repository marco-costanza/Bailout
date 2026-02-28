"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bitcoin, Code, Network, ShieldCheck } from "lucide-react";

export default function ConsulenzaPage() {
  return (
    <div className="min-h-screen bg-background-dark selection:bg-primary/30 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,97,2,0.1)_0,transparent_50%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Code className="w-4 h-4" />
              <span>Consulenza P2P & TimeChain</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Ingegneria Bitcoin per <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                Privati Avanzati e Corporate
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Sviluppo di infrastrutture self-hosted, architetture multisig hardware e studi di fattibilità per mining farm. Accedi alle stesse strategie usate dalle whale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/richiedi-supporto"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
              >
                Invia una richiesta <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ambiti di Intervento */}
      <section className="py-20 border-t border-white/5 bg-background-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">I nostri ambiti di intervento</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Realizziamo infrastrutture critiche con i massimi standard cypherpunk valutando caso per caso le esigenze dell&apos;entity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background-card p-10 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Self-Custody e Multisig (HNWI)</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Creazione di policy di sicurezza per capitali importanti. Setup e verifica the hardware wallet (Coldcard), architetture multisig (2-of-3 o 3-of-5), backup su acciaio e documentazione piana per le eredità e la successione di fondi crittografici.
              </p>
            </div>
            
            <div className="bg-background-card p-10 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Corporate & Lightning</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Nodi aziendali on-premise, sviluppo di soluzioni layer-2 personalizzate (gateway di instradamento pagamenti su Lightning Network), setup di casseforti aziendali incensurabili, compliance tecnica e studio di fattibilità hardware/software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Pronto ad elevare il tuo setup?</h2>
          <p className="text-text-secondary mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Selezioniamo i progetti a cui affiancarci per garantire il massimo standard qualitativo. Compila il modulo di selezione e una volta presa in carico, organizzeremo una pre-call ingegneristica.
          </p>
          <Link 
            href="/richiedi-supporto"
            className="inline-flex justify-center items-center gap-2 bg-white text-black hover:bg-gray-200 text-base font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Vai al Modulo di Selezione
          </Link>
        </div>
      </section>
    </div>
  );
}
