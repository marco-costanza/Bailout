# Configurazione Auto-Start Server Dev — Bailout

Questa cartella contiene la configurazione per avviare automaticamente il server di sviluppo quando apri il progetto Bailout in Cursor/VSCode.

## Porta Dedicata

**Bailout usa la porta 3001** per evitare conflitti con WhaleStreet (porta 3000).

- **WhaleStreet**: `http://localhost:3000`
- **Bailout**: `http://localhost:3001`

Puoi avere entrambi i server attivi contemporaneamente!

## Come funziona

Quando apri la cartella `Bailout` in Cursor:
1. Il task "🚀 Avvia Server Dev Bailout" si avvia automaticamente
2. Il server Next.js parte su `http://localhost:3001`
3. Vedi l'output nel pannello terminale dedicato

## File di configurazione

- **`tasks.json`**: Definisce i task per avviare/fermare il server sulla porta 3001
- **`settings.json`**: Abilita l'esecuzione automatica dei task

## Comandi utili

### Avvio manuale
- `Cmd+Shift+P` → "Run Task" → "🚀 Avvia Server Dev Bailout (porta 3001)"

### Fermare il server
- `Cmd+Shift+P` → "Terminate Task" → seleziona il task del server
- Oppure: "Run Task" → "🛑 Ferma Server Dev Bailout"

## Lavorare con entrambi i progetti

Puoi aprire entrambi i progetti contemporaneamente:

1. **Apri WhaleStreet** → server su `localhost:3000`
2. **Apri Bailout** (in un'altra finestra Cursor) → server su `localhost:3001`
3. Entrambi i server restano attivi e puoi vedere le modifiche in tempo reale

## Disabilitare l'auto-start

Se non vuoi che il server si avvii automaticamente:

1. Apri `.vscode/settings.json`
2. Cambia `"task.allowAutomaticTasks": "on"` in `"off"`
3. Oppure rimuovi `"runOn": "folderOpen"` da `tasks.json`
