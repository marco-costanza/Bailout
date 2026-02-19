# Ruleset GitHub per Bailout (editing + main)

Questi file JSON si importano in **GitHub → Repository → Settings → Rules → Rulesets → New ruleset → Import a ruleset**.

## Cosa fanno

### 1. `main-protection.json` — Solo tu su main

- **Branch:** `main`
- **Regole:**
  - **Restrict updates:** solo chi è in bypass può pushare o fare merge su main.
  - **Restrict deletions:** solo chi è in bypass può cancellare il branch.
  - **Block force pushes:** nessuno può fare force push (né tu né altri).
- **Bypass:** ruolo **Admin** del repository (actor_id 5 = RepositoryRole Admin). In un repo personale sei tu l’unico Admin, quindi solo tu puoi pushare/merge su main.

I collaboratori **non** possono pushare su main né mergeare direttamente: possono solo lavorare su `editing`.

### 2. `editing-protection.json` — Tutti su editing, ma senza “scorciatoie”

- **Branch:** `editing`
- **Regole:**
  - **Block force pushes:** nessuno può riscrivere la storia (niente `git push --force`). Così non si possono nascondere commit o modifiche strane.
  - **Restrict deletions:** solo chi ha bypass (es. Admin) può cancellare il branch `editing`.
  - **Required linear history:** niente merge commit su editing (solo squash o rebase), storia lineare e più facile da controllare.

Tutti possono fare push normali su `editing`; non possono fare force push né cancellare il branch.

## Come importare

1. Vai su **GitHub** → repo **Bailout** → **Settings** → **Rules** → **Rulesets**.
2. **New ruleset** → **Import a ruleset**.
3. Scegli **main-protection.json** → importa → salva.
4. Ripeti con **editing-protection.json**.

Se il bypass su main non funziona (es. ruolo diverso), dopo l’import modifica il ruleset “Solo maintainer su main” e in **Bypass list** aggiungi il tuo account.

## Sicurezza e “niente backdoor”

- **main:** solo tu (Admin) puoi aggiornare main → solo tu decidi cosa va in produzione.
- **editing:** niente force push → la storia non si può riscrivere per nascondere commit; niente cancellazione del branch; storia lineare → ogni modifica resta tracciata e visibile.

Le rules **non** bloccano codice malevolo dentro i file (quello lo controlli tu con review/merge da editing a main). Bloccano azioni pericolose su Git: force push, cancellazione branch, e chi può toccare main.
