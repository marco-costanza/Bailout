# Stack Tecnologico

No.: 11
Status: Done

### Strumenti tecnologici: Il nostro Tech Stack

La nostra infrastruttura tecnologica è progettata per massimizzare la velocità di esecuzione, automatizzare le operazioni ripetitive e mantenere i team allineati sia per Bailout che per Whale Street.

**0. L'Architettura di Transizione: Vetrina vs. Piattaforma (Legacy)**

Attualmente, operiamo con un'infrastruttura ibrida in fase di migrazione. I nostri siti principali fungono da "Vetrina" (ottimizzati per prestazioni e conversione), mentre la parte transazionale e di e-learning è temporaneamente delegata a un sistema legacy.

- **Frontend Vetrina:** Ospitato sul nostro nuovo stack ad alte prestazioni.
- **Piattaforma Esterna (Legacy):** Al momento, la gestione degli utenti, l'acquisto di corsi/consulenze, i pagamenti e la fruizione stessa delle lezioni avvengono su un dominio esterno temporaneo (marcocostanza.it). Questo ambiente è basato su WordPress e su un ecosistema di plugin.
- **L'Obiettivo Tecnico:** Sfruttare il nostro stack IA-driven e le automazioni proprietarie per internalizzare gradualmente e sostituire del tutto l'ambiente WordPress. Costruiremo una piattaforma custom su Vercel + Supabase per avere controllo totale, zero dipendenze da plugin di terze parti e performance estreme.

Di seguito lo stack di base definitivo e le relative modalità d'uso:

**1. Notion: Il Cervello Operativo e Organizzativo**

Notion funge da "Single Source of Truth" (singola fonte di verità) per tutto il nostro business. Non è solo un block notes, ma un database relazionale.

- **Knowledge Base e SOP:** Conserviamo qui tutta la documentazione istituzionale, i Business Plan, le linee guida del brand e i documenti di strategia.
- **Project Management:** Lo utilizziamo per mappare le roadmap, gestire le schede delle task, impostare priorità e scadenze (es. la calendarizzazione dei lavori).
- **Logging e Monitoraggio:** Incanala le informazioni in database strutturati che guidano le nostre decisioni, fungendo da cruscotto per monitorare anche i processi generati dagli altri nostri strumenti.

**2. Antigravity \ Cursor: Lo Sviluppo Potenziato dall'IA**

Questi strumenti rappresentano la nostra leva competitiva principale nello sviluppo software e nell'esecuzione tecnica.

