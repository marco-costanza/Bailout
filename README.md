# Bailout — Sito Next.js

Sito di formazione, masterclass e consulenza Bitcoin migrato a Next.js 15.

---

## Stack Tecnologico

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI** (componenti istituzionali)
- **Framer Motion** (animazioni)
- **Lucide React** (icone)

---

## Design System

### Tipografia
- **Font Heading**: Lexend (Bold/ExtraBold)
- **Font Body**: Inter

### Colori (Tema Bitcoin)
- **Background Dark**: `#212121`
- **Background Card**: `#2a2a2a`
- **Primary/Anchor Color**: `#FF6102` (Bitcoin Orange)
- **Primary Hover**: `#e85802`

### Stile Visivo
- Dark mode completo
- Glow effects arancioni caratteristici
- Tone of Voice: serio, diretto, "proof of work"

---

## Struttura del Progetto

```
app/
  layout.tsx              # Layout principale con Navbar e Footer
  page.tsx                # Homepage
  globals.css             # Stili globali Tailwind
  conferma-iscrizione/   # Pagina conferma iscrizione newsletter
  aggiorna-profilo/       # Pagina aggiornamento profilo opzionale
  arrivederci/            # Pagina post-disiscrizione

components/
  navbar.tsx             # Navbar globale
  footer.tsx              # Footer globale
  ui/                     # Componenti Shadcn UI
    button.tsx

lib/
  utils.ts               # Utility functions (cn helper)

public/
  images/                 # Asset statici (loghi, immagini)
    Bailout_logo.png

_old-html/                # Vecchi file HTML (backup)
```

---

## Comandi Utili

```bash
# Installare dipendenze
npm install

# Avviare server di sviluppo
npm run dev

# Build produzione
npm run build

# Avviare build produzione
npm start

# Linting
npm run lint
```

---

## Deploy su Vercel

Il progetto è configurato per il deploy automatico su Vercel tramite `vercel.json`.

1. Push su GitHub
2. Vercel rileva automaticamente il progetto
3. Build e deploy automatici

---

## Note Importanti

- **Form Brevo**: I form newsletter sono integrati con Brevo. Mantenere gli action URL esatti.
- **Dark Mode**: Tutto il sito è dark mode, non serve toggle light/dark.
- **Bitcoin Theme**: Colore arancione #FF6102 è centrale per CTA e elementi importanti.
- **Glow Effects**: Effetti glow arancioni caratteristici del brand.

---

## Migrazione Completata

✅ Setup Next.js 15 completato
✅ Tailwind configurato con colori Bitcoin
✅ Font Lexend e Inter configurati
✅ Navbar e Footer creati
✅ Homepage migrata con tutte le sezioni
✅ Pagine esistenti migrate (conferma, aggiorna-profilo, arrivederci)
✅ Form Brevo integrati e funzionanti
✅ Loghi spostati in public/images/
✅ Vecchi HTML spostati in _old-html/
✅ vercel.json configurato
✅ Build completato con successo
