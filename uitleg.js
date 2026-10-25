// ---------- Betere uitleg bij elk recept ----------
// Voor elk recept: welke spullen je nodig hebt, uitleg bij elke stap, waar je op moet letten,
// hoe je weet dat het klaar is, hoe je het bewaart, en een zoekterm voor een filmpje.
(() => {
  const T = s => s.toLowerCase();

  // Extra uitleg per stap (de eerste regel die past)
  const HINT = [
    [/verwarm de oven|voorverwarm/, "Zet de oven 10 minuten van tevoren aan, dan is hij op temperatuur als je erin gaat."],
    [/(bak|in de oven).*\d+ minuten op \d+ graden|op \d+ graden/, "Zet een wekker. Gebruik ovenwanten als je de schaal eruit haalt: alles is heel heet."],
    [/kook de (volkoren )?(pasta|spaghetti|noedels|macaroni)|pasta.*koken|kook .*pasta/, "Breng een grote pan water met een snufje zout aan de kook. Doe de pasta erin en kook hem zo lang als op de verpakking staat (meestal 9 tot 12 minuten). Roer af en toe en giet hem af in een vergiet."],
    [/kook de rijst|rijst.*koken|kook .*rijst/, "Spoel de rijst af. Gebruik 2 keer zoveel water als rijst, breng aan de kook en laat met de deksel op de pan 12 tot 15 minuten zacht koken tot het water op is."],
    [/kook de (kleine )?aardappel|kook .*krieltjes|kook .*aardappel/, "Kook ze in water met de deksel op de pan. Na ongeveer 20 minuten prik je er met een vork in: gaat dat makkelijk, dan zijn ze gaar."],
    [/kook .*(eieren|ei\b)|eieren.*koken/, "Leg de eieren voorzichtig in kokend water. 6 minuten is zacht, 8 tot 9 minuten is hard. Spoel ze daarna onder koud water, dan pel je ze makkelijker."],
    [/kook .*(broccoli|sperziebonen|groente|bloemkool|doperwten|wortel)/, "Kook de groente in een laagje water met de deksel op de pan. Ze is goed als ze nog een beetje knapperig is, meestal na 5 tot 8 minuten."],
    [/kook .*(linzen|quinoa|couscous|bulgur)|couscous|bulgur/, "Kijk op de verpakking hoeveel water en hoe lang. Couscous en bulgur hoef je alleen te laten wellen in heet water met de deksel op de pan."],
    [/(bak|braad).*(kip|kalkoen)|kip.*gaar|bak de kip/, "Bak de kip op middelhoog vuur in een beetje olie en draai hem regelmatig om. Kip is pas gaar als hij vanbinnen helemaal wit is en niet meer roze."],
    [/(bak|grill).*(vis|zalm|witvis)|vis.*gaar|zalm/, "Bak de vis niet te lang. Hij is gaar als hij ondoorzichtig is en makkelijk uit elkaar valt met een vork."],
    [/(bak|braad).*gehakt|gehakt.*rul/, "Bak het gehakt rul: maak het met een spatel steeds kleiner tot alles bruin is en er geen roze stukjes meer zijn."],
    [/pannenkoek|crêpe|wentelteef/, "Laat de pan eerst goed warm worden met een klein beetje olie of boter. Draai om als de bovenkant droog wordt en er gaatjes in komen."],
    [/roerei|giet de eieren|roer rustig|eieren .*gaar|roer .*eieren/, "Bak op laag tot middelhoog vuur en blijf rustig roeren. Haal de pan van het vuur als het ei nog een beetje glanst, dan blijft het zacht."],
    [/omelet/, "Bak de omelet op laag vuur met een deksel op de pan, dan wordt hij ook bovenop gaar."],
    [/^bak|bak .*(in|op|aan)|goudbruin|roerbak|wok/, "Gebruik een koekenpan of wok op middelhoog vuur met een klein beetje olie. Wacht tot de pan warm is voordat je iets erin doet."],
    [/blender|mix .*glad|mix alles|mix tot/, "Doe eerst het vloeibare in de blender en daarna het vaste. Doe de deksel er goed op voordat je hem aanzet. Bevroren fruit maakt het extra koud en dik."],
    [/magnetron/, "Gebruik een kom of bord dat in de magnetron mag (geen metaal). Pas op: het kan heel heet zijn als het eruit komt."],
    [/vries|vriezer/, "Laat het minstens zo lang in de vriezer staan als in het recept staat. Even 5 minuten buiten laten staan maakt het makkelijker om te eten."],
    [/koelkast|een nacht/, "Zet het afgedekt in de koelkast, bijvoorbeeld in een pot met deksel. Zo kun je het 's avonds al klaarmaken."],
    [/snijd|snij |in stukjes|in plakjes|in blokjes|in partjes|in reepjes/, "Gebruik een snijplank en een scherp mes. Houd de vingers van je andere hand krom, zodat je toppen veilig zijn. Vraag hulp bij harde dingen zoals pompoen of zoete aardappel."],
    [/rasp/, "Rasp langzaam en stop voordat je vingers te dicht bij de rasp komen."],
    [/prak/, "Prak met de achterkant van een vork tot het mooi glad is. Rijp fruit prak je het makkelijkst."],
    [/klop/, "Klop met een vork of garde tot alles één kleur heeft en er geen draadjes eiwit meer te zien zijn."],
    [/verwarm|warm .*op|breng .*aan de kook/, "Verwarm rustig en roer af en toe, zodat er niets aanbrandt aan de bodem."],
    [/roer .*door|meng|roer/, "Meng goed tot alles mooi verdeeld is en er geen klontjes meer in zitten."],
    [/smeer/, "Smeer een dun laagje. Bij pindakaas en honing is een beetje al genoeg."],
    [/rol .*op|rol de|oprollen/, "Rol strak op, dan valt het niet uit elkaar. Een tandenstoker houdt het op zijn plek."],
    [/vorm .*balletjes|rol .*balletjes|balletjes/, "Maak je handen een beetje nat, dan plakt het niet aan je handen."],
    [/laat .*afkoelen|afkoelen/, "Laat het eerst afkoelen voordat je het snijdt of in een bakje doet, anders wordt het zacht en nat."],
    [/doop/, "Prik het fruit eventueel op een vorkje of spiesje, dan houd je je vingers schoon."],
    [/drink|eet .*meteen|direct/, "Meteen opdrinken of opeten, dan is het het lekkerst en blijven de vitamines goed."]
  ];

  // Spullen die je nodig hebt
  const SPUL = [
    [/oven|graden/, "🔥 Oven en ovenwanten"],
    [/ovenschaal|schaal/, "🍲 Ovenschaal"],
    [/bakpapier|bakplaat/, "📄 Bakpapier"],
    [/muffinvorm|muffins/, "🧁 Muffinvorm"],
    [/cakevorm|cake|bananenbrood/, "🍞 Cakevorm"],
    [/blender|mix .*glad|mix alles|staafmixer|pureer/, "🌀 Blender of staafmixer"],
    [/magnetron/, "📟 Magnetron"],
    [/vries|\bijs|ijsje|sorbet|bevroren/, "❄️ Vriezer"],
    [/koelkast|nacht/, "🧊 Koelkast"],
    [/pannetje|kook|aan de kook|pap|soep/, "🍲 Pan of pannetje"],
    [/\bbak\b|bak |roerbak|wok|koekenpan|tosti/, "🍳 Koekenpan"],
    [/snijd|snij |stukjes|plakjes|blokjes|partjes|reepjes/, "🔪 Snijplank en mes"],
    [/rasp|geraspt/, "🧀 Rasp"],
    [/klop|meng|mix|roer|prak|kom/, "🥣 Kom en vork of garde"],
    [/vergiet|giet .*af|afgieten|pasta|spaghetti|noedels/, "🫗 Vergiet"],
    [/tosti/, "🥪 Tosti-ijzer of koekenpan"],
    [/spies/, "🍢 Spiesjes"],
    [/pot|glas|beker/, "🫙 Pot of glas"]
  ];

  // Hoe weet je dat het klaar is?
  const KLAAR = [
    [/kip|kalkoen/, "De kip is vanbinnen helemaal wit, niet meer roze."],
    [/zalm|vis|tonijn/, "De vis valt makkelijk uit elkaar met een vork."],
    [/cake|bananenbrood|muffin|brownie|taart|baked oats|uit de oven|repen/, "Prik met een satéprikker in het midden: komt hij er droog uit, dan is het klaar."],
    [/pasta|spaghetti|noedels/, "De pasta is zacht maar heeft nog een klein beetje bite."],
    [/aardappel|krieltjes|zoete aardappel/, "Je kunt er makkelijk met een vork in prikken."],
    [/pannenkoek|crêpe|wentelteef/, "Beide kanten zijn goudbruin."],
    [/smoothie|shake|hersteldrank|limonade/, "Het is glad en er zitten geen stukjes meer in."],
    [/\bijs|sorbet|ijsje|ijslolly|bevroren/, "Het is helemaal hard bevroren."],
    [/pudding|pap\b|chia|overnight|havermout met|^havermout/, "Het is dik en romig geworden."],
    [/roerei|omelet|ei op|eieren/, "Het ei is gestold, maar nog zacht en glanzend."],
    [/soep/, "De groente is zacht en de soep is goed heet."],
    [/wrap|tosti|broodje|pita/, "Alles zit erin en de wrap of het broodje is goed dicht."]
  ];

  // Bewaren
  const BEWAAR = {
    "Ontbijt": "Het lekkerst vers. Overnight oats en chiapudding kun je 2 dagen in de koelkast bewaren.",
    "Voor het sporten": "Eet het 2 tot 3 uur voor het sporten. Een kleine snack mag 1 uur ervoor.",
    "Na het sporten": "Eet of drink het binnen een uur na het sporten, dan herstellen je spieren het best.",
    "Lunch": "Neem het mee in een bakje. Met vlees, vis of ei: binnen een paar uur opeten of koel bewaren.",
    "Avondeten": "Restjes zijn 2 dagen goed in de koelkast, in een bakje met deksel. Warm ze goed door.",
    "Snacks": "Maak een paar porties tegelijk en bewaar ze in een bakje voor school of training.",
    "Drankjes": "Het lekkerst meteen. In een afgesloten fles kun je het tot de volgende dag in de koelkast bewaren.",
    "Zoet & gezond": "Bewaar in een afgesloten bakje. Gebak blijft 3 dagen goed, ijs een paar weken in de vriezer."
  };

  // Moeilijkheid en totale tijd
  const niveau = r => { const s = T(r.stappen.join(" ")); const n = r.stappen.length;
    if (/oven|graden|crêpe|pannenkoek|omelet|wok|roerbak/.test(s) || n >= 5) return "Gemiddeld";
    if (/bak|kook/.test(s)) return n >= 4 ? "Gemiddeld" : "Makkelijk";
    return "Makkelijk"; };

  RECEPTEN.forEach(r => {
    if (r.uitleg) return;
    const alles = T(r.title + " " + r.stappen.join(" ") + " " + r.ingr.join(" "));
    const gebruikt = new Set();
    const ovenR = /oven|graden/.test(T(r.stappen.join(" ")));
    r.uitleg = r.stappen.map(st => { const s = T(st);
      if (ovenR && /^bak\b/.test(s) && !/pan|wok|aan\b|kort/.test(s) && /\d+ minuten|taart|cake|koek|muffin|brood/.test(s)) { const i = 1; if (gebruikt.has(i)) return ""; gebruikt.add(i); return HINT[i][1]; } const h = HINT.find(([re], i) => re.test(s) && !gebruikt.has(i)); if (!h) return ""; gebruikt.add(HINT.indexOf(h)); return h[1]; });
    r.spullen = [...new Set(SPUL.filter(([re, naam]) => re.test(alles) && !(naam.includes("Koekenpan") && ovenR && !/pan\b|koekenpan|wok/.test(alles))).map(x => x[1]))];
    if (/springvorm|taartvorm/.test(alles)) r.spullen.unshift("🥧 Springvorm");
    r.spullen = r.spullen.slice(0, 6);
    const oven = /oven|graden/.test(T(r.stappen.join(" "))), k = KLAAR.find(([re], i) => re.test(T(r.title)) && (i !== 2 || oven)); r.klaar = k ? k[1] : "";
    r.bewaar = BEWAAR[r.soort] || "";
    r.niveau = niveau(r);
    r.veilig = /oven|graden|bak|kook|pan|snijd|snij |mes|rasp|wok|magnetron/.test(alles);
    r.ytq = r.title.replace(/\s*\(.*?\)\s*/g, " ").trim() + " recept";
  });
})();
