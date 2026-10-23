// Stay Hard – maakt extra uitdagingen en 'Wat doe jij?'-vragen van alle oefeningen.
// Dit bestand moet als LAATSTE geladen worden, na alle meer*.js bestanden.

// ---------- Uitdagingen gemaakt van alle oefeningen ----------
(() => {
  const seen = new Set(CHALLENGES);
  const push = t => { if (!seen.has(t)) { seen.add(t); CHALLENGES.push(t); } };
  EXERCISES.forEach(x => push(x.title + ": doe " + x.reps + ". Lukt het? Doe er morgen één herhaling bij."));
  DRILLS.forEach(d => push("Voetbaluitdaging: " + d.title.toLowerCase() + " (" + d.time + "). " + d.steps[d.steps.length - 1] + "."));
  RECOVERY.forEach(r => push("Rekuitdaging: " + r.title.toLowerCase() + ", " + r.reps + ". Rustig ademen."));
})();

// ---------- Wat doe jij? gemaakt van rek- en IQ-lessen ----------
(() => {
  const r = (n, s) => { let x = (n * 9301 + s * 49297) % 233280; return x / 233280; };
  // Elke rekoefening hoort bij één lichaamsdeel. Twijfelgevallen (meerdere delen) slaan we over.
  const AREAS = [["Achterkant been (hamstring)", /hamstring|achterkant been|achterkant benen/i], ["Voorkant bovenbeen", /voorkant bovenbeen|quadri|bovenbeen/i], ["Kuiten en achillespees", /kuit|achilles/i], ["Lies", /lies|binnenkant/i], ["Heupen en billen", /heup|bil/i], ["Rug", /rug/i], ["Schouders, armen en nek", /schouder|arm|nek|pols|borst/i], ["Voeten en enkels", /voet|enkel|teen|tenen|scheen|wreef/i]];
  RECOVERY.forEach((x, n) => {
    const hits = AREAS.filter(([, re]) => re.test(x.target || ""));
    if (hits.length !== 1) return;
    const right = hits[0][0], others = AREAS.map(a => a[0]).filter(a => a !== right);
    const a = others[Math.floor(r(n, 1) * others.length)], rest = others.filter(o => o !== a), b = rest[Math.floor(r(n, 2) * rest.length)];
    const pos = n % 3, opts = [a, b]; opts.splice(pos, 0, right);
    IQ_QUIZ.push({q:"Je doet de rekoefening '" + x.title + "'. Wat rek je vooral?", options:opts, answer:pos, why:x.text});
  });
  IQ_LESSONS.forEach((x, n) => {
    const others = IQ_LESSONS.filter(o => o !== x);
    const a = others[Math.floor(r(n, 3) * others.length)], b = others[(Math.floor(r(n, 4) * others.length) + 7) % others.length];
    if (a === b) return;
    const pos = (n + 1) % 3, opts = [a.how, b.how]; opts.splice(pos, 0, x.how);
    IQ_QUIZ.push({q:"Voetbal IQ – " + x.title + ". Wat doe je dan?", options:opts, answer:pos, why:x.text});
  });
})();


