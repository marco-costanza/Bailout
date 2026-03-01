export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-24 sm:py-32 selection:bg-primary/30 selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-8">
          Privacy Policy
        </h1>
        
        <div className="bg-background-card/50 p-8 sm:p-10 rounded-2xl border border-white/5 space-y-6">
          <p className="text-text-secondary leading-relaxed">
            In questa pagina verrà integrata la Privacy Policy.
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <p className="text-sm text-text-secondary">
              <strong className="text-white">Istruzioni per l&apos;utente:</strong> Incolla qui lo script/iFrame fornito da <span className="text-primary">Iubenda</span> o dal tuo gestore privacy (es. MarcoCostanza.it). Sostituisci questo blocco con il codice nativo o un componente React per il rendering della policy dinamica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
