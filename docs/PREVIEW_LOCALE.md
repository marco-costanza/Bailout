# Guida Preview Locale — Bailout

## Come vedere le modifiche senza pushare

Quando modifichi il sito, puoi vedere le modifiche in tempo reale sul tuo computer **senza pushare su GitHub** (e quindi senza aggiornare il sito online).

## 🚀 Avvio Automatico (Consigliato)

**Il server si avvia automaticamente quando apri la cartella del progetto Bailout in Cursor!**

Ho configurato un task automatico che:
- ✅ Si avvia quando apri la cartella Bailout in Cursor
- ✅ Rimane attivo in background
- ✅ Si vede nell'output panel di Cursor
- ✅ Si ferma quando chiudi Cursor o chiudi la cartella
- ✅ **Usa la porta 3001** per evitare conflitti con WhaleStreet

**Come funziona:**
1. Apri la cartella `Projects/Website Master/Bailout` in Cursor
2. Il server si avvia automaticamente su `http://localhost:3001`
3. Apri il browser su `localhost:3001` e vedi le modifiche in tempo reale

**Per fermare il server:**
- Premi `Cmd+Shift+P` (Mac) o `Ctrl+Shift+P` (Windows/Linux)
- Scrivi "Terminate Task" e seleziona il task del server
- Oppure chiudi Cursor

## 🌐 Porte dei Progetti

Per evitare conflitti, ogni progetto usa una porta diversa:

- **WhaleStreet**: `http://localhost:3000`
- **Bailout**: `http://localhost:3001`

Puoi avere entrambi i server attivi contemporaneamente!

## Passi manuali (se l'auto-start non funziona)

### 1. Avvia il server di sviluppo

Apri il terminale nella cartella del progetto (`Projects/Website Master/Bailout`) e scrivi:

```bash
npm run dev
```

Il server si avvia su **porta 3001** (non 3000).

### 2. Apri il browser

Il server si avvia automaticamente su:
```
http://localhost:3001
```

Apri questo indirizzo nel tuo browser.

### 3. Modifica e vedi in tempo reale

- **Modifica qualsiasi file** (es. `app/page.tsx`, `components/navbar.tsx`)
- **Salva il file** (Cmd+S / Ctrl+S)
- **La pagina si aggiorna automaticamente** nel browser (Hot Reload)

Non serve ricaricare manualmente la pagina!

### 4. Quando sei soddisfatto

- **Ferma il server**: premi `Ctrl + C` nel terminale
- **Dai l'ok per il push**: quando sei contento delle modifiche, dimmi "pusha" o "ok vai" e farò il push su GitHub

## Vantaggi

✅ **Vedi le modifiche subito** senza aspettare il deploy su Vercel  
✅ **Il sito online non cambia** finché non fai push  
✅ **Puoi provare e riprovare** senza problemi  
✅ **Risparmi deploy inutili** su Vercel  
✅ **Nessun conflitto** con altri progetti (porta dedicata 3001)

## Troubleshooting

### La porta 3001 è già occupata?

Se vedi un errore che dice che la porta 3001 è occupata:
- Chiudi l'altro processo che usa la porta 3001
- Oppure usa una porta diversa: `npm run dev -- -p 3002`

### Il server non si avvia?

- Assicurati di essere nella cartella giusta: `Projects/Website Master/Bailout`
- Controlla che `node_modules` esista (se no, fai `npm install`)
- Leggi l'errore nel terminale per capire cosa manca

### Le modifiche non si vedono?

- Controlla che il file sia salvato (Cmd+S / Ctrl+S)
- Controlla la console del browser (F12) per eventuali errori
- Ricarica la pagina manualmente (F5) se necessario

### Conflitto con WhaleStreet?

- **Nessun problema!** Bailout usa la porta 3001, WhaleStreet usa la 3000
- Puoi avere entrambi i server attivi contemporaneamente
- Apri entrambi i progetti in finestre Cursor separate

## Workflow consigliato

1. **Modifica** i file in Cursor
2. **Vedi le modifiche** con `npm run dev` su `localhost:3001`
3. **Fai commit** quando sei soddisfatto di una modifica (backup locale)
4. **Continua a modificare** e vedere in preview
5. **Quando tutto è ok**, dimmi "pusha" e farò il push su GitHub → Vercel aggiorna il sito online

## Differenza tra Commit e Push

- **Commit** = salvataggio locale sul tuo PC (backup)
- **Push** = invio su GitHub → Vercel aggiorna il sito online

Puoi fare molti commit senza pushare. Pusha solo quando sei sicuro che le modifiche vadano online.

## 🎯 Avvio Manuale del Task (Alternativa)

Se l'auto-start non funziona o vuoi avviare manualmente:

1. Premi `Cmd+Shift+P` (Mac) o `Ctrl+Shift+P` (Windows/Linux)
2. Scrivi "Run Task"
3. Seleziona "🚀 Avvia Server Dev Bailout (porta 3001)"
4. Il server si avvia e vedi l'output nel pannello terminale

**Per fermare:**
- Premi `Cmd+Shift+P` → "Terminate Task" → seleziona il task del server
- Oppure usa il task "🛑 Ferma Server Dev Bailout"

## 🔧 Configurazione Auto-Start

Se vuoi che il server si avvii sempre automaticamente:

1. Apri `.vscode/settings.json` (o crealo se non esiste)
2. Assicurati che contenga:
   ```json
   {
     "task.allowAutomaticTasks": "on"
   }
   ```
3. Riapri la cartella del progetto

Il task è già configurato in `.vscode/tasks.json` con `"runOn": "folderOpen"`, quindi dovrebbe avviarsi automaticamente quando apri la cartella.