// ---------- Mini-habits gemaakt van oefeningen en rekoefeningen ----------
(() => {
  const have = new Set(TIPS.map(t => t.title)), bigHave = new Set(BIG_HABITS.map(t => t.title));
  EXERCISES.forEach(x => {
    const t = "Mini-training: " + x.title.toLowerCase();
    if (!have.has(t)) { have.add(t); TIPS.push({title:t, text:"Even tussendoor bewegen houdt je fit. Dit traint: " + x.target.toLowerCase() + ".", how:x.text + " Doe " + x.reps + ".", theme:"bewegen"}); }
    const b = "Een week elke dag: " + x.title.toLowerCase();
    if (!bigHave.has(b)) { bigHave.add(b); BIG_HABITS.push({title:b, text:"Een week elke dag dezelfde oefening laat je echt vooruitgaan. Dit traint: " + x.target.toLowerCase() + ".", how:"Doe elke dag " + x.reps + ". " + x.text, size:"groot", theme:"bewegen"}); }
  });
  RECOVERY.forEach(r => {
    const t = "Rekmoment: " + r.title.toLowerCase();
    if (!have.has(t)) { have.add(t); TIPS.push({title:t, text:"Even rekken houdt je soepel. Dit rekt: " + r.target.toLowerCase() + ".", how:r.text + " " + r.reps + ".", theme:"herstel"}); }
  });
  DAILY_LESSONS.forEach(l => {
    const t = "5 minuten techniek: " + l.title.toLowerCase();
    if (!have.has(t)) { have.add(t); TIPS.push({title:t, text:l.why, how:l.doe, theme:"bewegen"}); }
  });
})();

// ---------- Meer 'Wat doe jij?' gemaakt van de daglessen en oefeningen ----------
(() => {
  const r = (n, s) => { const x = Math.sin(n * 12.9898 + s * 78.233) * 43758.5453; return x - Math.floor(x); };
  const pick3 = (list, i, key, salt) => {
    const others = list.filter((o, j) => j !== i && o[key] && o[key] !== list[i][key]);
    const a = others[Math.floor(r(i, salt) * others.length)];
    const rest = others.filter(o => o[key] !== a[key]);
    const b = rest[Math.floor(r(i, salt + 1) * rest.length)];
    return [a[key], b[key]];
  };
  DAILY_LESSONS.forEach((l, i) => {
    if (!l.fout || !l.onthoud) return;
    let [a, b] = pick3(DAILY_LESSONS, i, "fout", 5), pos = i % 3, o = [a, b]; o.splice(pos, 0, l.fout);
    IQ_QUIZ.push({q:"Dagles '" + l.title + "': wat is de fout die veel spelers maken?", options:o, answer:pos, why:"Goed is: " + l.onthoud});
    [a, b] = pick3(DAILY_LESSONS, i, "onthoud", 9); pos = (i + 1) % 3; o = [a, b]; o.splice(pos, 0, l.onthoud);
    IQ_QUIZ.push({q:"Wat onthoud je bij '" + l.title + "'?", options:o, answer:pos, why:l.why});
  });
  const AREAS = [["Benen", /been|benen|kuit|bil|lies|heup|knie|enkel/i], ["Buik en romp", /buik|romp|zijkant/i], ["Armen en borst", /arm|borst|schouder/i], ["Rug", /rug/i], ["Snelheid en voetenwerk", /snelheid|voetenwerk|sprint|conditie|explosi/i], ["Balans", /balans/i]];
  EXERCISES.forEach((x, i) => {
    const hits = AREAS.filter(([, re]) => re.test(x.target || ""));
    if (hits.length !== 1) return;
    const right = hits[0][0], others = AREAS.map(a => a[0]).filter(a => a !== right);
    const a = others[Math.floor(r(i, 21) * others.length)], rest = others.filter(o => o !== a), b = rest[Math.floor(r(i, 22) * rest.length)];
    const pos = (i + 2) % 3, o = [a, b]; o.splice(pos, 0, right);
    IQ_QUIZ.push({q:"Thuistraining '" + x.title + "': wat train je vooral?", options:o, answer:pos, why:x.text});
  });
})();

// ---------- Nog meer uitdagingen: piramides en records ----------
(() => {
  const seen = new Set(CHALLENGES), push = t => { if (!seen.has(t)) { seen.add(t); CHALLENGES.push(t); } };
  EXERCISES.forEach(x => push("Piramide " + x.title.toLowerCase() + ": doe 1 ronde, dan 2, dan 3, en weer terug naar 1. Rust 30 seconden tussen de rondes."));
  DRILLS.forEach(d => push("Record-uitdaging: " + d.title.toLowerCase() + ". Tel hoe vaak het lukt in 2 minuten en schrijf je score op."));
})();

