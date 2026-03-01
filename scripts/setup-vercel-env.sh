#!/usr/bin/env bash
# Imposta NEXT_PUBLIC_BAILOUT_WEBHOOK_URL su Vercel (production, preview, development).
# Esegui dalla root del progetto Bailout dopo: vercel login
# Uso: ./scripts/setup-vercel-env.sh   oppure   bash scripts/setup-vercel-env.sh

set -e
WEBHOOK_URL="https://n8n.marcocostanza.it/webhook/bailout-richiedi-supporto"
NAME="NEXT_PUBLIC_BAILOUT_WEBHOOK_URL"

echo "Aggiunta $NAME su Vercel..."
for env in production preview development; do
  echo "$WEBHOOK_URL" | vercel env add "$NAME" "$env"
  echo "  OK $env"
done
echo "Fatto. Esegui un redeploy (o push) perché le env si applicano ai deploy successivi."
