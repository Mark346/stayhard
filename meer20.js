// Stay Hard – twintigste uitbreiding: heel veel recepten, rekoefeningen en strekroutines.

// ---------- Recepten ----------
RECEPTEN.push(
  // Ontbijt
  RC("Ontbijt", "Havermout met blauwe bessen en noten", "8 min", "1 persoon", ["Havermout","Melk","Handje blauwe bessen","Handje noten"], ["Kook havermout met melk 4 minuten.","Doe bessen en noten erop."], "Lange energie en antioxidanten voor herstel.", "Bevroren bessen werken ook."),
  RC("Ontbijt", "Volkoren toast met pindakaas en aardbeien", "5 min", "1 persoon", ["2 volkoren boterhammen","Pindakaas zonder suiker","Aardbeien"], ["Rooster het brood.","Smeer dun pindakaas.","Leg plakjes aardbei erop."], "Eiwitten en energie in een paar minuten.", "Ook lekker met banaan."),
  RC("Ontbijt", "Griekse yoghurt met appel en kaneel", "3 min", "1 persoon", ["Griekse yoghurt","1 appel","Kaneel","Handje havermout"], ["Snijd de appel in blokjes.","Doe alles in een kom."], "Veel eiwitten en vezels voor een sterke start.", "Rasp de appel voor een zachtere versie."),
  RC("Ontbijt", "Roerei met tomaat en volkoren brood", "10 min", "1 persoon", ["2 eieren","Tomaat","Volkoren brood","Beetje olie"], ["Bak de tomaat kort.","Roer de eieren erdoor tot ze gaar zijn.","Eet met volkoren brood."], "Eiwitten en vitamines bij je ontbijt.", "Ook lekker met spinazie."),
  RC("Ontbijt", "Smoothiebowl met banaan en bessen", "5 min", "1 persoon", ["1 bevroren banaan","Handje bevroren bessen","Scheutje melk","Handje granola"], ["Mix banaan, bessen en melk dik.","Doe het in een kom.","Strooi granola erover."], "Een frisse start vol vitamines.", "Hoe minder melk, hoe dikker."),
  RC("Ontbijt", "Volkoren wrap met kwark en fruit", "3 min", "1 persoon", ["Volkoren wrap","Kwark","Fruit naar keuze","Kaneel"], ["Smeer kwark op de wrap.","Leg fruit erop en strooi kaneel.","Rol op."], "Eiwitten en vitamines om mee te nemen.", "Snijd hem doormidden voor onderweg."),
  RC("Ontbijt", "Havermout-pannenkoekjes met kwark", "15 min", "2 personen", ["Havermout (een kopje)","2 eieren","1 banaan","Kwark erbij"], ["Mix havermout, eieren en banaan.","Bak kleine pannenkoekjes.","Eet met kwark."], "Een sterk weekendontbijt zonder suiker.", "Doe er bessen in."),
  RC("Ontbijt", "Muesli met yoghurt en peer", "3 min", "1 persoon", ["Muesli zonder suiker","Yoghurt","1 peer"], ["Doe yoghurt in een kom.","Strooi muesli erover.","Snijd de peer erop."], "Vezels en eiwitten voor een lange ochtend.", "Laat het 5 minuten staan voor zachtere muesli."),
  RC("Ontbijt", "Volkoren boterham met ei en komkommer", "10 min", "1 persoon", ["2 volkoren boterhammen","1 gekookt ei","Komkommer"], ["Kook het ei 8 minuten.","Snijd het in plakjes.","Leg ei en komkommer op het brood."], "Simpel, snel en vol eiwitten.", "Kook 's avonds al een paar eieren."),
  RC("Ontbijt", "Warme quinoa-ontbijt met fruit", "15 min", "1 persoon", ["Quinoa (een half kopje)","Melk","Banaan of appel","Kaneel"], ["Kook quinoa in melk 12 minuten.","Doe fruit en kaneel erop."], "Quinoa geeft eiwitten en lange energie.", "Maak het de avond ervoor."),
  // Voor het sporten
  RC("Voor het sporten", "Volkoren pasta met tomaat en tonijn", "20 min", "2 personen", ["Volkoren pasta","Passata","Tonijn op water","Basilicum"], ["Kook de pasta.","Warm passata met tonijn.","Meng alles."], "Energie en eiwitten de avond voor een wedstrijd.", "Een klassieker voor sporters."),
  RC("Voor het sporten", "Rijstwafels met appelstroop en banaan", "3 min", "1 persoon", ["3 rijstwafels","Dun laagje appelstroop","Banaan"], ["Smeer een dun laagje stroop.","Leg plakjes banaan erop."], "Snelle energie die licht valt.", "Een uur voor de training."),
  RC("Voor het sporten", "Aardappel met kip en wortel", "30 min", "2 personen", ["Aardappels","Kipfilet","Wortels"], ["Kook aardappels en wortels.","Bak de kip.","Serveer samen."], "Een rustige, goed verteerbare maaltijd voor een wedstrijd.", "Niet te veel saus."),
  RC("Voor het sporten", "Krentenbol met kwark", "2 min", "1 persoon", ["1 krentenbol","Beetje kwark"], ["Snijd de krentenbol open.","Smeer er kwark op."], "Snelle energie met een beetje eiwit.", "Eet hem 1 tot 2 uur voor het sporten."),
  RC("Voor het sporten", "Rijst met groente en ei", "20 min", "2 personen", ["Rijst","Doperwten, wortel, paprika","2 eieren","Sojasaus"], ["Kook de rijst.","Bak de groente.","Roer de eieren erdoor."], "Koolhydraten en eiwitten, makkelijk te verteren.", "Gebruik rijst van gisteren."),
  RC("Voor het sporten", "Havermout met banaan voor een ochtendwedstrijd", "8 min", "1 persoon", ["Havermout","Melk","Banaan","Theelepel honing"], ["Kook havermout met melk.","Doe banaan en honing erop."], "Ideaal 2 tot 3 uur voor een ochtendwedstrijd.", "Niet te veel, je wilt niet vol zitten."),
  // Na het sporten
  RC("Na het sporten", "Kwark-smoothie met aardbeien", "5 min", "1 persoon", ["Kwark","Handje aardbeien","Melk","Banaan"], ["Doe alles in de blender.","Mix tot het glad is."], "Veel eiwitten voor snel herstel.", "Drink hem binnen een uur na de training."),
  RC("Na het sporten", "Volkoren pasta met kip en broccoli", "20 min", "2 personen", ["Volkoren pasta","Kipfilet","Broccoli","Olijfolie"], ["Kook pasta en broccoli.","Bak de kip.","Meng met een beetje olie."], "Eiwitten en koolhydraten om je spieren te herstellen.", "Een beetje Parmezaan erover."),
  RC("Na het sporten", "Zalm met rijst en spinazie", "25 min", "2 personen", ["Zalmfilet","Rijst","Spinazie","Citroen"], ["Kook de rijst.","Bak de zalm.","Laat de spinazie slinken.","Knijp er citroen over."], "Omega-3 helpt je herstel.", "Twee keer per week vis."),
  RC("Na het sporten", "Wrap met kipgehakt en groente", "20 min", "2 personen", ["Volkoren wraps","Kipgehakt","Paprika en mais","Sla","Yoghurtsaus"], ["Bak het gehakt met de groente.","Vul de wraps met sla en saus."], "Mager vlees en groente voor herstel.", "Laat iedereen zelf vullen."),
  RC("Na het sporten", "Linzensalade met feta", "15 min", "2 personen", ["Gekookte linzen","Komkommer, tomaat","Feta","Olijfolie en citroen"], ["Meng alles in een kom.","Maak aan met olie en citroen."], "Plantaardige eiwitten en vezels.", "Lekker koud."),
  RC("Na het sporten", "Melk met banaan", "2 min", "1 persoon", ["Een glas melk","1 banaan"], ["Drink de melk en eet de banaan erbij."], "De makkelijkste herstelsnack.", "Ook goed in de auto na een uitwedstrijd."),
  RC("Na het sporten", "Ovenschotel met kip en zoete aardappel", "40 min", "4 personen", ["Kipfilet","Zoete aardappel","Broccoli","Kruiden en olie"], ["Snijd alles in stukken.","Leg op een bakplaat met olie en kruiden.","Bak 30 minuten op 200 graden."], "Een complete herstelmaaltijd uit één bakplaat.", "Vraag hulp bij de oven."),
  // Lunch
  RC("Lunch", "Volkoren broodje tonijnsalade", "5 min", "1 persoon", ["Volkoren broodje","Tonijn op water","Lepel yoghurt","Komkommer"], ["Meng tonijn met yoghurt.","Beleg het broodje met tonijn en komkommer."], "Veel eiwitten en weinig vet.", "Een beetje peper erbij."),
  RC("Lunch", "Groente-omelet met brood", "10 min", "1 persoon", ["2 eieren","Paprika, ui, spinazie","Volkoren brood"], ["Bak de groente.","Giet de eieren erover.","Eet met brood."], "Een warme lunch vol eiwitten.", "Ook lekker koud op brood."),
  RC("Lunch", "Rijstsalade met kip en mais", "20 min", "2 personen", ["Rijst","Kipreepjes","Mais","Paprika","Olijfolie"], ["Kook de rijst en laat afkoelen.","Bak de kip.","Meng alles."], "Energie en eiwitten om mee te nemen.", "Bewaar hem in de koelkast."),
  RC("Lunch", "Volkoren pita met hummus en falafel", "15 min", "1 persoon", ["Volkoren pita","Falafel (uit de oven)","Hummus","Sla en tomaat"], ["Bak de falafel in de oven.","Smeer hummus in de pita.","Vul met falafel en groente."], "Plantaardige eiwitten en veel smaak.", "Bak de falafel, niet frituren."),
  RC("Lunch", "Pompoensoep met brood", "30 min", "4 personen", ["Pompoen","Ui","Bouillon","Volkoren brood"], ["Snijd pompoen en ui in stukken.","Kook in bouillon 20 minuten.","Pureer en eet met brood."], "Vol vitamines voor de herfst en winter.", "Een beetje kokosmelk maakt hem romig."),
  RC("Lunch", "Wrap met ei, sla en kaas", "8 min", "1 persoon", ["Volkoren wrap","2 eieren","Sla","Plak 30+ kaas"], ["Bak de eieren.","Leg alles op de wrap.","Rol op."], "Eiwitten en energie voor de middag.", "Neem hem mee naar school."),
  RC("Lunch", "Bulgursalade met groente", "20 min", "2 personen", ["Bulgur","Komkommer, tomaat, paprika","Munt of peterselie","Citroen"], ["Kook de bulgur.","Snijd de groente.","Meng alles met citroen."], "Lange energie en veel groente.", "Ook lekker met kikkererwten."),
  // Avondeten
  RC("Avondeten", "Kip met rijst en broccoli", "25 min", "3 personen", ["Kipfilet","Rijst","Broccoli","Sojasaus"], ["Kook de rijst en de broccoli.","Bak de kip.","Serveer met een scheutje sojasaus."], "De klassieke sportmaaltijd.", "Simpel en altijd goed."),
  RC("Avondeten", "Zalm uit de oven met krieltjes", "35 min", "3 personen", ["Zalm","Krieltjes","Sperziebonen","Citroen en dille"], ["Bak de krieltjes 25 minuten in de oven.","Leg de zalm erbij voor de laatste 12 minuten.","Kook de sperziebonen."], "Gezonde vetten en energie.", "Alles uit één oven."),
  RC("Avondeten", "Volkoren spaghetti met kipgehaktballetjes", "35 min", "4 personen", ["Volkoren spaghetti","Kipgehakt","Passata","Courgette"], ["Draai balletjes en bak ze gaar.","Doe passata en courgette erbij.","Serveer met spaghetti."], "Mager vlees en veel energie.", "Maak extra balletjes voor de lunch."),
  RC("Avondeten", "Groentecurry met kip en rijst", "35 min", "4 personen", ["Kipfilet","Bloemkool, paprika, spinazie","Kokosmelk light","Milde currypasta","Rijst"], ["Bak de kip.","Doe de groente erbij.","Voeg kokosmelk en curry toe en laat 15 minuten pruttelen.","Eet met rijst."], "Veel groente en eiwitten in één pan.", "Niet te pittig maken."),
  RC("Avondeten", "Visburger met volkoren broodje", "25 min", "4 personen", ["Witvis","1 ei","Havermout","Volkoren broodjes","Sla en tomaat"], ["Prak de vis met ei en havermout.","Vorm burgers en bak ze.","Eet op een broodje met groente."], "Een gezonde burger met eiwitten.", "Lekker met yoghurtsaus."),
  RC("Avondeten", "Wokschotel met tofu", "25 min", "3 personen", ["Tofu","Wokgroente","Rijst of noedels","Sojasaus en gember"], ["Bak de tofu goudbruin.","Wok de groente.","Meng met sojasaus en eet met rijst."], "Plantaardige eiwitten en veel groente.", "Druk de tofu eerst droog."),
  RC("Avondeten", "Ovenpasta met tonijn en groente", "40 min", "4 personen", ["Volkoren pasta","Tonijn op water","Passata","Paprika en courgette","Beetje kaas"], ["Kook de pasta kort.","Meng alles in een ovenschaal.","Strooi er een beetje kaas over en bak 20 minuten."], "Eiwitten en energie, en makkelijk te maken.", "Restjes voor de lunch."),
  RC("Avondeten", "Kalkoenreepjes met couscous", "20 min", "3 personen", ["Kalkoenreepjes","Couscous","Paprika en courgette","Kruiden"], ["Maak de couscous met heet water.","Bak kalkoen en groente.","Meng alles."], "Mager vlees en snelle energie.", "Klaar in 20 minuten."),
  RC("Avondeten", "Bonenschotel met rijst", "30 min", "4 personen", ["Kidneybonen en zwarte bonen","Paprika en ui","Blik tomaten","Rijst"], ["Bak ui en paprika.","Doe bonen en tomaten erbij en laat 15 minuten pruttelen.","Eet met rijst."], "Veel eiwitten en vezels zonder vlees.", "Een schep yoghurt erop."),
  RC("Avondeten", "Aardappelpartjes met kip en salade", "40 min", "4 personen", ["Aardappels","Kipfilet","Sla, tomaat, komkommer","Olijfolie en paprikapoeder"], ["Snijd aardappels in partjes en bak 30 minuten in de oven.","Bak de kip.","Maak een salade."], "Gezonder dan friet en net zo lekker.", "Kruid met paprikapoeder."),
  // Snacks
  RC("Snacks", "Komkommer met hummus", "3 min", "1 persoon", ["Halve komkommer","Hummus"], ["Snijd de komkommer in plakjes.","Doop in de hummus."], "Fris en vol vezels.", "Ook lekker met paprika."),
  RC("Snacks", "Kwark met bessen", "2 min", "1 persoon", ["Kwark","Handje bessen"], ["Doe kwark in een bakje.","Doe bessen erop."], "Eiwitten en vitamines.", "Een snack na de training."),
  RC("Snacks", "Zelfgemaakte trail mix", "5 min", "4 porties", ["Ongezouten noten","Rozijnen","Pompoenpitten","Een paar stukjes pure chocolade (heel weinig)"], ["Meng alles.","Verdeel over zakjes."], "Energie voor onderweg.", "Neem een klein handje, niet de hele zak."),
  RC("Snacks", "Volkoren cracker met kaas en tomaat", "3 min", "1 persoon", ["2 volkoren crackers","Plak 30+ kaas","Tomaat"], ["Beleg de crackers."], "Een snelle snack met eiwitten.", "Snijd de tomaat in plakjes."),
  RC("Snacks", "Appel met kaas", "2 min", "1 persoon", ["1 appel","Een paar blokjes kaas"], ["Snijd de appel in partjes.","Eet met de kaas."], "Zoet en hartig samen.", "Een leuke combinatie."),
  RC("Snacks", "Banaan-havermout muffins", "30 min", "8 muffins", ["2 rijpe bananen","Havermout (2 kopjes)","2 eieren","Melk","Kaneel"], ["Prak de bananen en meng alles.","Verdeel over een muffinvorm.","Bak 20 minuten op 180 graden."], "Muffins zonder suiker voor in je tas.", "Doe er bessen in."),
  RC("Snacks", "Wortelsticks met yoghurtdip", "5 min", "1 persoon", ["2 wortels","Yoghurt","Kruiden"], ["Snijd de wortels in sticks.","Meng yoghurt met kruiden."], "Knapperig en gezond.", "Neem het mee naar school."),
  // Drankjes
  RC("Drankjes", "Aardbei-banaan smoothie", "5 min", "1 persoon", ["Handje aardbeien","1 banaan","Yoghurt","Melk"], ["Doe alles in de blender.","Mix tot het glad is."], "Vitamines en energie in een glas.", "Bevroren fruit maakt hem koud."),
  RC("Drankjes", "Water met watermeloen en munt", "3 min", "1 kan", ["Water","Stukjes watermeloen","Munt"], ["Doe alles in een kan.","Zet een uur koud."], "Fris en zoet zonder suiker.", "Lekker in de zomer."),
  RC("Drankjes", "Warme melk met kaneel", "5 min", "1 persoon", ["Melk","Kaneel"], ["Verwarm de melk.","Roer kaneel erdoor."], "Rustgevend voor het slapen.", "Niet te heet."),
  RC("Drankjes", "Spinazie-appel smoothie", "5 min", "1 persoon", ["Handje spinazie","1 appel","Halve banaan","Water"], ["Doe alles in de blender.","Mix goed."], "Groente drinken die je bijna niet proeft.", "Doe er een paar ijsblokjes bij."),
  RC("Drankjes", "Citroen-gember water", "3 min", "1 kan", ["Water","Schijfjes citroen","Plakjes gember"], ["Doe alles in een kan.","Laat een uur trekken."], "Fris en goed voor je weerstand.", "Ook warm lekker als thee."),
  RC("Drankjes", "Karnemelk met fruit", "3 min", "1 persoon", ["Karnemelk","Handje fruit"], ["Mix in de blender of eet het fruit erbij."], "Eiwitten en weinig vet.", "Lekker koud.")
);

