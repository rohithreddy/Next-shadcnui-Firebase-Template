#!/usr/bin/env bash
set -eu

pnpm simple-git-hooks


if [[ ! -e .env.local ]]; then
    echo "Creating default '.env.local'…" 
    CP_CMD=$(command -v cp &> /dev/null && echo "cp" || echo "copy")
    $CP_CMD .env.local.example .env.local
else
    echo "Great, '.env.local' already exists! Skipping…"
fi
