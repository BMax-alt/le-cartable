#!/bin/bash
# coffre-pull.sh — Copie locale du coffre du Cartable (dépôt privé le-cartable-data).
# L'iPad écrit la progression dans GitHub ; le Mac en récupère une copie toutes les 15 min (launchd).
# Lecture seule : ne fait que des pull en avance rapide, ne pousse jamais rien.
DIR="/Users/ben/Documents/WORKSPACE/LE_CARTABLE_DATA"
cd "$DIR" || exit 1
/usr/bin/git pull --ff-only --quiet 2>>/tmp/cartable-coffre-pull.log || echo "$(/bin/date '+%F %T') pull en échec" >> /tmp/cartable-coffre-pull.log
