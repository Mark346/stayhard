"""Haalt elke ochtend kort nieuws op en schrijft news.json voor Stay Hard.

Draait in GitHub Actions; gebruikt alleen de standaardbibliotheek van Python.
"""
import email.utils
import html
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from zoneinfo import ZoneInfo

FEEDS = {
    "voetbal": ["https://feeds.nos.nl/nosvoetbal"],
    "fitness": ["https://feeds.nos.nl/nossportalgemeen", "https://feeds.nos.nl/jeugdjournaal"],
    "gezondheid": [
        "https://feeds.nos.nl/nosnieuwsbinnenland",
        "https://feeds.nos.nl/jeugdjournaal",
        "https://feeds.nos.nl/nosnieuwsalgemeen",
    ],
}

# Trefwoorden om gezondheids- en beweegnieuws uit algemene feeds te vissen.
KEYWORDS = {
    "gezondheid": r"\b(?:gezond|ziek|ziekte|griep|vaccin|virus|ziekenhuis|dokter|arts|huisarts|rivm|voeding|eten|suiker|slaap|slap|mentaal|stress|longen|hart|kanker|allergie|medicijn|zorg|ggd|tand)",
    "fitness": r"\b(?:sport|bewegen|beweging|fitness|training|trainen|hardlop|marathon|zwemmen|fiets|gym|spieren|conditie|atleet|record|olymp)",
}
# Geen uitslagen, standen of scores: zulke berichten slaan we over.
RESULTS = r"\b\d{1,2}\s?-\s?\d{1,2}\b|\b(?:wint|winnen|won|winst|verliest|verliezen|verloor|verlies|nederlaag|zege|gelijkspel|gelijk gespeeld|remise|uitslag|uitslagen|stand|ranglijst|punten|koppositie|koploper|degradatie|kampioen|scoort|scoorde|doelpunt|doelpunten|treffer|hattrick|samenvatting|halve finale|finale|kwartfinale)\b"
PER_CAT = {"voetbal": 4, "fitness": 3, "gezondheid": 3}
MAX_AGE = timedelta(hours=48)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "StayHard/1.0 (+github pages)"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read()


def clean(text, limit):
    text = re.sub(r"<[^>]+>", " ", text or "")
    text = html.unescape(re.sub(r"\s+", " ", text)).strip()
    if len(text) <= limit:
        return text
    cut = text[:limit].rsplit(" ", 1)[0].rstrip(",;:")
    # eindig liefst op een hele zin
    dot = max(cut.rfind(". "), cut.rfind("! "), cut.rfind("? "))
    return cut[: dot + 1] if dot > limit * 0.5 else cut + "…"


def parse(xml_bytes, source):
    items = []
    root = ET.fromstring(xml_bytes)
    for it in root.iter("item"):
        title = clean(it.findtext("title"), 90)
        link = (it.findtext("link") or "").strip()
        desc = clean(it.findtext("description"), 170)
        date = it.findtext("pubDate")
        try:
            when = email.utils.parsedate_to_datetime(date) if date else None
        except (TypeError, ValueError):
            when = None
        if title and link:
            items.append({"title": title, "text": desc, "url": link, "source": source, "when": when})
    return items


def source_name(url):
    return "NOS Jeugdjournaal" if "jeugdjournaal" in url else "NOS"


def main():
    now = datetime.now(timezone.utc)
    used_links = set()
    out = []
    for cat, urls in FEEDS.items():
        pool = []
        for url in urls:
            try:
                pool += parse(fetch(url), source_name(url))
            except Exception as e:  # een kapotte feed mag de rest niet tegenhouden
                print(f"Feed mislukt: {url}: {e}")
        pattern = KEYWORDS.get(cat)
        picked = []
        pool.sort(key=lambda i: i["when"] or now - MAX_AGE, reverse=True)
        for it in pool:
            if it["url"] in used_links:
                continue
            if it["when"] and now - it["when"] > MAX_AGE:
                continue
            blob = (it["title"] + " " + it["text"]).lower()
            if re.search(RESULTS, blob):
                continue
            if pattern and not re.search(pattern, blob):
                continue
            # voetbal hoort niet bij fitness
            if cat == "fitness" and re.search(r"voetbal|eredivisie|oranje|champions league", (it["title"] + " " + it["text"]).lower()):
                continue
            picked.append(it)
            used_links.add(it["url"])
            if len(picked) >= PER_CAT[cat]:
                break
        for it in picked:
            out.append({"cat": cat, "title": it["title"], "text": it["text"], "url": it["url"], "source": it["source"]})

    data = {"updated": now.astimezone(ZoneInfo("Europe/Amsterdam")).isoformat(timespec="minutes"), "items": out}
    with open("news.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    print(f"{len(out)} nieuwsitems geschreven")


if __name__ == "__main__":
    main()