// ---------- Ronde 3: gemaakt van kracht, trucjes, voetbaloefeningen en IQ ----------
(() => {
  const K = typeof KRACHT !== "undefined" ? KRACHT : [];
  const have = new Set(TIPS.map(t => t.title)), bigHave = new Set(BIG_HABITS.map(t => t.title)), seen = new Set(CHALLENGES);
  const tip = (title, text, how, theme) => { if (!have.has(title)) { have.add(title); TIPS.push({title, text, how, theme}); } };
  const big = (title, text, how, theme) => { if (!bigHave.has(title)) { bigHave.add(title); BIG_HABITS.push({title, text, how, size:"groot", theme}); } };
  const ch = t => { if (!seen.has(t)) { seen.add(t); CHALLENGES.push(t); } };
  K.forEach(x => {
    tip("Kracht tussendoor: " + x.title.toLowerCase(), "Kleine krachtmomenten maken je sterker. Dit traint: " + x.target.toLowerCase() + ".", x.text.split(" Waarom")[0] + " Doe " + x.reps + ".", "bewegen");
    big("Twee weken twee keer per week: " + x.title.toLowerCase(), "Een vaste krachtoefening twee keer per week maakt je echt sterker.", "Doe op je krachtdagen " + x.reps + ". " + x.text.split(" Waarom")[0], "bewegen");
    ch("Krachtuitdaging: " + x.title.toLowerCase() + ", " + x.reps + ". Lukt het met perfecte techniek?");
    ch("Krachtpiramide: " + x.title.toLowerCase() + ". Doe de helft, rust 30 seconden, en doe dan alles.");
  });
  TRICKS.forEach(t => {
    tip("Trucje van 5 minuten: " + t.title.toLowerCase(), "Elke dag 5 minuten een trucje maakt je creatief met de bal.", t.tip, "bewegen");
    big("Een week elke dag: " + t.title.toLowerCase() + " oefenen", "Na een week elke dag oefenen kun je een trucje echt.", "Oefen elke dag 10 minuten. " + t.tip, "bewegen");
    ch("Trucje-uitdaging: lukt " + t.title.toLowerCase() + " 5 keer achter elkaar, met beide voeten?");
  });
  DRILLS.forEach(d => {
    tip("10 minuten voetbal: " + d.title.toLowerCase(), "Even met de bal bezig zijn maakt je techniek beter.", d.text, "bewegen");
    big("Een maand elke week: " + d.title.toLowerCase(), "Een oefening elke week herhalen laat zien hoe je vooruitgaat.", "Doe elke week " + d.time + ". " + d.text, "bewegen");
  });
  IQ_LESSONS.forEach(l => tip("Denk vandaag aan: " + l.title.toLowerCase(), l.text, l.how, "hoofd"));
})();
(() => {
  const K = typeof KRACHT !== "undefined" ? KRACHT : [];
  const r = (n, s) => { const x = Math.sin(n * 91.17 + s * 13.7) * 24634.6345; return x - Math.floor(x); };
  // IQ: waarom is dit slim?
  IQ_LESSONS.forEach((l, i) => {
    const others = IQ_LESSONS.filter(o => o !== l && o.text !== l.text);
    const a = others[Math.floor(r(i, 1) * others.length)], b = others.filter(o => o !== a)[Math.floor(r(i, 2) * (others.length - 1))];
    const pos = (i + 2) % 3, o = [a.text, b.text]; o.splice(pos, 0, l.text);
    IQ_QUIZ.push({q:"Waarom is '" + l.title + "' slim?", options:o, answer:pos, why:"Zo doe je het: " + l.how});
  });
  // Kracht: wat train je?
  const cats = ["Benen", "Buik", "Romp en rug", "Sprongkracht", "Balans en enkels"];
  const catOf = x => /buik/i.test(x.target) ? "Buik" : /sprong|jump|bound|hink/i.test(x.title + " " + x.yt) ? "Sprongkracht" : /romp|rug|schouder|arm|borst/i.test(x.target) ? "Romp en rug" : /enkel|balans|voet/i.test(x.target) ? "Balans en enkels" : "Benen";
  K.forEach((x, i) => {
    const right = catOf(x), others = cats.filter(c => c !== right);
    const a = others[Math.floor(r(i, 5) * others.length)], b = others.filter(c => c !== a)[Math.floor(r(i, 6) * (others.length - 1))];
    const pos = i % 3, o = [a, b]; o.splice(pos, 0, right);
    IQ_QUIZ.push({q:"Krachtoefening '" + x.title + "': wat train je vooral?", options:o, answer:pos, why:x.text});
  });
  // Trucjes: hoe moeilijk?
  TRICKS.forEach((t, i) => {
    const opts = ["Makkelijk", "Gemiddeld", "Moeilijk"];
    if (!opts.includes(t.level)) return;
    IQ_QUIZ.push({q:"Hoe moeilijk is het trucje '" + t.title + "'?", options:opts, answer:opts.indexOf(t.level), why:t.tip});
  });
})();

