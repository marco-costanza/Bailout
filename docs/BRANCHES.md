# Branch: editing e main — Chi lavora dove

Guida per il lavoro in team sul sito Bailout: tutti lavorano sul branch **editing**, solo una persona (il maintainer) unisce **editing** in **main** quando le modifiche sono pronte. Il sito che vedono tutti è quello che viene da **main**.

---

## I due branch

| Branch | Chi ci lavora | Cosa succede |
|--------|----------------|--------------|
| **editing** | Tutti (tu + collaboratori) | Qui si fanno le modifiche. Commit e push vanno fatti su **editing**. |
| **main** | Solo il maintainer fa merge | È il branch “live”: da qui Vercel pubblica il sito. **Non si modificano file direttamente su main.** |

---

## Per tutti i collaboratori (lavorare su editing)

### Prima di iniziare a lavorare (sempre)

1. Apri il progetto Bailout in Cursor.
2. Assicurati di essere sul branch **editing** (in basso a sinistra in Cursor vedi il nome del branch).
3. **Fai Pull** per scaricare le ultime modifiche da GitHub:
   - **Source Control** (icona ramo) → pulsante **Sync** o **Pull** (o menu **...** → **Pull**).
   - Così vedi subito le modifiche fatte da altri su **editing**.

### Mentre lavori

- Modifica i file come sempre.
- Fai **commit** con messaggi chiari (vedi [COMMIT_GUIDE.md](COMMIT_GUIDE.md)).
- Fai **Push** su **editing** (Sync / Push in Source Control).
- Non creare branch da **main** per il lavoro quotidiano: usate tutti **editing**.

### Buone abitudini

- **Non lavorare tutti sullo stesso file nello stesso momento** per ridurre conflitti.
- Se qualcuno sta per fare modifiche grosse, meglio avvisare o fare pull/push spesso.
- Se dopo un pull compaiono conflitti, risolvili prima di continuare (in Cursor puoi chiedere all’AI di aiutarti).

---

## Solo per il maintainer (merge editing → main)

Quando le modifiche su **editing** ti piacciono e tutto funziona:

1. In Cursor sei sul branch **editing** e hai fatto pull (editing è aggiornato).
2. Passa al branch **main**: clic sul nome del branch in basso a sinistra → **main**.
3. Fai **Pull** su main (per sicurezza).
4. Unisci **editing** in **main**:
   - **Opzione A – Da Cursor:** Source Control → **...** → **Branch** → **Merge Branch…** → scegli **editing**.
   - **Opzione B – Da terminale:**  
     `git merge editing`
5. Risolvi eventuali conflitti (di solito non ce ne sono se editing è stato tenuto aggiornato).
6. Fai **Push** di **main** su GitHub.
7. Vercel farà il deploy e il sito che vedono tutti si aggiornerà.
8. (Opzionale) Torna sul branch **editing** per continuare a lavorare.

Solo tu (il maintainer) esegui questi passi di merge e push su **main**.

---

## Riepilogo veloce

| Ruolo | Cosa fa |
|-------|---------|
| **Collaboratori** | Lavorano sempre su **editing**, fanno pull prima di lavorare, commit e push su **editing**. Non toccano **main**. |
| **Maintainer** | Quando le modifiche su editing sono pronte: merge di **editing** in **main** e push di **main** → il sito si aggiorna. |

---

## Proteggere main su GitHub (solo maintainer)

Per evitare che qualcuno faccia per sbaglio push o merge su **main**, puoi proteggere il branch su GitHub:

1. Vai su **GitHub** → repository **Bailout**.
2. **Settings** → **Branches** → **Add branch protection rule** (o modifica la regola esistente).
3. **Branch name pattern:** `main`.
4. Attiva ad esempio:
   - **Require a pull request before merging** (così nessuno mergea per sbaglio da solo), e/o  
   - **Restrict who can push to matching branches** e aggiungi solo il tuo account.
5. Salva.

In questo modo solo tu (o chi aggiungi) può unire **editing** in **main** e pubblicare il sito.

---

## Riferimenti

- Flusso generale (commit, push, Vercel): [WORKFLOW.md](WORKFLOW.md)
- Come fare commit e messaggi: [COMMIT_GUIDE.md](COMMIT_GUIDE.md)
