"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, ArrowRight, ArrowLeft, CheckCircle2, Loader2, AlertCircle, Building2, User, Clock, Video, FileText, Send, MessageSquare } from "lucide-react";

// URL provvisorio o N8N Webhook in futuro
const API_URL = "/api/richiedi-supporto";

export default function RichiediSupportoPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State del Form
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telegram: "",
    tipologia: "", // "privato" o "azienda"
    categoria: "",
    descrizione: "",
    urgenza: "", // "urgente" o "normale"
    supporto: "", // "chat", "video"
    isMember: "", // "si", "no"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    // Validazione base per step
    if (step === 1 && (!formData.email)) {
      setError("Inserisci almeno la tua email principale.");
      return;
    }
    if (step === 2 && (!formData.tipologia || !formData.categoria)) {
      setError("Seleziona la tua tipologia e la categoria di interesse.");
      return;
    }
    setError(null);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError(null);
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.urgenza || !formData.supporto || !formData.isMember) {
      setError("Seleziona urgenza, tipo di supporto e se sei membro dell'accademia prima di inviare.");
      return;
    }

    setIsLoading(true);
    setError(null);

    // TODO: Inserire qui la logica di validazione del token reCaptcha fornito dall'utente.

    try {
      // Mock API o Fetch Reale
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      // Anche se dovesse fallire per ora ignoriamo (adattando x soft launch)
      setIsSubmitted(true);
    } catch (err) {
      console.error("Errore invio richiesta supporto:", err);
      // Fallback gracefully come richiesto dalla phase 1 per la navigabilità
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Calcolo prezzo dinamico
  let currentPrice = 0;
  if (formData.supporto === 'chat') currentPrice = 100;
  if (formData.supporto === 'video') currentPrice = 250;
  if (currentPrice > 0) {
    if (formData.urgenza === 'urgente') currentPrice *= 2;
    if (formData.isMember === 'si') currentPrice = Math.round(currentPrice * 0.79);
  }

  // Varianti Animazione
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
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
          <h2 className="text-2xl font-semibold text-white mb-4">Richiesta Ricevuta!</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Abbiamo ricevuto il tuo modulo di applicazione. Valuteremo la tua situazione e ti contatteremo all&apos;indirizzo email o su Telegram il prima possibile per concordare l&apos;incontro.
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
        
        {/* Header e Progress Bar */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Richiesta di Consulenza Tecnica
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Compila il modulo per richiederci supporto. Selezioniamo i progetti a cui affiancarci per garantire il massimo standard qualitativo.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-8 flex gap-4">
            <ShieldAlert className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-sm text-text-secondary">
              <strong>Avviso Importante:</strong> Questo modulo serve esclusivamente per consulenze di tipo tecnico/ingegneristico (Nodi, Multisig, Mining). Per strategie di investimento, visita <a href="https://whalestreet.it" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WhaleStreet</a>.
            </p>
          </div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Step {step} di 3</span>
            <span className="text-sm text-text-secondary">{Math.round((step / 3) * 100)}% Completato</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-primary h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-background-card/50 p-6 sm:p-10 rounded-2xl border border-white/5 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* STEP 1: Dati Personali */}
            {step === 1 && (
              <motion.div key="step1" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <h3 className="text-xl font-medium text-white border-b border-white/10 pb-2 mb-6">Informazioni di Contatto</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-secondary">Nome (Opzionale)</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Il tuo nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-secondary">Cognome (Opzionale)</label>
                    <input type="text" name="cognome" value={formData.cognome} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Il tuo cognome" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-secondary">Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="La tua email principale" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-secondary">Username Telegram (Opzionale)</label>
                  <input type="text" name="telegram" value={formData.telegram} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="@tuousername o numero WhatsApp" />
                </div>

                {error && (
                  <div className="flex gap-3 p-3 mt-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="pt-6 flex justify-end">
                  <button onClick={nextStep} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer">
                    Avanti <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Valutazione Necessità */}
            {step === 2 && (
              <motion.div key="step2" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <h3 className="text-xl font-medium text-white border-b border-white/10 pb-2 mb-6">Valutazione Necessità</h3>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-text-secondary">Sei un privato o un&apos;azienda? *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => handleSelect('tipologia', 'privato')} className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-colors ${formData.tipologia === 'privato' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                      <User className="w-6 h-6" />
                      <span className="font-medium">Utente Privato</span>
                    </button>
                    <button type="button" onClick={() => handleSelect('tipologia', 'azienda')} className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-colors ${formData.tipologia === 'azienda' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                      <Building2 className="w-6 h-6" />
                      <span className="font-medium">Azienda</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="block text-sm font-medium text-text-secondary">Categoria di Interesse *</label>
                  <select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled>Seleziona l&apos;argomento...</option>
                    <option value="sicurezza">Sicurezza e custodia</option>
                    <option value="acquisto">Acquisto e vendita</option>
                    <option value="privacy">Privacy e anonimato</option>
                    <option value="fiscalita">Fiscalità</option>
                    <option value="mining">Mining</option>
                    <option value="protocollo">Protocollo e nodi</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="block text-sm font-medium text-text-secondary">Descrivi brevemente la tua necessità (Opzionale ma raccomandato)</label>
                   <textarea name="descrizione" value={formData.descrizione} onChange={handleChange} rows={4} className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Quale problema stai affrontando? Cosa vorresti realizzare col nostro intervento?" />
                </div>

                {error && (
                  <div className="flex gap-3 p-3 mt-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="pt-6 flex justify-between">
                  <button onClick={prevStep} className="inline-flex items-center gap-2 hover:bg-white/5 text-white px-6 py-3 rounded-md font-medium transition-colors border border-white/10 cursor-pointer">
                    <ArrowLeft className="w-4 h-4" /> Indietro
                  </button>
                  <button onClick={nextStep} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer">
                     Avanti <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

             {/* STEP 3: Urgenza e Prezzi */}
             {step === 3 && (
              <motion.div key="step3" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <h3 className="text-xl font-medium text-white border-b border-white/10 pb-2 mb-6">Urgenza e Modalità</h3>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-text-secondary">Livello di Urgenza *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => handleSelect('urgenza', 'urgente')} className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 text-center transition-colors ${formData.urgenza === 'urgente' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium text-sm">Emergenza (Entro 24/48h)</span>
                      <span className="text-xs text-text-secondary mt-1">Il costo dell&apos;intervento aumenta del 100%</span>
                    </button>
                    <button type="button" onClick={() => handleSelect('urgenza', 'normale')} className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 text-center transition-colors ${formData.urgenza === 'normale' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                      <Clock className="w-5 h-5" />
                      <span className="font-medium text-sm">Normale (Senza fretta)</span>
                      <span className="text-xs text-text-secondary mt-1">Prezzo standard del servizio</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="block text-sm font-medium text-text-secondary">Modalità di Supporto Preferita *</label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <button type="button" onClick={() => handleSelect('supporto', 'chat')} className={`p-4 rounded-xl border flex flex-col justify-start text-left gap-2 transition-colors ${formData.supporto === 'chat' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                      <div className="flex items-center gap-2 mb-1"><MessageSquare className="w-4 h-4" /> <span className="font-semibold">Mail e Chat</span></div>
                      <span className="text-xs text-text-secondary leading-relaxed">Risolviamo il tuo problema direttamente via mail o Telegram. Adatto per problemi semplici e rapide richieste di informazioni.</span>
                    </button>
                    <button type="button" onClick={() => handleSelect('supporto', 'video')} className={`p-4 rounded-xl border flex flex-col justify-start text-left gap-2 transition-colors ${formData.supporto === 'video' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                       <div className="flex items-center gap-2 mb-1"><Video className="w-4 h-4" /> <span className="font-semibold">Video Call 1-to-1</span></div>
                       <span className="text-xs text-text-secondary leading-relaxed">Intervento in videochiamata su Zoom della durata massima di 90 minuti. Faremo setup e test insieme e risponderemo a tutte le tue domande.</span>
                    </button>
                  </div>
                  <p className="text-sm mt-3 text-text-secondary">
                    Se hai scelto l&apos;intervento via mail \ chat ma il problema si scopre risolvibile solo in videochiamata, scaleremo quanto hai già pagato dal costo del servizio &quot;Video Call 1-to-1&quot;.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="block text-sm font-medium text-text-secondary">Accademia Bailout *</label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <button type="button" onClick={() => handleSelect('isMember', 'si')} className={`p-4 rounded-xl border flex flex-col justify-start text-left gap-2 transition-colors ${formData.isMember === 'si' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                      <span className="font-semibold text-sm">Sono già Membro della vostra accademia</span>
                      <span className="text-xs text-text-secondary leading-relaxed">Se fai parte di Bailout Protocols hai diritto al 21% di sconto sul nostro supporto.</span>
                    </button>
                    <button type="button" onClick={() => handleSelect('isMember', 'no')} className={`p-4 rounded-xl border flex flex-col justify-start text-left gap-2 transition-colors ${formData.isMember === 'no' ? 'bg-primary/20 border-primary text-primary' : 'bg-background border-white/10 text-white hover:border-white/30'}`}>
                      <span className="font-semibold text-sm">NON sono ancora un membro della vostra accademia</span>
                      <span className="text-xs text-text-secondary leading-relaxed">Prezzo pieno.</span>
                    </button>
                  </div>
                </div>

                {currentPrice > 0 && (
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-lg font-medium text-white">Costo Stimato dell&apos;Intervento:</span>
                    <span className="text-2xl font-semibold text-primary">{currentPrice}€</span>
                  </div>
                )}

                {error && (
                  <div className="flex gap-3 p-3 mt-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="pt-6 flex justify-between">
                  <button onClick={prevStep} className="inline-flex items-center gap-2 hover:bg-white/5 text-white px-6 py-3 rounded-md font-medium transition-colors border border-white/10 cursor-pointer">
                    <ArrowLeft className="w-4 h-4" /> Indietro
                  </button>
                  
                  <button onClick={handleSubmit} disabled={isLoading} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-md font-medium transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,97,2,0.3)] hover:shadow-[0_0_30px_rgba(255,97,2,0.5)]">
                    {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Inviando...</> : <><Send className="w-4 h-4" /> Invia Richiesta</>}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
