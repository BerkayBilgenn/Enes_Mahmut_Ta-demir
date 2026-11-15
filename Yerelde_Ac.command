#!/bin/bash
set -e
cd -- "$(dirname -- "$0")"
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js bulunamadı. Node.js 20.11 veya üstü gereklidir."
  read -r -p "Kapatmak için Enter tuşuna basın."
  exit 1
fi

npm run build
node scripts/serve.mjs &
emt_preview_pid=$!
trap 'kill "$emt_preview_pid" 2>/dev/null || true' EXIT
trap 'exit 0' INT TERM

emt_preview_ready=0
for emt_preview_attempt in {1..50}; do
  if ! kill -0 "$emt_preview_pid" 2>/dev/null; then
    echo "Sunucu başlatılamadı. Yukarıdaki hata mesajını kontrol edin."
    read -r -p "Kapatmak için Enter tuşuna basın."
    exit 1
  fi
  if curl --silent --fail --max-time 1 http://127.0.0.1:4173/ >/dev/null; then
    emt_preview_ready=1
    break
  fi
  sleep 0.1
done

if [ "$emt_preview_ready" -ne 1 ]; then
  echo "Sunucu zamanında yanıt vermedi."
  read -r -p "Kapatmak için Enter tuşuna basın."
  exit 1
fi

echo "Önizleme hazır: http://127.0.0.1:4173/"
echo "Siteyi açık tutmak için bu Terminal penceresini açık bırakın."
open http://127.0.0.1:4173/ || echo "Tarayıcıda http://127.0.0.1:4173/ adresini açın."
wait "$emt_preview_pid"
