// ---------- Hoeveel gram? ----------
// Zet bij elk ingrediënt hoeveel gram (of ml) je nodig hebt, passend bij het aantal personen van het recept.
// Ingrediënten die je telt (2 eieren, 1 banaan) blijven zoals ze zijn.
(() => {
  // Hoeveel porties maakt het recept?
  const porties = voor => {
    const m = /(\d+)\s*(\S+)/.exec(voor || ""); if (!m) return 1;
    const n = +m[1], w = m[2].toLowerCase();
    if (/^perso/.test(w) || /^porti/.test(w)) return n;
    if (/koekje/.test(w)) return n / 3;
    if (/balletje/.test(w)) return n / 4;
    if (/muffin|reep|repen|stuk|ijsje/.test(w)) return n / 2;
    if (/cake/.test(w)) return 6;
    if (/kan/.test(w)) return 4;
    return 1;
  };
  const nl = x => String(x).replace(".", ",");
  const rond = (v, u) => {
    if (u === "stuk") return v;
    if (v < 3) return Math.max(1, Math.round(v));
    if (v < 10) return Math.round(v);
    if (v < 100) return Math.round(v / 5) * 5;
    if (v < 300) return Math.round(v / 10) * 10;
    return Math.round(v / 50) * 50;
  };
  const stuks = (v, een, meer) => { const h = Math.round(v * 2) / 2; if (h <= 0.5) return "½ " + een; const heel = Math.floor(h), half = h - heel ? "½" : ""; return heel + half + " " + (h > 1 ? meer : een); };

  // [herkennen, gram per portie, eenheid, gram per eetlepel, gram per theelepel, gram per handje, gram per kopje (≈150 ml), gram per beetje]
  const T = [
    [/kaneel/, 1.5, "g", 7, 2, 0, 0, 1, true],
    [/bakpoeder/, 2, "g", 12, 4, 0, 0, 2],
    [/\bzout\b/, 0.5, "g", 15, 5, 0, 0, 1, true],
    [/peper/, 0.5, "g", 6, 2, 0, 0, 1, true],
    [/^yoghurt met kruiden$/, 40, "g", 20, 7, 0, 150, 30],
    [/kruiden|kerrie|paprikapoeder|chili/, 1, "g", 6, 2, 0, 0, 2],
    [/cacao/, 5, "g", 7, 2, 0, 0, 3],
    [/chiazaad/, 12, "g", 12, 4, 20, 0, 5],
    [/currypasta/, 10, "g", 15, 5, 0, 0, 10],
    [/tomatenpuree/, 15, "g", 15, 5, 0, 0, 10],
    [/teriyaki|sojasaus/, 10, "ml", 15, 5, 0, 0, 10],
    [/olie|kokosolie/, 8, "ml", 10, 5, 0, 0, 5],
    [/\bboter\b/, 5, "g", 15, 5, 0, 0, 5],
    [/honing|appelstroop/, 10, "g", 20, 7, 0, 0, 5],
    [/pindakaas/, 15, "g", 15, 5, 0, 150, 10],
    [/pindasaus/, 30, "g", 15, 5, 0, 0, 15],
    [/pesto/, 15, "g", 15, 5, 0, 0, 15],
    [/hummus/, 40, "g", 15, 5, 0, 0, 20],
    [/yoghurtsaus|roomkaas|smeerkaas/, 25, "g", 15, 5, 0, 0, 20],
    [/kookroom/, 50, "ml", 15, 5, 0, 0, 30],
    [/kokosmelk/, 100, "ml", 15, 5, 0, 150, 30],
    [/karnemelk|melk/, 200, "ml", 15, 5, 0, 150, 30],
    [/griekse yoghurt|yoghurt|kwark|hüttenkäse|ricotta/, 150, "g", 20, 7, 0, 150, 30],
    [/havermout en dadels/, 60, "g", 10, 3, 20, 0, 10],
    [/havermout|havermeel|muesli|granola/, 45, "g", 10, 3, 20, 70, 10],
    [/meel/, 35, "g", 10, 3, 0, 90, 10],
    [/popcornmais/, 30, "g", 12, 4, 0, 110, 10],
    [/quinoa|bulgur|couscous/, 70, "g", 12, 4, 0, 120, 10],
    [/rijst \(koud|gekookte rijst|restje rijst/, 150, "g", 15, 5, 0, 150, 30],
    [/rijst of noedels|rijst/, 75, "g", 15, 5, 0, 130, 20],
    [/gnocchi/, 200, "g", 15, 5, 0, 0, 30],
    [/lasagne/, 60, "g", 0, 0, 0, 0, 0],
    [/pasta|spaghetti|noedels/, 80, "g", 0, 0, 40, 0, 20],
    [/rode linzen/, 60, "g", 15, 5, 0, 120, 20],
    [/linzen|bonen|kikkererwten|edamame/, 100, "g", 15, 5, 40, 120, 30],
    [/gerookte zalm/, 50, "g", 0, 0, 0, 0, 20],
    [/plakjes kip|ham of kip/, 40, "g", 0, 0, 0, 0, 20],
    [/tonijn/, 75, "g", 0, 0, 0, 0, 20],
    [/kip|kalkoen|gehakt(?!e noten)|zalm|vis|garnalen|tofu/, 120, "g", 0, 0, 0, 0, 30],
    [/falafel/, 4, "stuk", 0, 0, 0, 0, 0, false, "balletjes falafel", "balletjes falafel"],
    [/geraspte kaas/, 25, "g", 8, 3, 20, 0, 15],
    [/kaas|feta|mozzarella/, 30, "g", 0, 0, 25, 0, 15],
    [/dadels/, 30, "g", 15, 5, 30, 130, 15],
    [/noten|walnoten|pompoenpitten|pitten/, 20, "g", 10, 3, 25, 100, 10],
    [/rozijnen/, 20, "g", 12, 4, 20, 0, 10],
    [/kokos/, 10, "g", 6, 2, 15, 60, 5],
    [/chocola/, 10, "g", 0, 0, 0, 0, 10],
    [/sinaasappelsap/, 150, "ml", 15, 5, 0, 150, 20],
    [/thee/, 1, "stuk", 0, 0, 0, 0, 0, false, "theezakje", "theezakjes"],
    [/watermeloen/, 150, "g", 0, 0, 60, 150, 50],
    [/\bwater\b/, 250, "ml", 15, 5, 0, 150, 30],
    [/bouillonblokje/, 0.5, "stuk", 0, 0, 0, 0, 0, false, "bouillonblokje", "bouillonblokjes"],
    [/bouillon/, 250, "ml", 15, 5, 0, 150, 30],
    [/passata|tomatensaus|tomatenblokjes|tomaten/, 125, "g", 15, 5, 0, 150, 30],
    [/munt|basilicum|bieslook|dille|peterselie/, 3, "g", 0, 0, 5, 0, 3, true],
    [/gember/, 5, "g", 10, 3, 0, 0, 5],
    [/knoflook/, 0.5, "stuk", 0, 0, 0, 0, 0, false, "teentje knoflook", "teentjes knoflook"],
    [/citroen of sinaasappel|citroen|limoen/, 0.25, "stuk", 15, 5, 0, 0, 5, false, "citroen", "citroenen"],
    [/sla en tomaat|sla en geraspte kaas|tomaat, sla/, 80, "g", 0, 0, 30, 0, 30],
    [/pizzabodem/, 1, "stuk", 0, 0, 0, 0, 0, false, "volkoren pizzabodem of wrap", "volkoren pizzabodems of wraps"],
    [/,| en | of /, 150, "g", 0, 0, 50, 0, 50, false, null, null, true],
    [/^sla$|spinazie/, 40, "g", 0, 0, 25, 0, 20],
    [/boerenkool|andijvie/, 200, "g", 0, 0, 25, 0, 30],
    [/aardappel|krieltjes|pompoen/, 200, "g", 0, 0, 0, 0, 50],
    [/broccoli|bloemkool|sperziebonen|courgette|wokgroente|kool|prei|soepgroente|champignon|doperwten|wortel/, 125, "g", 15, 5, 40, 0, 30],
    [/mais/, 50, "g", 15, 5, 30, 0, 20],
    [/paprika's/, 1, "stuk", 0, 0, 0, 0, 0],
    [/paprika/, 75, "g", 0, 0, 0, 0, 30],
    [/komkommer|tomaatje|tomaat|radijs/, 75, "g", 0, 0, 50, 0, 30],
    [/aardbei/, 100, "g", 15, 0, 60, 150, 40],
    [/bessen|bosbessen/, 75, "g", 15, 0, 50, 150, 40],
    [/druiven/, 100, "g", 0, 0, 60, 0, 40],
    [/meloen|ananas|mango|perzik|fruit/, 120, "g", 0, 0, 60, 150, 50],
    [/sinaasappel/, 0.5, "stuk", 0, 0, 0, 0, 0, false, "sinaasappel", "sinaasappels"],
    [/appel/, 0.5, "stuk", 0, 0, 0, 0, 0, false, "appel", "appels"],
    [/peer/, 0.5, "stuk", 0, 0, 0, 0, 0, false, "peer", "peren"],
    [/banaan/, 0.5, "stuk", 0, 0, 0, 0, 0, false, "banaan", "bananen"],
    [/kiwi/, 1, "stuk", 0, 0, 0, 0, 0, false, "kiwi", "kiwi's"],
    [/avocado/, 0.25, "stuk", 0, 0, 0, 0, 0, false, "avocado", "avocado's"],
    [/^ui$|\bui\b/, 0.25, "stuk", 0, 0, 0, 0, 0, false, "ui", "uien"],
    [/gekookt ei/, 1, "stuk", 0, 0, 0, 0, 0, false, "gekookt ei", "gekookte eieren"],
    [/crackers/, 2, "stuk", 0, 0, 0, 0, 0, false, "volkoren cracker", "volkoren crackers"],
    [/pizzabodem/, 1, "stuk", 0, 0, 0, 0, 0, false, "volkoren pizzabodem of wrap", "volkoren pizzabodems of wraps"],
    [/tortilla|wraps?\b/, 1, "stuk", 0, 0, 0, 0, 0, false, "volkoren wrap", "volkoren wraps"],
    [/pita/, 1, "stuk", 0, 0, 0, 0, 0, false, "volkoren pitabroodje", "volkoren pitabroodjes"],
    [/bagel/, 1, "stuk", 0, 0, 0, 0, 0, false, "volkoren bagel", "volkoren bagels"],
    [/broodje/, 1, "stuk", 0, 0, 0, 0, 0, false, "volkoren broodje", "volkoren broodjes"],
    [/pannenkoek/, 2, "stuk", 0, 0, 0, 0, 0, false, "volkoren pannenkoekje", "volkoren pannenkoekjes"],
    [/brood|boterham|toast/, 2, "stuk", 0, 0, 0, 0, 0, false, "snee volkoren brood", "sneetjes volkoren brood"],
    [/spiesjes/, 2, "stuk", 0, 0, 0, 0, 0, false, "spiesje", "spiesjes"]
  ];
  // Bij bakrecepten (koekjes, muffins, repen, ijsjes, cake) gaat er minder van het natte en van groente/fruit in per stuk
  const BAK = [[/melk|yoghurt/, 40], [/sap/, 75], [/kokosmelk/, 50], [/watermeloen/, 100], [/bessen|bosbessen|aardbei/, 40], [/mango|fruit|ananas/, 60], [/paprika|spinazie|tomaat|wortel|courgette/, 40]];
  const zoek = s => T.find(([re]) => re.test(s.toLowerCase()));
  const vast = new Set(["g", "ml"]);
  const fmt = (v, u) => nl(v) + " " + u;
  const klein = s => s.replace(/^(\S)/, c => /^(Griekse|Italiaanse)/.test(s) ? c : c.toLowerCase());

  const VAST = {"Tomatenpuree en passata": "2 eetlepels tomatenpuree (30 g) en 500 g passata", "Citroen en dille": "½ citroen en een paar takjes dille (3 g)"};
  function maak(s, n, bak) {
    if (VAST[s]) return VAST[s];
    const ev = /^Eventueel (?!een )(.*)$/i.exec(s); if (ev) return "Eventueel " + klein(maak(ev[1].replace(/^\S/, c => c.toUpperCase()), n, bak));
    if (/\d+\s*(g|ml|gram)\b/.test(s)) return s;                       // staat er al
    if (/^(eventueel )?(een paar|paar) /i.test(s)) return /chocola/i.test(s) ? s + " (10 g)" : /kaas/i.test(s) ? s + " (30 g)" : s;
    // getelde dingen: 2 eieren, 1 banaan, 3 appels ... blijven zoals ze zijn
    const num = /^(\d+|½|een|halve|half|anderhalf)\s+(.*)$/i.exec(s);
    const lepel = /^(\d+|een|halve)?\s*(eetlepels?|lepels?|theelepels?)\s+(.*)$/i.exec(s.replace(/^Eventueel /i, ""));
    if (lepel) { const t = zoek(lepel[3]); if (!t) return s; const tl = /^thee/i.test(lepel[2]), per = tl ? t[4] : t[3]; if (!per) return s;
      const k = lepel[1] && /^\d/.test(lepel[1]) ? +lepel[1] : lepel[1] && /half/i.test(lepel[1]) ? 0.5 : 1; return s + " (" + fmt(rond(per * k, t[2]), t[2]) + ")"; }
    const maat = /^(eventueel |klein )?(handje|beetje|scheutje|snufje|klontje|dun laagje|plakjes|plak|blikje|blik|pot)\s+(.*)$/i.exec(s);
    if (maat) { const w = maat[2].toLowerCase(), rest = maat[3], t = zoek(rest);
      const vaste = {blikje: [/tonijn/, "145 g, uitgelekt 110 g"], blik: [/tomaten/, "400 g"], pot: [/tomatensaus|passata/, "500 g"]};
      if (vaste[w]) { const [re, txt] = vaste[w]; return re.test(rest) ? s + " (" + txt + ")" : /bonen/.test(rest) ? s + " (400 g, uitgelekt 240 g)" : s; }
      if (w === "klontje") return s + " (5 g)";
      if (w === "snufje") return s + " (1 g)";
      if (w === "plak") return s + (/kaas/.test(rest) ? " (20 g)" : /ontbijtkoek/.test(rest) ? " (30 g)" : "");
      if (w === "plakjes") return s + (/gember/.test(rest) ? " (5 g)" : /citroen|sinaasappel/.test(rest) ? "" : " (" + fmt(rond(40 * n, "g"), "g") + ")");
      if (w === "scheutje") { const ml = /olie/.test(rest) ? 10 : /sap|water/.test(rest) ? 20 : 30; return s + " (" + ml + " ml)"; }
      if (!t) return s;
      if (w === "handje") return t[5] ? s + " (" + fmt(t[5], t[2] === "ml" ? "g" : t[2]) + ")" : s;
      if (w === "dun laagje") return s + " (" + fmt(10, "g") + ")";
      if (w === "beetje") return t[7] && t[2] !== "stuk" ? s + " (" + fmt(t[7], t[2]) + ")" : s;
      return s;
    }
    // tussen haakjes: (een kopje), (een half kopje), (2 kopjes), (een kom) ...
    const hk = /^(.*?)\s*\(([^)]*)\)\s*$/.exec(s);
    if (hk && /^(\d|halve)/i.test(hk[1])) return s;
    if (hk) { const naam = hk[1], m = hk[2].toLowerCase(), t = zoek(naam);
      const kop = /anderhalf kopje/.test(m) ? 1.5 : /half kopje/.test(m) ? 0.5 : /(2|twee) kopjes/.test(m) ? 2 : /3 kopjes/.test(m) ? 3 : /kopje/.test(m) ? 1 : 0;
      if (t && kop && t[6]) return naam + " (" + hk[2] + ", " + fmt(rond(t[6] * kop, t[2]), t[2]) + ")";
      if (/kom/.test(m)) return naam + " (" + hk[2] + ", " + (t && t[2] === "ml" ? "250 ml" : "200 g") + ")";
      if (/groot glas/.test(m)) return naam + " (" + hk[2] + ", 300 ml)";
      if (/beker/.test(m)) return naam + " (" + hk[2] + ", 250 ml)";
      if (/bidon/.test(m)) return naam + " (" + hk[2] + ", 500 ml)";
      if (/scheutje/.test(m)) return naam + " (" + hk[2] + ", 30 ml)";
      if (/handje/.test(m) && t && t[5]) return naam + " (" + hk[2] + ", " + t[5] + " g)";
      if (/2 handen/.test(m)) return naam + " (" + hk[2] + ", 80 g)";
      if (/5 stuks/.test(m)) return naam + " (" + hk[2] + ", 40 g)";
      if (t && vast.has(t[2])) return fmt(rond(t[1] * n, t[2]), t[2]) + " " + klein(naam) + " (" + hk[2] + ")";
      return s;
    }
    if (/^een glas/i.test(s)) return s + " (200 ml)";
    if (/^halve (banaan|appel|avocado|komkommer|mango)/i.test(s)) return s;
    if (num) return s;                                                    // 2 eieren, 3 appels, 1 ui ...
    const t = zoek(s); if (!t) return s;
    const [, pp, u, , , , , , vastAantal, een, meer, mix] = t;
    if (u === "stuk") { if (!een) return s; return stuks(pp * n, een, meer); }
    const bp = bak && (BAK.find(([re]) => re.test(s.toLowerCase())) || [])[1];
    let v = vastAantal ? pp * Math.max(1, Math.sqrt(n)) : (mix && bak ? 40 : bp || pp) * n;
    if (/^olie, peper en zout$/i.test(s)) return "1 eetlepel olie (10 ml), peper en zout";
    if (/^(olie|olijfolie)(,| en) /i.test(s)) return s + " (1 eetlepel olie, 10 ml)";
    return fmt(rond(v, u), u) + " " + (mix ? klein(s) + " (samen)" : klein(s));
  }
  RECEPTEN.forEach(r => { if (r._gram) return; const n = porties(r.voor), bak = !/perso|porti/.test(r.voor || ""); r.ingr = r.ingr.map(s => maak(s, n, bak)); r._gram = true; });
})();
