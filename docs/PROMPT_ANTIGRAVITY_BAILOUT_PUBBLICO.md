# Prompt per Antigravity: Bailout Soft Launch (Vetrina pubblicabile)

Usa questo prompt per far eseguire ad Antigravity le modifiche che portano Bailout al "Soft Launch": sito 100% navigabile, senza broken link e senza form che crashano, con login/dashboard reindirizzati a marcocostanza.it e tutto il resto in stato "Work in Progress" dove serve.

---

## Prompt da incollare

```
Sei un Senior Next.js Developer e stiamo per fare il Soft Launch (Deploy V 1.0) del sito istituzionale Bailout.

Il frontend (UI/UX, animazioni Framer Motion, layout, design system nero21/arancione6102) è stato concepito e completato. Academy e area riservata studenti restano su marcocostanza.it: su Bailout non vogliamo login né dashboard attivi, solo redirect verso marcocostanza.it.

OBIETTIVO ATTUALE: "Vetrina Pubblicabile e Funzionante".
Voglio che il sito sia al 100% navigabile, senza broken link e senza form che crashano. Login e dashboard devono reindirizzare a marcocostanza.it. Tutto ciò che non è pronto (newsletter, eventuali CTA non attive) va messo su "Work in Progress" / "In arrivo".

Path progetto: ~/Workspace/Projects/Website Master/Bailout

Ecco i task che devi completare, controllando i file uno ad uno:

1. **Gestione del Form Richiedi Supporto (app/richiedi-supporto/page.tsx)**
   - Il form fa una fetch a /api/richiedi-supporto. Se in prod l’env del webhook n8n manca o n8n non risponde, la POST può fallire e l’utente vede l’errore.
   - [Azione]: Nel file della pagina, nel blocco catch (e, se vuoi, quando res.ok è false), gestisci in modo SILENT: mostra comunque la modale verde "Richiesta Ricevuta" (setIsSubmitted(true)) e logga i dati/errore solo in console.error. L’utente non deve mai vedere crash né messaggi tecnici. Stesso design system (CheckCircle2, testo "Richiesta ricevuta", bottone Torna alla home).

2. **Route API app/api/richiedi-supporto/route.ts (Graceful Degradation)**
   - [Azione]: Se la variabile BAILOUT_WEBHOOK_URL (o NEXT_PUBLIC_BAILOUT_WEBHOOK_URL, verifica quale usa il progetto) è assente, fai console.warn("Webhook Bailout non configurato, simulo successo") e ritorna NextResponse.json({ ok: true, warning: "mock" }, { status: 200 }). Se la fetch verso n8n va in catch o risponde con errore, stessa cosa: log in console e ritorna 200 con { ok: true, warning: "mock" }. Così il frontend riceve sempre 200 e il sito funziona anche senza webhook configurato.

3. **Navbar (components/navbar.tsx)**
   - [Azione 1]: Rimuovi il link "Accedi" che punta a /login.
   - [Azione 2]: Aggiungi al suo posto un link "Area Riservata" (o "Accedi all’Academy") che punta a https://marcocostanza.it/login con target="_blank" rel="noopener noreferrer".
   - [Azione 3]: Nel menu mobile: stesso comportamento (nessun link a /login, solo link esterno a marcocostanza.it).

4. **Footer (components/footer.tsx)**
   - [Azione]: Nella colonna "Ecosistema", la voce "Area Riservata Studenti (Accedi)" deve puntare a https://marcocostanza.it/login come link esterno (target="_blank" rel="noopener noreferrer"). NON toccare la "Nota di Demarcazione" WhaleStreet (testo e link).

5. **Redirect Login e Dashboard**
   - [Azione]: Le route /login e /dashboard non devono essere pagine attive su Bailout. Nel middleware (middleware.ts alla root) dove già gestisci updateSession: se il pathname è /login o /dashboard, fai subito NextResponse.redirect("https://marcocostanza.it/login", 302) e ritorna, senza eseguire il resto. In questo modo chi va su bailout.website/login o /dashboard viene portato su marcocostanza.it.

6. **Placeholder Pagine Legali**
   - [Azione]: Controlla se esistono app/privacy-policy/page.tsx e app/termini-e-condizioni/page.tsx. Se non esistono (o sono vuote), creale con layout coerente (nero21, arancione6102, font Ubuntu/Inter): titolo "Privacy Policy" / "Termini e Condizioni" e un breve testo tipo "Questa pagina è in fase di aggiornamento. Work in progress." così non si va in 404.

7. **Newsletter nel Footer**
   - [Azione]: La colonna "Resta Aggiornato" ha un link a /#newsletter. Se in app/page.tsx non esiste una sezione con id="newsletter" funzionante, non promettere l’iscrizione: sostituisci il bottone/link con un messaggio testuale elegante tipo "In arrivo" o "Work in progress" (stile design system), senza link attivo.

8. **Linting e Build**
   - [Azione]: Lancia npm run build in locale. Se ci sono errori (es. react/no-unescaped-entities o altri) nelle pagine toccate, correggili. Segnala eventuali warning non bloccanti. Obiettivo: build pulita prima del deploy su Vercel.

Regole da rispettare
- Design system: nero21, arancione6102, grigioCypherpunk, biancoWhitepaper, font heading Ubuntu e body Inter. Non modificare tailwind.config.ts o globals.css se non necessario.
- URL senza .html; link sempre puliti (es. /privacy-policy).
- Commit e push: solo su richiesta esplicita dell’utente (CLAUDE.md).

Il tuo scopo è assicurarmi che, pushando questo branch su Vercel, io abbia un sito bomba, navigabile dai lead, senza 404, senza crash e con login/area riservata che portano a marcocostanza.it. Procedi passo passo, chiedendomi conferma tra un punto e l’altro.
```

---

## Note per l’uso

- **Antigravity** è l’agente che gestisce task complesse in background (riferimento: CLAUDE.md).
- Se la sessione si interrompe, riavvia con: "Riprendi dal punto [N] del prompt Bailout Soft Launch. Contesto: [breve stato]."
- L’API Richiedi Supporto potrebbe usare `NEXT_PUBLIC_BAILOUT_WEBHOOK_URL` (client) o `BAILOUT_WEBHOOK_URL` (server): nel progetto è usata l’API route quindi la variabile è quella letta lato server (verifica nel file route.ts quale nome è usato e citarlo nel punto 2 se diverso).
