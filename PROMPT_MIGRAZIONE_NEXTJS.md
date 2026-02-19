# Prompt Completo: Migrazione Bailout da HTML Statico a Next.js 15

## Contesto del Progetto

Bailout è un sito di formazione, masterclass e consulenza Bitcoin. Attualmente è un sito HTML statico che deve essere migrato a Next.js 15 seguendo lo stesso pattern utilizzato per WhaleStreet.

---

## Stack Tecnologico (Identico a WhaleStreet)

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI** (componenti istituzionali)
- **Framer Motion** (animazioni)
- **Lucide React** (icone)

---

## Design System & Identità Visiva Bailout

### Tipografia
- **Font Heading**: 'Lexend' (Bold/ExtraBold) - già utilizzato nel sito attuale
- **Font Body**: 'Inter' (per coerenza con WhaleStreet e leggibilità fintech)

### Colori (Tema Bitcoin)

**Colori Primari (Bitcoin Theme):**
- **Background Dark**: `#212121` (dark principale)
- **Background Card**: `#2a2a2a` (darkCard per card)
- **Primary/Anchor Color**: `#FF6102` (Bitcoin Orange) - colore principale del brand
- **Primary Hover**: `#e85802` (versione più scura per hover)

**Colori Secondari:**
- **Text Primary**: `#FFFFFF` (bianco su sfondi scuri)
- **Text Secondary**: `#9CA3AF` (gray-400 per testi secondari)
- **Text Muted**: `#6B7280` (gray-500 per placeholder)

**Effetti Glow:**
- Glow principale: `0 0 40px -10px rgba(255, 97, 2, 0.25)`
- Glow small: `0 0 20px -5px rgba(255, 97, 2, 0.2)`

### Stile Visivo
- **Look**: Dark mode, tech/fintech, orientato a Bitcoin
- **Tone of Voice**: Serio, diretto, "proof of work", niente fuffa
- **Elementi caratteristici**: Glow effects arancioni, card con bordi sottili, sezioni con divider glow

---

## Struttura del Sito (da Migrare)

### Pagine Principali

**A. Homepage (`/`)**
- Hero Section con logo Bailout e tagline "La Tua Ancora di Salvezza nel Mondo Bitcoin"
- Sezione "Proof of Work" (3 card):
  - Bitcoin Academy
  - Masterclass
  - Consulenza