// ---------- Ronde 4: van posities, blessures, records, focus en leiderschap ----------
(() => {
  const r = (n, s) => { const x = Math.sin(n * 57.3 + s * 11.1) * 31337.77; return x - Math.floor(x); };
  const pick2 = (arr, i, s) => { const o = arr.filter((_, j) => j !== i); const a = o[Math.floor(r(i, s) * o.length)]; const rest = o.filter(x => x !== a); return [a, rest[Math.floor(r(i, s + 1) * rest.length)]]; };
  if (typeof POSITIES !== "undefined") POSITIES.forEach((p, i) => {
    let [a, b] = pick2(POSITIES, i, 1), pos = i % 3, o = [a.bezit[0], b.bezit[0]]; o.splice(pos, 0, p.bezit[0]);
    IQ_QUIZ.push({q:"Je speelt als " + p.name.toLowerCase() + " en jouw team heeft de bal. Wat is slim?", options:o, answer:pos, why:p.kort});
    [a, b] = pick2(POSITIES, i, 3); pos = (i + 1) % 3; o = [a.verlies[0], b.verlies[0]]; o.splice(pos, 0, p.verlies[0]);
    IQ_QUIZ.push({q:"Je speelt als " + p.name.toLowerCase() + " en de tegenstander heeft de bal. Wat doe je?", options:o, answer:pos, why:p.kort});
  });
  if (typeof BLESSURES !== "undefined") BLESSURES.forEach((x, i) => {
    const [a, b] = pick2(BLESSURES, i, 5), pos = (i + 2) % 3, o = [a.voorkom, b.voorkom]; o.splice(pos, 0, x.voorkom);
    IQ_QUIZ.push({q:"Hoe voorkom je: " + x.title.toLowerCase() + "?", options:o, answer:pos, why:x.wat});
  });
  const seen = new Set(CHALLENGES), push = t => { if (!seen.has(t)) { seen.add(t); CHALLENGES.push(t); } };
  if (typeof RECORD_TESTS !== "undefined") RECORD_TESTS.forEach(t => push("Record-poging: " + t.name.toLowerCase() + ". " + t.how + " Zet je score bij Speler → Records."));
  const have = new Set(TIPS.map(t => t.title));
  const tip = (title, text, how, theme) => { if (!have.has(title)) { have.add(title); TIPS.push({title, text, how, theme}); } };
  if (typeof FOCUS_TIPS !== "undefined") FOCUS_TIPS.forEach(f => tip("Focus: " + f.title.toLowerCase(), f.wat, f.hoe, "hoofd"));
  if (typeof LEIDER !== "undefined") LEIDER.forEach(l => tip("Leider: " + l.title.toLowerCase(), l.wat, l.doe, "hoofd"));
  if (typeof EXCUSES !== "undefined") EXCUSES.forEach(([ex, ans]) => push("Geen excuus vandaag: “" + ex + "” " + ans));
})();

