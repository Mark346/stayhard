// Stay Hard – lichte habits (bijna geen moeite), meer wedstrijdroutines en kleine habits in de gewone routines.

// ---------- Lichte habits: kost bijna niets, maar helpt wel ----------
const LH = (title, text, how, theme) => ({title, text, how, theme, licht: true});
TIPS.push(
  LH("Glas water naast je bed", "Dan drink je meteen als je wakker wordt.", "Zet 's avonds een glas klaar.", "drinken"),
  LH("Eén keer diep ademhalen", "Eén rustige ademhaling maakt je al kalmer.", "Adem 4 tellen in en 6 tellen uit.", "hoofd"),
  LH("Raam even open", "Frisse lucht maakt je wakker en helder.", "Zet 's ochtends 5 minuten je raam open.", "slapen"),
  LH("Strek je armen uit bij het opstaan", "Je lichaam wordt rustig wakker.", "Rek je één keer helemaal uit in bed.", "bewegen"),
  LH("Glimlach naar jezelf in de spiegel", "Klinkt gek, maar het geeft je een goed gevoel.", "Doe het als je je tanden poetst.", "hoofd"),
  LH("Schoenen netjes neerzetten", "Een klein klusje dat orde geeft.", "Zet ze direct bij de deur als je thuiskomt.", "hoofd"),
  LH("Een slok water bij elke deur", "Zo drink je ongemerkt meer.", "Neem een slok elke keer als je van kamer wisselt.", "drinken"),
  LH("Eén stuk fruit pakken", "Gezond en kost geen moeite.", "Leg een fruitschaal op een plek waar je vaak langs loopt.", "eten"),
  LH("Dankjewel zeggen", "Een klein woord met een groot effect.", "Zeg het tegen je ouders na het eten.", "hoofd"),
  LH("Schermhelderheid omlaag in de avond", "Minder fel licht helpt je slapen.", "Zet de nachtmodus aan na 20:00.", "slapen"),
  LH("Je tas bij de deur zetten", "Dan vergeet je hem nooit.", "Zet hem daar direct na het inpakken.", "hoofd"),
  LH("Één ding opschrijven waar je blij mee bent", "Je hoofd wordt positiever.", "Schrijf het in je telefoon of een boekje voor het slapen.", "hoofd"),
  LH("Even rechtop gaan zitten", "Een rechte rug voelt beter en ziet er sterker uit.", "Check het elke keer als je gaat zitten.", "bewegen"),
  LH("Bidon bijvullen", "Een volle bidon herinnert je eraan om te drinken.", "Vul hem elke keer als hij leeg is meteen bij.", "drinken"),
  LH("Op je tenen staan bij het tandenpoetsen", "Je kuiten worden sterker zonder dat je het merkt.", "Kom op je tenen tijdens het poetsen.", "bewegen"),
  LH("Op één been staan bij het tandenpoetsen", "Gratis balanstraining.", "Een minuut per been.", "bewegen"),
  LH("Licht uit als je de kamer verlaat", "Een klein gewoontetje voor discipline.", "Elke keer, zonder na te denken.", "hoofd"),
  LH("Dekbed recht leggen", "Je eerste taak van de dag is klaar.", "Even rechttrekken is al genoeg.", "slapen"),
  LH("Kleren in de wasmand", "Opgeruimd is rustig.", "Direct als je ze uittrekt.", "hoofd"),
  LH("Muziek aan bij het opruimen", "Dan gaat het sneller en is het leuker.", "Kies één nummer en ruim op tot het klaar is.", "hoofd"),
  LH("Water drinken voor het eten", "Een glas water helpt je vertering.", "Drink een half glas als je aan tafel gaat.", "drinken"),
  LH("Groente als eerste opeten", "Dan eet je hem zeker op.", "Begin elke maaltijd met je groente.", "eten"),
  LH("Even naar buiten kijken", "Kijken in de verte rust je ogen uit.", "Kijk 20 seconden uit het raam na huiswerk.", "slapen"),
  LH("Schouders laten zakken", "Spanning in je schouders merk je vaak niet.", "Trek ze op, en laat ze rustig zakken.", "herstel"),
  LH("Kuiten rekken tegen de muur", "30 seconden is al goed voor je benen.", "Doe het als je toch even moet wachten.", "herstel"),
  LH("Een liedje lang dansen", "Bewegen en plezier tegelijk.", "Zet je favoriete nummer op en beweeg mee.", "bewegen"),
  LH("Iemand een duim geven", "Een klein gebaar maakt iemand blij.", "Geef een teamgenoot een duim na een goede actie.", "hoofd"),
  LH("Jas ophangen", "Een kleine opruimgewoonte.", "Direct als je binnenkomt.", "hoofd"),
  LH("Je doel van vandaag in je hoofd zeggen", "Kort, maar je weet waar je voor gaat.", "Zeg het als je je schoenen aantrekt.", "hoofd"),
  LH("Tanden poetsen meteen na het eten in de avond", "Dan snoep je daarna ook minder.", "Poets direct na het avondeten of het toetje.", "eten"),
  LH("Telefoon weg bij het eten", "Je eet rustiger en praat meer met je familie.", "Leg hem in een andere kamer.", "eten"),
  LH("Een appel in je tas", "Altijd een gezonde snack bij de hand.", "Leg er 's avonds een in.", "eten"),
  LH("Diep zuchten na school", "Een zucht laat de spanning van de dag los.", "Adem diep in en zucht hardop uit.", "hoofd"),
  LH("Hand op je buik bij het ademen", "Zo leer je rustig adem te halen.", "Voel je buik bewegen, 5 keer.", "hoofd"),
  LH("Gordijnen open bij het opstaan", "Daglicht zegt je lichaam dat het dag is.", "Doe ze direct open als je opstaat.", "slapen"),
  LH("Morgen klaarleggen", "Kleren en tas klaar maakt de ochtend makkelijk.", "Doe het voor je gaat douchen.", "slapen"),
  LH("Vijf keer op en neer springen", "Je bloed gaat stromen en je wordt wakker.", "Doe het na het opstaan.", "bewegen"),
  LH("Eén minuut opruimen", "Een minuut is genoeg om je bureau netjes te maken.", "Zet een timer van 1 minuut.", "hoofd"),
  LH("Iemand gedag zeggen", "Groeten maakt contact en geeft een goed gevoel.", "Groet je trainer en teamgenoten als je aankomt.", "hoofd"),
  LH("Water in plaats van sap", "Water heeft geen suiker en is het beste voor je lichaam.", "Kies vandaag één keer water in plaats van sap.", "drinken")
);

