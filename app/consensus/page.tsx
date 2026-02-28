"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Target } from "lucide-react";
import Image from "next/image";

export default function ConsensusPage() {
  return (
    <div className="min-h-screen bg-background-dark selection:bg-primary/30 selection:text-white">
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
              <span>Eventi Esclusivi Live</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Bailout Consensus: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                Masterclass Dal Vivo
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Sessioni intensive in location riservate. Dalla teoria all'hardware: metti le mani sul protocollo assistito dai migliori cypherpunk del settore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="#prossimi-eventi"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
              >
                Scopri le Prossime Date <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-20 border-t border-white/5 bg-background-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Sincronizzati col Network</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Le masterclass Bailout Consensus non sono i classici convegni in cui ascolti passivamente. Porti il tuo PC, il tuo hardware wallet e operi.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1.5 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Hands-on Garantito</h4>
                    <p className="text-text-secondary text-sm">Fai setup live e verifichi i risultati insieme ai docenti.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1.5 rounded-full">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Networking Reale</h4>
                    <p className="text-text-secondary text-sm">Conosci altri bitcoiner con cui instaurare scambi peer-to-peer e collaborazioni.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <Image 
                src="/images/Masterclass-BTC.jpg" 
                alt="Bailout Consensus Masterclass" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prossimi Eventi */}
      <section id="prossimi-eventi" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-white mb-4">Calendario Eventi</h2>
          <p className="text-text-secondary mb-12">
            Le classi sono a numero chiuso (max 15/20 partecipanti) per garantire un alto grado di assistenza tecnica ad ogni singolo studente.
          </p>
          
          <div className="bg-background-card rounded-xl border border-white/10 p-8 flex flex-col items-center">
             <div className="text-text-muted mb-4 opacity-70">
                Nessun evento pubblico programmato al momento.
             </div>
             <p className="text-white mb-6">
               Stiamo organizzando la prossima data. Iscriviti alla lista d'attesa per ricevere in anteprima il protocollo dell'evento.
             </p>
             <Link 
                href="/#newsletter"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-white font-medium transition-colors"
              >
                Mettimi in Lista d'Attesa
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
