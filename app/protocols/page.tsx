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
              <span>Bailout Academy</span>
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
                Inizia il Protocollo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/consulenza"
                className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-base font-semibold px-8 py-4 rounded-md transition-colors border border-white/10 w-full sm:w-auto"
              >
                Preferisci un 1-to-1?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum / Struttura */}
      <section className="py-20 bg-background-card/50 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Cosa imparerai</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Nessuna nozione superflua, solo quello che serve per mettere in sicurezza i tuoi satoshi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold text-white mb-3">Hardware & Self-Custody</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Come scegliere e configurare Coldcard, Jade o BitBox. Setup del seed e pratiche di scarto di hardware compromessi.
              </p>
            </div>
            
            <div className="bg-background-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nodi & Privacy</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Gestire il tuo nodo Bitcoin e routing su Lightning Network per transazioni rapide con la massima confidenzialità.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
