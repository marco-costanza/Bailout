"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Target } from "lucide-react";
import Image from "next/image";

export default function ConsensusPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,97,2,0.15)_0,transparent_50%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Users className="w-4 h-4" />
              <span>Eventi Esclusivi dal vivo o Live streaming</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Bailout Consensus: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                In diretta con i docenti
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Dalla teoria alla pratica. Approfondisci gli argomenti con i migliori cypherpunk del settore. Togliti qualsiasi dubbio grazie alle sessioni finali di Q&A.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-20 border-t border-white/5 bg-background-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">I dettagli dei nostri interventi</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Webinar verticali, approfondimenti live ed un filo diretto con i nostri docenti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Da 2 a 3 ore</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Di live streaming o lezione dal vivo (sarà specificato di volta in volta per ogni masterclass).
              </p>
            </div>
            
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Q&A Diretta</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Possibilità di fare domande alla fine di ogni sessione per sciogliere qualsiasi dubbio pratico.
              </p>
            </div>
            
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Accesso Illimitato</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Goditi la registrazione e tutti i materiali di supporto (saranno inviati in un secondo momento).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prossimi Eventi */}
      <section id="prossimi-eventi" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-white mb-4">I prossimi incontri</h2>
          <p className="text-text-secondary mb-12">
            Le classi sono a numero chiuso (max 15/20 partecipanti) per garantire un alto grado di assistenza tecnica ad ogni singolo studente.
          </p>
          
          <div className="bg-background-card rounded-xl border border-white/10 p-8 flex flex-col items-center">
             <div className="text-text-muted mb-4 opacity-70">
                Nessun evento pubblico programmato al momento.
             </div>
             <p className="text-white mb-6">
               Stiamo organizzando la prossima data. Iscriviti alla lista d&apos;attesa per ricevere in anteprima il protocollo dell&apos;evento.
             </p>
             <Link 
                href="/#newsletter"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-white font-medium transition-colors"
              >
                Mettimi in Lista d&apos;Attesa
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