// ---------- Ronde 5: van spelhervattingen, tegenslag, spelers, wedstrijden en focus ----------
(() => {
  const r = (n, s) => { const x = Math.sin(n * 41.7 + s * 13.3) * 24631.31; return x - Math.floor(x); };
  const seenQ = new Set(IQ_QUIZ.map(q => q.q)), addQ = q => { if (!seenQ.has(q.q)) { seenQ.add(q.q); IQ_QUIZ.push(q); } };
  const seen = new Set(CHALLENGES), push = t => { if (!seen.has(t)) { seen.add(t); CHALLENGES.push(t); } };
  const naam = {keeper:"keeper", verdediger:"centrale verdediger", back:"back", middenvelder:"middenvelder", vleugel:"vleugelspeler", spits:"spits"};
  if (typeof SH_GROEPEN !== "undefined") {
    const groepen = Object.keys(SH_GROEPEN);
    let n = 0;
    groepen.forEach(g => SH_SITUATIES.forEach(([id, title]) => {
      const x = SH_GROEPEN[g][id]; if (!x) return;
      const others = groepen.filter(o => o !== g && SH_GROEPEN[o][id] && SH_GROEPEN[o][id].taak !== x.taak);
      if (others.length < 2) return;
      const a = others[Math.floor(r(n, 1) * others.length)], rest = others.filter(o => o !== a), b = rest[Math.floor(r(n, 2) * rest.length)];
      const pos = n % 3, o = [SH_GROEPEN[a][id].taak, SH_GROEPEN[b][id].taak]; o.splice(pos, 0, x.taak);
      addQ({q:title + ": wat is jouw taak als " + naam[g] + "?", options:o, answer:pos, why:"Jouw plek: " + x.plek + " Let op: " + x.let});
      n++;
    }));
  }
  if (typeof TEGENSLAG !== "undefined") TEGENSLAG.forEach((t, i) => {
    push("Tegenslag-plan: stel je voor dat dit gebeurt: " + t.title.toLowerCase() + ". Wat doe je? " + t.doe[0] + ".");
    const o = TEGENSLAG.filter((_, j) => j !== i), a = o[Math.floor(r(i, 3) * o.length)], b = o[Math.floor(r(i, 4) * o.length)];
    if (a === b) return;
    const pos = i % 3, opts = [a.denk, b.denk]; opts.splice(pos, 0, t.denk);
    addQ({q:"Tegenslag: " + t.title.toLowerCase() + ". Welke gedachte past hier het best?", options:opts, answer:pos, why:t.doe.join(". ") + "."});
  });
  if (typeof SPELERS !== "undefined") SPELERS.forEach(p => push("Train zoals " + p.name + ": " + p.oefening));
  if (typeof WEDSTRIJDEN !== "undefined") WEDSTRIJDEN.forEach(w => { if (w.jij) push("Les uit '" + w.title + "': " + w.jij); });
  if (typeof FOCUS_OEFENINGEN !== "undefined") FOCUS_OEFENINGEN.forEach(([t, h]) => push("Focus-oefening '" + t + "': " + h));
  if (typeof LEIDER_OPDRACHTEN !== "undefined") LEIDER_OPDRACHTEN.forEach(t => push("Leider-opdracht: " + t));
  const have = new Set(TIPS.map(t => t.title));
  if (typeof BLESSURE_REGELS !== "undefined") BLESSURE_REGELS.forEach((t, i) => { const title = "Fit blijven " + (i + 1); if (!have.has(title)) { have.add(title); TIPS.push({title, text:t, how:"Maak er een vaste gewoonte van.", theme:"herstel"}); } });
})();