- **Cursor (L'Editor):** È il nostro ambiente di sviluppo (IDE) potenziato dall'intelligenza artificiale. Ci permette di fare pair-programming costante, generare boilerplate, fare refactoring immediato del codice e trovare bug in una frazione del tempo normale.
- **Antigravity (L'Agente Autonomo):** Agisce come un collaboratore tecnico aggiuntivo. Gli deleghiamo task complesse in background: dalla strutturazione massiva di file alla gestione autonoma di task avanzate come l'elaborazione dati e l'organizzazione del file system.

**3. GitHub: Il Versioning e la Collaborazione sul Codice**

GitHub è la cassaforte del nostro capitale intellettuale tecnico e il motore di collaborazione.

- **Controllo di Versione:** Ogni singolo componente software è versionato qui. Questo ci permette di sperimentare, tornare indietro se necessario, e tenere traccia di chi ha modificato cosa.
- **Gestione dei Flussi (Git Flow):** Tramite branch separati, possiamo testare nuove funzionalità senza rischiare di rompere l'ambiente in produzione.
- **Trigger Operativi:** È l'anello di congiunzione tra lo sviluppo locale e la pubblicazione online. Un push su GitHub avvia i processi automatici di distribuzione.

**4. Vercel: L'Infrastruttura di Hosting e Distribuzione**

Vercel è l'ambiente serverless su cui le nostre applicazioni (frontend) prendono vita, scelto per la sua performance estrema.

- **CI/CD Automatizzata:** Quando approviamo nuovo codice su GitHub, Vercel si occupa di pacchettizzarlo e spingerlo online in pochi secondi in completa autonomia.
- **Ambienti di Staging (Anteprime):** Fornisce link di anteprima per ogni modifica, permettendoci di validare le interfacce in un ambiente reale protetto prim'ancora che l'utente finale veda alcunché.
- **Prestazioni Edge:** Distribuisce i nostri siti globalmente, ottimizzando l'esperienza utente e azzerando i tempi di caricamento.

**5. Supabase: Il Backend e Gestione Dati (BaaS)**

Supabase è il cuore pulsante dei nostri dati, un'alternativa open-source a Firebase e il pilastro su cui fonderemo la nostra piattaforma proprietaria post-WordPress.

- **Database (PostgreSQL) e Storage:** Archivia in modo sicuro tutte le informazioni dinamiche e ospita asset multimediali (come i futuri materiali video dei corsi).
- **Autenticazione e Sicurezza:** Gestisce tutto il flusso di login/registrazione, governando i permessi di accesso a specifiche fette di dati in base al ruolo o agli acquisti effettuati.
- **API in Tempo Reale:** Fornisce un backend pronto all'uso su cui i nostri frontend possono interrogare o modificare i dati in tempo reale.

**6. Brevo: Hub per Marketing e Comunicazione (CRM & Emailing)**

Brevo è la nostra centrale di comando per le interazioni dirette e automatizzate col pubblico e con i lead.

- **Email Marketing e Newsletter:** Gestisce e segmenta le mailing list per inviare comunicazioni mirate a diversi cluster di pubblico.
- **Automazioni (Marketing Automation):** Gestisce workflow e sequenze automatiche di e-mail basate sulle azioni degli utenti nei funnel (es. un lancio di Whale Street o Bailout).
- **Gestione Database Contatti:** Conserva lo storico pulito delle interazioni con le nostre lead e i nostri clienti.

**7. n8n: Il Motore di Automazione e Integrazione (Il Sistema Nervoso)**

La nostra istanza proprietaria (self-hosted) di n8n è il tessuto connettivo che fa dialogare tutto lo stack tecnologico. Supera le limitazioni di strumenti commerciali (come Zapier o Make) garantendoci automazione illimitata.

- **Orchestrazione dei Processi Logici:** n8n gestisce i flussi di dati tra piattaforme. Ad esempio, quando un utente acquista una consulenza o un corso, n8n intercetta il pagamento, comunica a Supabase di sbloccare l'accesso al corso, iscrive l'utente nella lista corretta su Brevo e registra la vendita nel database di Notion.
- **Libertà di Integrazione:** Ci permette di collegare tramite API o Webhook letteralmente qualsiasi servizio, software o script personalizzato, senza limiti di task o di esecuzioni.
- **Automazione Interna:** Oltre ai processi rivolti agli utenti, n8n automatizza le operazioni di back-office, riducendo a zero il lavoro manuale ripetitivo per il team.

**L'Ecosistema in Azione: La Pipeline di Sviluppo e Gestione (Come tutto comunica)**

Per capire davvero il nostro workflow, è fondamentale comprendere la circolarità del nostro sistema:

1. **Sviluppo Rapido:** Il codice dell'interfaccia e della logica viene scritto in **Cursor** (supportato da **Antigravity**) e versionato su **GitHub**.
2. **Distribuzione Istantanea:** Il codice approvato su GitHub viene intercettato da **Vercel**, che compila e pubblica il frontend istantaneamente con zero downtime.
3. **Fruizione e Dati:** L'utente naviga su una piattaforma ultra-veloce (Vercel) che legge e scrive i suoi dati in tempo reale in **Supabase** (gestendo permessi e progressi nei corsi).
4. **Automazione Invisibile:** Dietro le quinte, **n8n** ascolta tutto ciò che accade. Se l'utente fa un'azione chiave (es. completa un pagamento o finisce una lezione), n8n scatta: aggiorna le anagrafiche su **Brevo** per far partire comunicazioni mirate e aggiorna il cruscotto di controllo aziendale su **Notion**.

Questo flusso garantisce un'esperienza utente fulminea (frontend moderno) e un'efficienza aziendale totale (backend robusto + automazioni illimitate), permettendoci di gestire la transizione da WordPress verso un sistema proprietario altamente scalabile.