// ---------- Rekoefeningen ----------
(() => {
  const pz = t => { const x = RECOVERY.find(k => k.title === t); return x ? x.poses : null; };
  const have = new Set(RECOVERY.map(x => x.title));
  const add = (title, target, reps, text, yt, like, leg = true) => { const poses = pz(like); if (poses && !have.has(title)) { have.add(title); RECOVERY.push(RK(title, target, reps, text, yt, poses, leg)); } };
  add("Kuit rekken tegen een paal", "Kuiten", "30 sec per been", "Zet je hak op de grond en je tenen tegen een paal of muur, en leun naar voren.", "calf stretch wall toes", "Kuiten rekken");
  add("Hamstring rekken op één knie", "Achterkant been", "30 sec per been", "Kniel op één knie, strek je voorste been en buig voorover.", "half kneeling hamstring", "Halve split");
  add("Bovenbeen en heup in uitval", "Voorkant bovenbeen en heup", "30 sec per kant", "Zit in een uitval op je knie en pak je achterste voet vast.", "couch stretch floor", "Bank-rek voor je bovenbeen");
  add("Lies rekken met handen op de grond", "Lies", "30 seconden", "Zet je benen wijd, handen op de grond en zak rustig.", "wide leg forward fold", "Brede lies-rek staand");
  add("Heup en bil in liggende figuur 4", "Billen en heup", "30 sec per kant", "Lig op je rug, enkel op je andere knie en trek je been naar je toe.", "supine figure four", "Figuur 4");
  add("Rug rekken in kindhouding opzij", "Zijkant rug", "30 sec per kant", "In kindhouding loop je met je handen naar één kant.", "side child pose", "Kindhouding", false);
  add("Schouders en borst met handen achter je rug", "Borst en schouders", "30 seconden", "Vouw je handen achter je rug en til ze rustig op.", "chest opener behind back", "Borst openen", false);
  add("Enkel rekken in hurkzit", "Enkels", "30 seconden", "Zit in een hurkzit en duw je knieën rustig over je tenen.", "ankle mobility squat", "Diepe hurkzit");
  add("Hamstring met been omhoog tegen de muur", "Achterkant been", "40 sec per been", "Lig in een deuropening en leg één been tegen de muur.", "doorway hamstring stretch", "Benen tegen de muur");
  add("Quadriceps staand met band", "Voorkant bovenbeen", "30 sec per been", "Sla een band om je voet en trek hem rustig naar je billen.", "standing quad band", "Bovenbeen rekken");
  add("Heupbuiger met arm opzij", "Heupbuiger en zijkant", "30 sec per kant", "In een uitval op je knie strek je je arm omhoog en buig je opzij.", "lunge side bend", "Uitvalspas met arm omhoog");
  add("Zeehondhouding", "Buik en rug", "20 seconden", "Lig op je buik en duw je bovenlichaam omhoog met gestrekte armen.", "seal stretch", "Cobra", false);
  add("Liggende lies met benen tegen de muur", "Lies", "1 minuut", "Lig met je benen tegen de muur en laat ze rustig uit elkaar zakken.", "wall straddle stretch", "Benen tegen de muur");
  add("Teen-rek staand", "Voeten", "20 sec per voet", "Zet je tenen achter je op de grond, met je wreef naar beneden.", "toe stretch standing", "Tenen-rek");
  add("Achillespees op de trap met gebogen knie", "Achillespees", "30 sec per been", "Hak over de rand van een traptree, knie iets gebogen.", "bent knee step stretch", "Achillespees-rek");
  add("Bovenrug rond maken", "Bovenrug", "20 seconden", "Strek je armen voor je uit, vouw je handen en maak je rug rond.", "upper back stretch", "Kat en koe", false);
  add("Zij-uitval met draai", "Lies en rug", "5 per kant", "In een zijwaartse uitval draai je je bovenlichaam naar je gestrekte been.", "side lunge rotation", "Zijwaartse uitval-rek");
  add("Hamstring rollen met een bal", "Achterkant been", "1 min per been", "Zit op de grond en rol een bal onder je hamstring heen en weer.", "hamstring ball roll", "Voeten rollen over een bal");
  add("Knie naar borst staand", "Billen en heup", "5 per been", "Trek staand je knie naar je borst en sta even op één been.", "standing knee hug", "Knieën naar borst");
  add("Wervelrol op je rug", "Rug", "8 keer", "Rol op je rug heen en weer met je knieën tegen je borst.", "spine rocking", "Knieën naar borst", false);
  add("Zittende kuitrek met handdoek", "Kuiten", "30 sec per been", "Zit met gestrekte benen en trek je tenen met een handdoek naar je toe.", "seated towel calf stretch", "Kuit-rek met handdoek");
  add("Spagaat-voorbereiding", "Hamstrings en heupen", "30 sec per kant", "Zit in een halve spagaat met kussens onder je voorste been. Niet doorduwen.", "split prep", "Halve split");
  add("Heup-cirkels op handen en knieën", "Heupen", "8 per kant", "Op handen en knieën draai je je knie in cirkels.", "fire hydrant circles", "Heupcirkels");
  add("Nek naar voren rekken", "Nek", "20 seconden", "Leg je handen op je achterhoofd en laat je kin rustig zakken.", "neck flexion stretch", "Nek ontspannen", false);
})();

