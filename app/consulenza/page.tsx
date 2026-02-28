"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bitcoin, Code, Network, ShieldCheck } from "lucide-react";

export default function ConsulenzaPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
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
              <span>Supporto diretto con i nostri professionisti</span>
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
          </motion.div>
        </div>
      </section>

      {/* Ambiti di Intervento */}
      <section className="py-20 border-t border-white/5 bg-background-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">I nostri ambiti di intervento</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Realizziamo soluzioni ad hoc con i massimi standard cypherpunk, valutando caso per caso le tue esigenze.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background-card p-10 rounded-xl border border-white/5 hover:border-primary/50 transition-colors flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">P2P (Privati)</h3>
              <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                L&apos;intervento ingegneristico per azzerare l&apos;errore umano.<br/><br/>
                <strong className="text-white font-medium">Cosa offriamo e tempo dedicato:</strong> 90 minuti netti di intervento esecutivo in videochiamata 1-to-1. Serve per fare il lavoro "sporco" e ingegneristico insieme al cliente (es. setup hardware wallet, recupero fondi basico, creazione seed). Include un follow-up via email per verificare che tutto sia andato a buon fine.<br/><br/>
                <strong className="text-white font-medium">Prezzi:</strong><br/>
                <span className="text-primary font-semibold">210€</span> (Prezzo agevolato riservato esclusivamente a chi è già membro dei Bailout Protocols).<br/>
                <span className="text-primary font-semibold">500€</span> (Pacchetto chiuso, una tantum, per utenti esterni non iscritti all&apos;Academy).
              </p>
            </div>
            
            <div className="bg-background-card p-10 rounded-xl border border-white/5 hover:border-primary/50 transition-colors flex flex-col h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Nodes (Aziende)</h3>
              <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                Studi di fattibilità ed esecuzione per infrastrutture complesse.<br/><br/>
                <strong className="text-white font-medium">Cosa offriamo e tempo dedicato:</strong> Progettazione e setup di architetture complesse (Mining farm, Multisig avanzati per successione aziendale/eredità, gateway di pagamento Lightning BTCPay). Il tempo di realizzazione non è preventivabile a priori.<br/><br/>
                <strong className="text-white font-medium">Prezzo:</strong> A partire da <span className="text-primary font-semibold">2.500€</span>.<br/>
                <span className="text-xs italic mt-2 block">Nota: L&apos;accesso al servizio avviene solo tramite preventivo, rilasciato dopo una prima call di analisi strategica non risolutiva, dal costo di 500€. Se il cliente accetta di procedere con il progetto, i 500€ verranno interamente scalati dal costo finale dell&apos;appalto.</span>
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
            Selezioniamo i progetti a cui affiancarci per garantire il massimo standard qualitativo. Compila il modulo e ti risponderemo il prima possibile per organizzare una chiamata.
          </p>
          <Link 
            href="/richiedi-supporto"
            className="inline-flex justify-center items-center gap-2 bg-white text-black hover:bg-gray-200 text-base font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Compila il modulo per richiedere informazioni
          </Link>
        </div>
      </section>
    </div>
  );
}