// ---------- Kleine habits erbij in de gewone routines ----------
(() => {
  const ex = {
    "Gewone schooldag": ["Glas water naast je bed meteen leegdrinken","Gordijnen open","Bed opmaken","Op één been tijdens het tandenpoetsen","Eén keer diep ademhalen voor je de deur uitgaat"],
    "Schooldag met ochtendtraining": ["Glas water direct na het opstaan","Bed recht leggen","Banaan pakken voor in de auto","Schouders even laten zakken"],
    "Vrije dag": ["Raam open","Bed opmaken","Strek je armen uit bij het opstaan","Fruit bij je ontbijt","Muziek aan bij het opruimen"],
    "Snelle ochtend": ["Glas water in één keer","Gordijnen open","Appel in je tas"],
    "Dag na de wedstrijd": ["Glas water naast je bed","Schouders laten zakken","Eén ding opschrijven waar je trots op bent"],
    "Ochtend met krachttraining": ["Glas water direct","Bed opmaken","Op je tenen bij het tandenpoetsen"],
    "Vakantieochtend": ["Raam open","Gordijnen open","Een liedje lang dansen","Fruit pakken"],
    "Gewone schoolavond": ["Telefoon weg bij het eten","Groente als eerste opeten","Tas bij de deur","Glas water naast je bed","Eén ding opschrijven waar je blij mee bent"],
    "Avond na een training": ["Bidon leeg en afwassen","Kuiten rekken tegen de muur","Kleren in de wasmand","Schoenen netjes neerzetten"],
    "Avond na een wedstrijd": ["Kleren in de wasmand","Schoenen schoonkloppen","Benen omhoog tegen de muur","Dankjewel zeggen tegen wie je bracht"],
    "Vrije avond": ["Telefoon weg bij het eten","Licht dimmen na 20:00","Morgen klaarleggen"],
    "Rustige avond voor beter slapen": ["Hand op je buik bij het ademen","Schouders laten zakken","Licht dimmen"],
    "Avond met huiswerk en training": ["Eén minuut opruimen na je huiswerk","Bidon bijvullen","Morgen klaarleggen"],
    "Zondagavond: week voorbereiden": ["Schoenen schoonmaken","Bidon schoonmaken","Kleren voor maandag klaarleggen"]
  };
  ROUTINES.forEach(r => { if (ex[r.title]) r.extra = ex[r.title]; });
})();