// ---------- Strekroutines ----------
STREK_ROUTINES.push(
  SR("Ochtend 3 minuten", "Direct na het opstaan", "3 min", [["Kat en koe","6 keer"],["Neerwaartse hond","20 seconden"],["Knie naar borst staand","5 per been"]], "Kort en simpel om wakker te worden."),
  SR("Na een wedstrijd op de bank", "'s Avonds na een wedstrijd", "10 min", [["Zittende kuitrek met handdoek","30 sec per been"],["Hamstring rollen met een bal","1 min per been"],["Heup en bil in liggende figuur 4","30 sec per kant"],["Benen tegen de muur","3 minuten"]], "Herstellen terwijl je ontspant."),
  SR("Heupen helemaal open", "Twee keer per week", "12 min", [["Heup-cirkels op handen en knieën","8 per kant"],["Heupbuiger met arm opzij","30 sec per kant"],["Duif-houding","40 sec per kant"],["Kikker-rek","40 seconden"],["Blije baby","30 seconden"]], "Soepele heupen maken je sneller en beschermen je liezen."),
  SR("Hamstrings in 8 minuten", "Na sprinten of schieten", "8 min", [["Hamstring-vegen","8 per been"],["Hamstring rekken op één knie","30 sec per been"],["Hamstring met been omhoog tegen de muur","40 sec per been"],["Hamstring rollen met een bal","1 min per been"]], "Soepele hamstrings voorkomen de meest voorkomende voetbalblessure."),
  SR("Rug en houding", "Na een dag school", "8 min", [["Bovenrug rond maken","20 seconden"],["Schouders en borst met handen achter je rug","30 seconden"],["Zeehondhouding","20 seconden"],["Rug rekken in kindhouding opzij","30 sec per kant"],["Wervelrol op je rug","8 keer"]], "Een goede houding begint met een soepele rug."),
  SR("Voeten en enkels", "Na veel lopen", "6 min", [["Enkels rollen","10 per kant"],["Teen-rek staand","20 sec per voet"],["Enkel rekken in hurkzit","30 seconden"],["Voeten rollen over een bal","1 min per voet"]], "Sterke, soepele voeten zijn de basis van elke actie."),
  SR("Spagaat-training", "Drie keer per week, rustig opbouwen", "12 min", [["Hamstring-vegen","8 per been"],["Knielende heupbuiger-rek","40 sec per kant"],["Spagaat-voorbereiding","30 sec per kant"],["Liggende lies met benen tegen de muur","1 minuut"]], "Lenigheid bouw je langzaam op. Nooit doorduwen bij pijn."),
  SR("Kuiten na kunstgras", "Na een training op kunstgras", "6 min", [["Kuit rekken tegen een paal","30 sec per been"],["Achillespees op de trap met gebogen knie","30 sec per been"],["Zittende kuitrek met handdoek","30 sec per been"]], "Kunstgras is zwaar voor je kuiten en achillespees."),
  SR("Hele lichaam in 20 minuten", "Op een rustdag", "20 min", [["Kat en koe","10 keer"],["Neerwaartse hond met voeten trappen","10 per kant"],["Bovenbeen en heup in uitval","30 sec per kant"],["Duif-houding","40 sec per kant"],["Zij-uitval met draai","5 per kant"],["Lies rekken met handen op de grond","30 seconden"],["Heup en bil in liggende figuur 4","30 sec per kant"],["Zeehondhouding","20 seconden"],["Benen tegen de muur","3 minuten"]], "De complete rustdag-routine voor je hele lichaam."),
  SR("Even ontspannen", "Als je gestrest of moe bent", "5 min", [["Buikademhaling","1 minuut"],["Kindhouding","1 minuut"],["Liggend draaien","30 sec per kant"],["Benen tegen de muur","2 minuten"]], "Rust voor je lichaam én je hoofd."),
  SR("Warm worden thuis", "Voor een thuistraining", "5 min", [["Heupcirkels","10 per kant"],["Knie naar borst staand","5 per been"],["Hamstring-zwaaien staand","10 per been"],["Lage uitval met draai","5 per kant"]], "Bewegend opwarmen voor je aan een training begint."),
  SR("Na krachttraining benen", "Na een benentraining", "8 min", [["Bovenbeen rekken","30 sec per been"],["Achterkant been rekken","30 sec per been"],["Figuur 4","30 sec per kant"],["Lies rekken","30 seconden"],["Kuiten rekken","30 sec per been"]], "Na kracht wil je je spieren weer lang maken."),
  SR("Na krachttraining bovenlichaam", "Na push-ups en roeien", "6 min", [["Borst rekken in een deuropening","30 seconden"],["Schouder rekken","30 sec per arm"],["Schouder rekken achter je rug","20 sec per arm"],["Polsen rekken","20 sec per kant"]], "Ontspan je armen, borst en schouders."),
  SR("Voor het slapen in 4 minuten", "In bed", "4 min", [["Knieën naar borst","30 seconden"],["Heup draaien liggend","6 per kant"],["Buikademhaling","2 minuten"]], "Kort en rustig, zodat je makkelijk in slaap valt.")
);

// ---------- Opruimen ----------
(() => {
  const dedupe = arr => { const seen = new Set(), keep = arr.filter(x => { if (seen.has(x.title)) return false; seen.add(x.title); return true; }); arr.length = 0; arr.push(...keep); };
  [RECEPTEN, RECOVERY, STREK_ROUTINES].forEach(dedupe);
})();
