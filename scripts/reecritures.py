#!/usr/bin/env python3
"""Bilan du compteur de réécritures (VERSION 2026-11-22-c) : ce que l'iPad a lu avant que l'enfant efface.
Usage : python3 -I reecritures.py <dossier du coffre> <prénom> [depuis AAAA-MM-JJ]
Lecture seule. Ne contient aucune donnée : il lit le coffre privé."""
import json, sys, glob, collections
coffre, prenom = sys.argv[1], sys.argv[2].lower()
depuis = sys.argv[3] if len(sys.argv) > 3 else "2026-11-22"
cartes = {c["id"]: c for p in json.load(open(f"{coffre}/paquets.json")) for c in p["cartes"] if "id" in c}
auto = ko = avec = n = 0
lus, parPaquet = [], collections.Counter()
for f in sorted(glob.glob(f"{coffre}/progression/{prenom}/*.json")):
    for sc in json.load(open(f))["seances"]:
        for r in sc.get("reponses", []):
            if r["t"][:10] < depuis or not r.get("auto"): continue
            auto += 1; ko += r["note"] == 0
            rw = r.get("reecrit")
            if not rw: continue
            avec += 1; n += rw["n"]; parPaquet[sc["paquet"]] += rw["n"]
            c = cartes.get(r.get("id"), {})
            att = c.get("rep") or c.get("mot") or c.get("phrase") or "?"
            lus.append((sc["paquet"], rw["lu"], r.get("saisie"), att if isinstance(att, str) else att[0]))
print(f"Depuis le {depuis} : {auto} réponses écrites corrigées par l'app, {ko} comptées fausses.")
print(f"Réponses réécrites au moins une fois : {avec} ({100 * avec // max(auto, 1)} %), {n} réécritures en tout.")
print("Par paquet :", dict(parPaquet.most_common()))
print("\nLu par l'iPad avant effacement  →  réponse finale  |  attendu")
for p, lu, fin, att in lus: print(f"- {p} : {' / '.join(lu)}  →  {fin}  |  {att}")