// ---------- Meer wedstrijdroutines ----------
const RW = (...a) => Object.assign(RT2(...a.slice(0, 5)), a[5] || {});
ROUTINES.push(
  RW("Ochtend", "Wedstrijd vroeg in de ochtend", "Aftrap rond 9:00 of 10:00", [["Aftrap − 2,5 uur","Opstaan, glas water en raam open",""],["Aftrap − 2,25 uur","Licht ontbijt","Havermout, een boterham met honing of een banaan met yoghurt. Niet te veel."],["Aftrap − 2 uur","Tas checken","Schoenen, scheenbeschermers, bidon, tenue."],["Aftrap − 1,75 uur","Even rekken en losmaken","5 minuten, rustig."],["Aftrap − 1,5 uur","Vertrekken",""],["Bij het veld","Halve banaan en een paar slokken water",""]], "Bij een vroege wedstrijd eet je licht en vroeg genoeg, zodat je niet met een volle maag speelt.", {wedstrijd:true, extra:["Bed opmaken","Focuswoord in je hoofd","Eén keer diep ademhalen in de auto"]}),
  RW("Ochtend", "Wedstrijd rond de middag", "Aftrap rond 12:00 of 13:00", [["Aftrap − 4 uur","Opstaan en water drinken",""],["Aftrap − 3,5 uur","Goed ontbijt","Havermout met banaan, volkoren brood met ei of pannenkoekjes."],["Aftrap − 2,5 uur","Rustig wandelen of rekken",""],["Aftrap − 2 uur","Tas checken met de checklist",""],["Aftrap − 1,5 uur","Kleine snack","Krentenbol of rijstwafel met banaan."],["Aftrap − 1 uur","Vertrekken",""]], "Je hebt tijd voor een goed ontbijt en kunt rustig opbouwen naar de wedstrijd.", {wedstrijd:true, extra:["Raam open","Muziek die je energie geeft","Je doel voor de wedstrijd hardop zeggen"]}),
  RW("Ochtend", "Wedstrijd in de middag", "Aftrap rond 14:00 of 15:00", [["8:30","Opstaan en water",""],["9:00","Ontbijt",""],["10:30","Even naar buiten, rustig","Wandelen, niet zwaar sporten."],["11:30","Lunch met koolhydraten","Pasta, rijst of volkoren brood. Minstens 3 uur voor de aftrap."],["Aftrap − 2 uur","Tas checken en water drinken",""],["Aftrap − 1,5 uur","Kleine snack",""],["Aftrap − 1 uur","Vertrekken",""]], "Bij een middagwedstrijd is je lunch je belangrijkste maaltijd.", {wedstrijd:true, extra:["Bed opmaken","Bidon klaarzetten","5 minuten visualiseren op de bank"]}),
  RW("Ochtend", "Uitwedstrijd met lange rit", "Als je lang in de auto zit", [["Vertrek − 1 uur","Opstaan en water drinken",""],["Vertrek − 45 min","Ontbijt",""],["Vertrek − 15 min","Tas checken, bidon en snacks mee","Banaan, krentenbol, water."],["In de auto","Rustig zitten, muziek of ogen dicht","Drink af en toe."],["Bij aankomst","Even lopen om je benen los te maken",""],["Voor de warming-up","Kleine snack als het lang geleden is",""]], "Na een lange rit zijn je benen stijf. Loop even rond voor de warming-up.", {wedstrijd:true, extra:["Kussentje mee voor in de auto","Telefoon even weg in de auto","Voeten op en neer bewegen tijdens de rit"]}),
  RW("Ochtend", "Toernooidag", "Als je meerdere wedstrijden speelt", [["Vroeg","Goed ontbijt met koolhydraten",""],["Voor vertrek","Extra eten mee","Bananen, krentenbollen, rijstwafels, water."],["Tussen wedstrijden","Elke keer drinken en een klein hapje",""],["Tussen wedstrijden","In de schaduw rusten, benen omhoog",""],["Lange pauze","Iets meer eten","Een volkoren broodje."],["Na de laatste","Uitlopen en rekken",""]], "Op een toernooidag eet je vaak een beetje, in plaats van één keer veel.", {wedstrijd:true, extra:["Petje of zonnebrand mee","Droog shirt mee","Bidon steeds bijvullen"]}),
  RW("Avond", "Avond voor een wedstrijd vroeg in de ochtend", "Als je morgen vroeg speelt", [["17:30","Avondeten met koolhydraten","Volkoren pasta of rijst met kip en groente."],["18:30","Tas helemaal inpakken","Ook je bidon klaarzetten in de koelkast."],["19:00","Rustig iets doen",""],["19:30","Je wedstrijd visualiseren","5 minuten ogen dicht."],["20:00","Douchen en schermen weg",""],["20:30","Slapen","Vroeg, want morgen moet je vroeg op."]], "Bij een vroege wedstrijd is vroeg slapen het belangrijkste.", {wedstrijd:true, extra:["Kleren klaarleggen","Wekker zetten","Glas water naast je bed"]}),
  RW("Avond", "Avond voor een toernooi", "Als je morgen meerdere wedstrijden speelt", [["18:00","Extra goed avondeten met koolhydraten",""],["18:45","Tas inpakken met extra eten en drinken","Twee bidons, bananen, krentenbollen."],["19:15","Reservekleren erbij","Extra sokken, shirt en een warme trui."],["19:45","Rustig aan, benen omhoog",""],["20:30","Schermen weg, lezen",""],["21:00","Slapen",""]], "Een toernooi is lang. Goed eten en slapen de avond ervoor is extra belangrijk.", {wedstrijd:true, extra:["Zonnebrand of petje klaarleggen","Glas water naast je bed","Focuswoord op een papiertje in je tas"]}),
  RW("Avond", "Avond voor een belangrijke wedstrijd", "Als je zenuwachtig bent", [["18:00","Avondeten met koolhydraten",""],["18:45","Tas inpakken",""],["19:15","Iets leuks doen dat je afleidt","Een film, een spelletje met je familie."],["20:00","Schrijf drie dingen op waar je goed in bent",""],["20:15","Ademhaling 4-4-4","5 minuten."],["20:30","Douchen en schermen weg",""],["21:00","Slapen","Kun je niet slapen? Rustig liggen is ook rust."]], "Zenuwen zijn normaal. Ze laten zien dat je het belangrijk vindt.", {wedstrijd:true, extra:["Telefoon buiten je kamer","Muziek die je rustig maakt","Glas water naast je bed"]}),
  RW("Avond", "Avond voor een uitwedstrijd", "Als je morgen ver weg speelt", [["18:00","Avondeten met koolhydraten",""],["18:45","Tas inpakken, extra eten voor onderweg",""],["19:00","Kijk hoe laat je weg moet",""],["19:30","Rustig iets doen",""],["20:15","Schermen weg",""],["20:45","Slapen",""]], "Bij een uitwedstrijd ben je eerder weg. Weet hoe laat, dan heb je geen stress.", {wedstrijd:true, extra:["Kussentje voor de auto klaarleggen","Snacks in je tas","Wekker zetten"]})
);
// De oude wedstrijdroutines horen ook bij de groep Wedstrijd
ROUTINES.forEach(r => { if (/wedstrijd|toernooi/i.test(r.title) && !/na een wedstrijd|na de wedstrijd/i.test(r.title)) r.wedstrijd = true; });