- Sezione Team/Chi Siamo (se presente nell'HTML)
- Sezione Newsletter (form Brevo integrato)
- Footer minimale

**B. Pagine Esistenti da Migrare**
- `/conferma-iscrizione` → `app/conferma-iscrizione/page.tsx`
- `/aggiorna-profilo` → `app/aggiorna-profilo/page.tsx`
- `/arrivederci` → `app/arrivederci/page.tsx`

---

## Istruzioni Operative Dettagliate

### FASE 1: Setup Iniziale

1. **Creare progetto Next.js nella directory Bailout**
   ```bash
   cd "Projects/Website Master/Bailout"
   # NON usare create-next-app (problemi permessi), creare manualmente come fatto per WhaleStreet
   ```

2. **Creare file di configurazione base:**
   - `package.json` (con dipendenze identiche a WhaleStreet)
   - `tsconfig.json`
   - `next.config.ts`
   - `tailwind.config.ts` (con colori Bitcoin theme)
   - `postcss.config.mjs`
   - `.eslintrc.json`

3. **Configurare Tailwind con Design System Bailout:**
   ```typescript
   // tailwind.config.ts
   colors: {
     bitcoin: {
       DEFAULT: "#FF6102",
       hover: "#e85802",
       light: "rgba(255, 97, 2, 0.15)",
     },
     background: {
      dark: "#212121",
      card: "#2a2a2a",
     },
     text: {
      primary: "#FFFFFF",
      secondary: "#9CA3AF",
      muted: "#6B7280",
     },
   }
   ```

4. **Configurare font:**
   - Lexend per heading (da Google Fonts)
   - Inter per body (da Google Fonts)
   - In `app/layout.tsx` importare entrambi i font

5. **Installare dipendenze:**
   ```bash
   npm install
   npm install framer-motion lucide-react
   npx shadcn@latest init
   npx shadcn@latest add button card input
   ```

### FASE 2: Struttura Base e Componenti Globali

1. **Creare struttura directory:**
   ```
   app/
     layout.tsx
     page.tsx
     globals.css
     conferma-iscrizione/page.tsx
     aggiorna-profilo/page.tsx
     arrivederci/page.tsx
   components/
     navbar.tsx
     footer.tsx
     ui/ (Shadcn components)
   public/
     images/ (loghi)
   lib/
     utils.ts
   ```

2. **Layout principale (`app/layout.tsx`):**
   - Metadata SEO (title, description, keywords Bitcoin)
   - Font loading (Lexend + Inter)
   - Script Brevo (se necessario)
   - Navbar e Footer globali

3. **Navbar (`components/navbar.tsx`):**
   - Logo Bailout (versione appropriata per dark mode)
   - Menu navigazione (se presente)
   - Link CTA (se presenti)
   - Design dark mode con glow effects Bitcoin
   - Mobile-first con hamburger menu

4. **Footer (`components/footer.tsx`):**
   - Link social (se presenti)
   - Note legali/disclaimer
   - Stile dark coerente con brand

5. **Componenti Shadcn personalizzati:**
   - Button: variante "bitcoin" con colore #FF6102 e glow effect
   - Card: stile dark con bordi sottili e hover glow

### FASE 3: Migrazione Homepage

1. **Leggere `index.html` esistente** e identificare:
   - Hero section (logo, titolo, CTA)
   - Sezione "Proof of Work" (3 card)
   - Altre sezioni presenti
   - Form Brevo newsletter

2. **Creare `app/page.tsx`** con:
   - Hero Section con animazioni Framer Motion
   - Sezione "Proof of Work" (3 card con icone Lucide)
   - Sezione Team/Chi Siamo (se presente)
   - Sezione Newsletter (form Brevo integrato)
   - Glow effects Bitcoin arancioni

3. **Mantenere:**
   - Copy esatto dall'HTML esistente
   - Form Brevo con stessa action URL
   - Stile dark mode coerente

### FASE 4: Migrazione Pagine Esistenti

1. **Leggere HTML esistenti:**
   - `conferma-iscrizione/index.html`
   - `aggiorna-profilo/index.html`
   - `arrivederci/index.html`

2. **Creare versioni Next.js:**
   - Mantenere logica form Brevo
   - Adattare stili a Design System
   - Preservare testi e copy

### FASE 5: Asset e Ottimizzazioni

1. **Spostare loghi:**
   - `IMG/Bailout logo.png` → `public/images/Bailout_logo.png`
   - Usare Next.js Image component per ottimizzazione

2. **Gestire immagini:**
   - Placeholder per immagini team (se presenti)
   - Ottimizzazione automatica con Next.js Image

### FASE 6: Configurazione Vercel

1. **Creare `vercel.json`:**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "framework": "nextjs",
     "installCommand": "npm install"
   }
   ```

2. **Spostare vecchi HTML:**
   - Creare cartella `_old-html/`
   - Spostare `index.html` e cartelle pagine in `_old-html/`
   - Aggiornare `.gitignore` per escludere `_old-html/` (opzionale)

---

## Regole Importanti

1. **NON cancellare file HTML esistenti** - spostarli in `_old-html/`
2. **Preservare integrazione Brevo** - mantenere action URL e logica form
3. **Mantenere URL structure** - senza `.html` (es. `/conferma-iscrizione`)
4. **Design Dark Mode** - tutto il sito è dark, non light mode
5. **Tone of Voice**: serio, diretto, "proof of work", niente fuffa
6. **Colori Bitcoin**: usare #FF6102 come colore principale, glow effects arancioni

---

## Checklist Finale

- [ ] Setup Next.js completato
- [ ] Tailwind configurato con colori Bitcoin
- [ ] Font Lexend e Inter configurati
- [ ] Navbar e Footer creati
- [ ] Homepage migrata con tutte le sezioni
- [ ] Pagine esistenti migrate (conferma, aggiorna-profilo, arrivederci)
- [ ] Form Brevo integrati e funzionanti
- [ ] Loghi spostati in public/images/
- [ ] Vecchi HTML spostati in _old-html/
- [ ] vercel.json configurato
- [ ] Build completato con successo
- [ ] Test locale con `npm run dev`
- [ ] Push su GitHub
- [ ] Verifica deploy Vercel

---

## Note Specifiche Bailout

- **Tema Dark**: tutto il sito è dark mode, non serve toggle light/dark
- **Bitcoin Focus**: colore arancione #FF6102 è centrale, usarlo per CTA e elementi importanti
- **Glow Effects**: effetti glow arancioni caratteristici del brand
- **Lexend Font**: già utilizzato nel sito attuale, mantenerlo per heading
- **Proof of Work**: questa sezione è centrale, enfatizzarla nella homepage

---

## Riferimenti

- **Pattern WhaleStreet**: seguire la stessa struttura e organizzazione
- **File HTML esistenti**: leggere per estrarre copy e struttura
- **Business Plan**: quando disponibile, integrare contenuti e tone of voice

---

## Comandi Utili

```bash
# Setup iniziale
npm install
npm install framer-motion lucide-react
npx shadcn@latest init
npx shadcn@latest add button card input

# Build locale
npm run build

# Test locale
npm run dev

# Git
git add .
git commit -m "Messaggio descrittivo"
git push
```

---

**Questo prompt può essere dato direttamente all'AI per migrare Bailout seguendo lo stesso pattern di WhaleStreet.**
