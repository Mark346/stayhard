// ================= Trucjes (stap-voor-stap plaatjes, van bovenaf gezien) =================
// Elk plaatje: L/R = linker/rechtervoet [x, y, draaiing], ball = [x, y], act = voet die beweegt ("L"/"R"),
// fa = pijl van de voet, ba = pijl van de bal, cone = tegenstander/pion. Vooruit = naar boven. Uitleg voor rechtsbenigen.
const TRICKS = [
  {title:"De schaar", video:"y1UJrlWu7J8", level:"Makkelijk", tip:"Maak de beweging groot en laat je schouder echt meezakken, anders trapt de verdediger er niet in.", yt:"schaar leren voetbal stepover tutorial",
   frames:[
    {L:[40,74,0], R:[60,74,0], ball:[50,48], cone:[50,12], t:"Dribbel rustig met de bal vlak voor je."},
    {L:[40,72,0], R:[54,50,-30], act:"R", ball:[50,46], cone:[50,12], fa:"M60 68 Q42 54 54 42 Q64 38 70 46", t:"Draai je rechtervoet van binnen naar buiten óm de bal, zonder hem te raken."},
    {L:[40,70,0], R:[72,54,20], act:"R", ball:[50,46], cone:[50,12], t:"Zet rechts naast de bal en laat je schouder naar rechts zakken."},
    {L:[40,50,-20], R:[70,62,10], act:"L", ball:[26,32], cone:[50,12], ba:"M46 44 L28 34", t:"Neem de bal met de buitenkant van links mee en versnel naar links."}]},
  {title:"Cruijff-draai", video:"dnb0BBgebxs", level:"Gemiddeld", tip:"Doe echt alsof je gaat trappen. Hoe beter de schijnbeweging, hoe meer ruimte je krijgt.", yt:"cruijff draai leren tutorial",
   frames:[
    {L:[42,56,0], R:[62,78,10], act:"R", ball:[56,50], cone:[50,12], fa:"M62 86 L62 80", t:"Zet links naast de bal en zwaai rechts naar achteren, alsof je gaat trappen."},
    {L:[42,56,0], R:[60,52,-70], act:"R", ball:[30,68], cone:[50,12], ba:"M56 52 Q50 62 32 66", t:"Tik de bal met de binnenkant van rechts schuin achter je linkerbeen langs."},
    {L:[40,62,-120], R:[54,56,-100], ball:[30,70], cone:[50,12], t:"Draai je lichaam mee naar links."},
    {L:[40,66,-150], R:[30,62,-160], act:"R", ball:[22,88], cone:[50,12], ba:"M30 72 L23 86", t:"Neem de bal mee en ga de andere kant op."}]},
  {title:"Sleepbal", video:"YpuAC0whCY4", level:"Makkelijk", tip:"Houd je zool licht op de bal; druk je te hard, dan rolt hij niet.", yt:"pull back voetbal tutorial",
   frames:[
    {L:[40,74,0], R:[56,52,0], act:"R", ball:[56,46], cone:[56,12], t:"Zet je rechterzool bovenop de bal."},
    {L:[40,76,0], R:[56,66,0], act:"R", ball:[56,60], cone:[56,12], fa:"M56 52 L56 64", ba:"M56 46 L56 58", t:"Trek de bal met je zool naar je toe."},
    {L:[40,74,0], R:[50,66,70], act:"R", ball:[80,60], cone:[56,12], ba:"M58 60 L78 60", t:"Duw hem met de binnenkant opzij en versnel die kant op."}]},
  {title:"Binnenkant-kap", video:"96WT8S9Us4w", level:"Makkelijk", tip:"Zak door je knieën bij het kappen, dan kun je sneller weg.", yt:"binnenkant kap voetbal leren",
   frames:[
    {L:[36,76,20], R:[54,74,20], ball:[62,54], ba:"M50 70 L60 56", t:"Dribbel schuin naar rechts."},
    {L:[46,68,10], R:[68,48,-70], act:"R", ball:[60,50], fa:"M70 62 Q74 52 68 48", t:"Zet de binnenkant van rechts vóór de bal."},
    {L:[44,66,0], R:[62,50,-70], act:"R", ball:[30,44], ba:"M58 50 L32 44", t:"Kap de bal scherp naar links en ga weg."}]},
  {title:"Buitenkant-kap", video:"AlMwNGOmkwA", level:"Gemiddeld", tip:"Leun met je bovenlijf mee de nieuwe kant op; dan kom je sneller los.", yt:"buitenkant kap voetbal leren",
   frames:[
    {L:[46,74,-20], R:[64,76,-20], ball:[40,54], ba:"M50 70 L42 56", t:"Dribbel schuin naar links."},
    {L:[54,66,-10], R:[32,50,40], act:"R", ball:[40,50], fa:"M48 64 Q30 60 32 52", t:"Zet de buitenkant van rechts vóór de bal."},
    {L:[54,64,0], R:[38,50,40], act:"R", ball:[70,42], ba:"M42 50 L68 42", t:"Kap de bal naar rechts en versnel."}]},
  {title:"Elastico", video:"59HL5PzEij8", level:"Moeilijk", tip:"Begin langzaam zonder tegenstander. De snelheid komt vanzelf als de beweging goed zit.", yt:"elastico leren voetbal langzaam",
   frames:[
    {L:[38,74,0], R:[58,62,0], act:"R", ball:[50,48], cone:[50,12], t:"De bal ligt voor je rechtervoet."},
    {L:[38,74,0], R:[64,52,20], act:"R", ball:[64,46], cone:[50,12], ba:"M52 48 L62 46", fa:"M58 60 L63 54", t:"Duw de bal een klein stukje naar rechts met de buitenkant."},
    {L:[38,72,0], R:[52,48,-40], act:"R", ball:[32,40], cone:[50,12], ba:"M62 46 L34 40", fa:"M64 50 Q62 42 52 46", t:"Draai je voet snel om en haal hem met de binnenkant naar links."},
    {L:[34,52,0], R:[50,62,0], act:"L", ball:[28,24], cone:[50,12], ba:"M32 40 L28 26", t:"Versnel langs de linkerkant."}]},
  {title:"La Croqueta", video:"3OCt_0L1Leg", level:"Gemiddeld", tip:"Twee snelle tikjes vlak na elkaar. De bal gaat van voet naar voet, niet ver weg.", yt:"la croqueta leren iniesta tutorial",
   frames:[
    {L:[38,66,0], R:[62,64,0], act:"R", ball:[58,50], cone:[50,22], t:"Dribbel op de tegenstander af."},
    {L:[38,66,0], R:[60,56,-80], act:"R", ball:[42,50], cone:[50,22], ba:"M58 50 L44 50", t:"Tik de bal met de binnenkant van rechts naar je linkervoet."},
    {L:[36,54,-80], R:[58,64,0], act:"L", ball:[28,22], cone:[50,22], ba:"M42 48 L29 24", t:"Neem hem met de binnenkant van links meteen mee, langs de tegenstander."}]},
  {title:"De roulette", video:"RmmWrETzWfA", level:"Moeilijk", tip:"Blijf laag en houd de bal steeds onder je zolen. Je lichaam schermt de bal af tijdens het draaien.", yt:"roulette zidane leren voetbal",
   frames:[
    {L:[38,70,0], R:[52,48,0], act:"R", ball:[52,44], cone:[52,12], t:"Zet je rechterzool op de bal."},
    {L:[42,70,40], R:[54,62,0], act:"R", ball:[54,58], cone:[52,12], ba:"M52 44 L54 56", t:"Trek de bal terug en draai je lichaam linksom."},
    {L:[44,62,180], R:[62,74,160], act:"L", ball:[42,60], cone:[52,12], ba:"M54 58 L44 60", t:"Zet je linkerzool op de bal en trek hem verder mee terwijl je doordraait."},
    {L:[34,60,-30], R:[48,68,-20], ball:[28,36], cone:[52,12], ba:"M42 58 Q32 50 29 38", t:"Je bent rond: neem de bal mee en ga."}]},
  {title:"Matthews-beweging", video:"1ZQOAKoPEzQ", level:"Gemiddeld", tip:"De eerste tik is klein, de tweede is snel en groot. Dat verschil maakt hem sterk.", yt:"matthews move voetbal tutorial",
   frames:[
    {L:[38,68,0], R:[58,66,0], act:"R", ball:[54,52], cone:[54,14], t:"De bal ligt bij je rechtervoet."},
    {L:[38,68,-10], R:[46,52,-60], act:"R", ball:[46,52], cone:[54,14], ba:"M54 52 L48 52", t:"Tik de bal met de binnenkant een klein stukje naar links en leun mee."},
    {L:[40,66,10], R:[60,50,40], act:"R", ball:[74,32], cone:[54,14], ba:"M48 52 L72 34", t:"Duw hem meteen met de buitenkant naar rechts en sprint weg."}]},
  {title:"Het hakje", video:"6w7os7tMxn0", level:"Gemiddeld", tip:"Kijk eerst of er iemand achter je staat voordat je een hakje geeft.", yt:"hakje leren voetbal backheel",
   frames:[
    {L:[40,62,0], R:[56,76,0], ball:[54,56], t:"Laat de bal naast je standbeen liggen."},
    {L:[40,62,0], R:[54,50,0], act:"R", ball:[54,56], fa:"M56 74 Q62 62 54 52", t:"Stap met rechts over de bal heen."},
    {L:[40,62,0], R:[54,50,0], act:"R", ball:[54,86], ba:"M54 60 L54 84", t:"Tik de bal met je hak naar achteren, naar een teamgenoot."}]},
  {title:"V-beweging", video:"KI2xbEvlVwg", level:"Makkelijk", tip:"De beweging heeft de vorm van een V: eerst terug, dan schuin vooruit.", yt:"v move voetbal drag push tutorial",
   frames:[
    {L:[40,70,0], R:[56,50,0], act:"R", ball:[56,46], cone:[56,12], t:"Zet je zool op de bal."},
    {L:[40,72,0], R:[56,66,0], act:"R", ball:[56,62], cone:[56,12], ba:"M56 46 L56 60", t:"Trek de bal terug."},
    {L:[40,70,0], R:[50,62,-50], act:"R", ball:[34,38], cone:[56,12], ba:"M56 62 L36 40", t:"Duw hem met de binnenkant schuin vooruit. Samen is het een V."}]},
  {title:"Zoolrol", video:"KNGvSXt-FdA", level:"Makkelijk", tip:"Rol de bal onder je hele zool door, van je tenen naar de zijkant.", yt:"zool rol voetbal sole roll",
   frames:[
    {L:[36,66,0], R:[58,52,0], act:"R", ball:[58,48], cone:[50,12], t:"Zet je rechterzool op de bal."},
    {L:[34,66,0], R:[44,52,0], act:"R", ball:[42,50], cone:[50,12], ba:"M58 48 L44 50", fa:"M58 54 L46 54", t:"Rol de bal zijwaarts naar links onder je zool."},
    {L:[30,52,0], R:[46,62,0], act:"L", ball:[32,28], cone:[50,12], ba:"M40 48 L33 30", t:"Neem hem met links mee vooruit."}]},
  {title:"Stop en ga", video:"_0sfcSvljlQ", level:"Makkelijk", tip:"De verdediger stopt ook als jij stopt. Jij weet wanneer je weer gaat, hij niet.", yt:"stop and go dribble voetbal",
   frames:[
    {L:[40,68,0], R:[56,58,0], ball:[52,40], ba:"M52 70 L52 42", t:"Dribbel snel vooruit."},
    {L:[40,58,0], R:[52,42,0], act:"R", ball:[52,40], t:"Stop de bal ineens met je zool en sta stil."},
    {L:[42,44,0], R:[56,34,0], act:"R", ball:[52,14], ba:"M52 38 L52 16", t:"Versnel meteen weer zodra de verdediger ook stopt."}]},
  {title:"Dubbele schaar", video:"frw9Q-DCk8U", level:"Moeilijk", tip:"Oefen eerst de gewone schaar met allebei je voeten voordat je ze aan elkaar plakt.", yt:"double stepover tutorial voetbal",
   frames:[
    {L:[40,72,0], R:[54,50,-30], act:"R", ball:[50,46], cone:[50,12], fa:"M60 68 Q42 54 54 42 Q64 38 70 46", t:"Maak een schaar met rechts."},
    {L:[46,50,30], R:[70,58,10], act:"L", ball:[50,46], cone:[50,12], fa:"M40 68 Q58 54 46 42 Q36 38 30 46", t:"Maak meteen een schaar met links."},
    {L:[30,58,-10], R:[60,50,20], act:"R", ball:[74,30], cone:[50,12], ba:"M52 46 L72 32", t:"Neem de bal met de buitenkant van rechts mee naar rechts."}]},
  {title:"Buitenkant-haak", video:"tptS44T2_Lc", level:"Gemiddeld", tip:"Draai op je standbeen en houd de bal dicht bij je voet.", yt:"outside hook turn voetbal",
   frames:[
    {L:[42,66,0], R:[60,64,0], act:"R", ball:[60,48], cone:[60,12], t:"Dribbel vooruit met de bal aan rechts."},
    {L:[44,62,30], R:[66,50,60], act:"R", ball:[62,46], cone:[60,12], fa:"M62 60 Q72 52 68 46", t:"Haak de buitenkant van rechts om de bal."},
    {L:[46,60,120], R:[68,56,140], act:"R", ball:[74,76], cone:[60,12], ba:"M64 48 Q76 60 74 74", t:"Draai rechtsom en neem de bal mee terug."}]},
  {title:"Schouderschijn", video:"KGihE2Zm7ho", level:"Makkelijk", tip:"Je raakt de bal pas na de schijnbeweging. Eerst je lichaam, dan de bal.", yt:"body feint voetbal tutorial",
   frames:[
    {L:[40,68,0], R:[58,68,0], ball:[50,48], cone:[50,14], t:"Dribbel rustig op de tegenstander af."},
    {L:[30,62,-20], R:[56,70,0], act:"L", ball:[50,48], cone:[50,14], fa:"M40 66 L30 60", t:"Stap groot naar links en laat je schouder links zakken."},
    {L:[34,62,0], R:[60,52,30], act:"R", ball:[72,28], cone:[50,14], ba:"M52 46 L70 30", t:"Neem de bal met de buitenkant van rechts naar rechts en ga."}]}
];

// ================= Product van de dag =================
// Geen merken: alleen soorten producten. shop: "bol" (sport) of "ah" (eten).
const PRODUCTS = [
  {kind:"Voetbal", name:"Pionnen-set", what:"Een set kleine plastic pionnen of hoedjes.", why:"Hiermee zet je overal een dribbelparcours, slalom of poortjes neer.", tip:"Zet er 5 op een rij en doe de slalom uit de oefeningen.", q:"pionnen set voetbal", shop:"bol"},
  {kind:"Gezond eten", name:"Havermout", what:"Gewalste haver voor je ontbijt.", why:"Geeft lang energie, zodat je niet halverwege de ochtend al honger hebt.", tip:"Maak pap met melk en doe er een banaan in.", q:"havermout", shop:"ah"},
  {kind:"Training", name:"Springtouw", what:"Een simpel springtouw.", why:"Touwtjespringen traint snelle voeten, conditie en ritme.", tip:"Begin met 3 keer 1 minuut springen.", q:"springtouw", shop:"bol"},
  {kind:"Gezond eten", name:"Bananen", what:"Het makkelijkste fruit om mee te nemen.", why:"Snelle energie voor de training en makkelijk te verteren.", tip:"Eet er een een uur voor de training.", q:"bananen", shop:"ah"},
  {kind:"Voetbal", name:"Kaatsnet (rebounder)", what:"Een schuin net dat de bal terugkaatst.", why:"Je kunt alleen passen, aannemen en kaatsen oefenen, ook zonder muur.", tip:"Oefen 'De eerste aanname' uit de Dagles ermee.", q:"rebounder voetbal kaatsnet", shop:"bol"},
  {kind:"Gezond eten", name:"Kwark of yoghurt", what:"Zuivel met veel eiwit.", why:"Eiwit helpt je spieren herstellen na het sporten.", tip:"Neem een bakje met fruit na de training.", q:"kwark", shop:"ah"},
  {kind:"Herstel", name:"Foamroller", what:"Een harde rol om je spieren los te rollen.", why:"Helpt stijve spieren ontspannen na training of wedstrijd.", tip:"Rol rustig over je kuiten en bovenbenen, 1 minuut per spier. Niet over je knieën.", q:"foam roller", shop:"bol"},
  {kind:"Gezond eten", name:"Ongezouten noten", what:"Een mix van noten zonder zout.", why:"Goede vetten en energie die lang meegaat.", tip:"Een handje als tussendoortje in plaats van chips.", q:"ongezouten noten", shop:"ah"},
  {kind:"Voetbal", name:"Mini-doeltjes", what:"Kleine opvouwbare goaltjes.", why:"Voor partijtjes en schietoefeningen in de tuin of op het pleintje.", tip:"Oefen 'Schieten op de hoeken' met twee doeltjes.", q:"pop up goals voetbal", shop:"bol"},
  {kind:"Gezond eten", name:"Volkoren pasta", what:"Pasta van volkoren meel.", why:"Goede koolhydraten: brandstof voor een wedstrijd.", tip:"Lekker als avondeten op de dag voor een wedstrijd.", q:"volkoren pasta", shop:"ah"},
  {kind:"Training", name:"Loopladder", what:"Een platte ladder om op de grond te leggen.", why:"Traint snelle voetjes en coördinatie.", tip:"Doe 'Snelle voetjes ladder' uit de oefeningen.", q:"loopladder agility", shop:"bol"},
  {kind:"Gezond eten", name:"Eieren", what:"Simpel en vol eiwit.", why:"Goed voor je spieren en ze houden je lang verzadigd.", tip:"Een gekookt ei bij je ontbijt of lunch.", q:"eieren", shop:"ah"},
  {kind:"Voetbal", name:"Bidon van 1 liter", what:"Een grote drinkfles.", why:"Zo drink je genoeg tijdens training en op school.", tip:"Vul hem 's ochtends en probeer hem voor de avond leeg te hebben.", q:"bidon 1 liter", shop:"bol"},
  {kind:"Gezond eten", name:"Diepvriesfruit", what:"Bevroren bessen of mango.", why:"Altijd fruit in huis, vol vitamines.", tip:"Mix het met yoghurt en melk tot een smoothie.", q:"diepvries fruit", shop:"ah"},
  {kind:"Voetbal", name:"Scheenbeschermers met enkelstuk", what:"Beschermers die ook je enkels beschermen.", why:"Minder kans op pijnlijke trappen tegen je schenen en enkels.", tip:"Kies de goede maat: ze moeten van net onder je knie tot boven je enkel lopen.", q:"scheenbeschermers enkel junior", shop:"bol"},
  {kind:"Gezond eten", name:"Snoeptomaatjes en komkommer", what:"Groente die je zo kunt eten.", why:"Makkelijk om meer groente binnen te krijgen.", tip:"Neem een bakje mee naar school.", q:"snoeptomaatjes", shop:"ah"},
  {kind:"Training", name:"Mini-weerstandsband", what:"Een licht elastiek om je benen.", why:"Maakt je heupen en billen sterker voor duels. Kies een lichte band.", tip:"Doe 10 zijstappen per kant met de band om je knieën, als warming-up.", q:"mini band licht", shop:"bol"},
  {kind:"Gezond eten", name:"Pindakaas van 100% pinda's", what:"Pindakaas zonder toegevoegde suiker.", why:"Eiwit en goede vetten op je boterham.", tip:"Op volkoren brood met plakjes banaan.", q:"pindakaas 100% pinda", shop:"ah"},
  {kind:"Voetbal", name:"Techniekbal (maat 1)", what:"Een hele kleine voetbal.", why:"Met een kleine bal moet je precies werken; daarna voelt een gewone bal makkelijk.", tip:"Probeer ermee hoog te houden.", q:"voetbal maat 1 skills", shop:"bol"},
  {kind:"Gezond eten", name:"Volkoren krentenbollen", what:"Brood met rozijnen.", why:"Lekker en goede energie voor na school of voor de training.", tip:"Neem er een mee in je sporttas.", q:"volkoren krentenbollen", shop:"ah"},
  {kind:"Herstel", name:"Herbruikbaar coldpack", what:"Een koelzakje dat je in de vriezer bewaart.", why:"Handig bij een stoot of trap tegen je been.", tip:"Altijd in een doek, nooit direct op je huid, en maximaal 10 minuten.", q:"coldpack herbruikbaar", shop:"bol"},
  {kind:"Gezond eten", name:"Zilvervliesrijst", what:"Bruine rijst.", why:"Meer vezels en langer energie dan witte rijst.", tip:"Lekker met kip en groente na een training.", q:"zilvervliesrijst", shop:"ah"},
  {kind:"Voetbal", name:"Balpomp met drukmeter", what:"Een pomp die laat zien hoe hard de bal is.", why:"Een bal met de goede druk is makkelijker te controleren.", tip:"Kijk op de bal welke druk erop staat en pomp hem daarop op.", q:"balpomp met drukmeter", shop:"bol"},
  {kind:"Gezond eten", name:"Sinaasappels", what:"Fruit vol vitamine C.", why:"Goed voor je weerstand in de winter.", tip:"Partjes in de rust van een wedstrijd zijn lekker fris.", q:"sinaasappels", shop:"ah"},
  {kind:"Herstel", name:"Massagebal", what:"Een kleine harde bal om spieren los te rollen.", why:"Fijn voor je voetzolen en kuiten na veel rennen.", tip:"Rol 1 minuut met je voetzool over de bal na de training.", q:"massagebal", shop:"bol"},
  {kind:"Gezond eten", name:"Hummus", what:"Een dip van kikkererwten.", why:"Bevat eiwit en vezels en maakt groente lekkerder.", tip:"Dip wortels of komkommer erin.", q:"hummus", shop:"ah"},
  {kind:"Voetbal", name:"Sporttas met schoenenvak", what:"Een tas waarin je vieze schoenen apart zitten.", why:"Zo vergeet je niets en blijft de rest schoon.", tip:"Pak hem de avond voor de wedstrijd al in.", q:"sporttas schoenenvak junior", shop:"bol"},
  {kind:"Gezond eten", name:"Melk", what:"Een glas melk of karnemelk.", why:"Eiwit en vocht in één: goed na het sporten.", tip:"Drink een glas binnen een uur na de training.", q:"halfvolle melk", shop:"ah"},
  {kind:"Training", name:"Hoedjes in kleuren", what:"Platte markeringen in verschillende kleuren.", why:"Je kunt reactie-oefeningen doen: iemand roept een kleur en jij sprint ernaartoe.", tip:"Leg 4 kleuren in een vierkant en laat iemand kleuren roepen.", q:"markeringshoedjes", shop:"bol"},
  {kind:"Gezond eten", name:"Rozijnen", what:"Gedroogde druiven.", why:"Snelle energie in een klein doosje.", tip:"Een doosje in je tas voor als je honger hebt.", q:"rozijnen", shop:"ah"}
];
const shopUrl = p => p.shop === "ah" ? "https://www.ah.nl/zoeken?query=" + encodeURIComponent(p.q) : "https://www.bol.com/nl/nl/s/?searchtext=" + encodeURIComponent(p.q);

// ================= Vaste week: trainingen, gym en wedstrijd =================
// Dag 0 = maandag ... 6 = zondag. type: "training", "gym", "wedstrijd" of "anders". Aan te passen in de app (Planner → Voorbeelddag).
const SCHED_DEFAULT = {
  0: [{type:"training", start:"08:30", hours:1}, {type:"training", start:"18:30", hours:1.5}],
  3: [{type:"training", start:"08:30", hours:1}, {type:"gym", start:"11:00", hours:1}, {type:"training", start:"18:30", hours:1.5}],
  1: [{type:"kracht", start:"16:30", hours:0.5}],
  5: [{type:"wedstrijd", start:"10:00", hours:1.5}],
  6: [{type:"kracht", start:"11:00", hours:0.5}]
};
const ACT_TYPES = {training:"Training", kracht:"Krachttraining", gym:"Gym op school", wedstrijd:"Wedstrijd", anders:"Anders"};
// Krachttraining met eigen lichaamsgewicht: elke keer 5 oefeningen uit deze lijst (wisselt per dag).
const STRENGTH = ["Squats","Push-ups","Plank","Lunges","Bruggetje","Zijplank","Superman","Wall sit","Op je tenen","Sumo squat","Achterwaartse lunge","Dead bug","Schoudertikken","Zijwaartse lunge","Op één been buigen"];

// Extra trucjes (alleen tekst-stappen; de beelden komen uit het filmpje).
TRICKS.push(
  {title:"Ronaldo-chop", video:"QX6iuv9k-dw", level:"Gemiddeld", tip:"Leun naar voren als je de bal achter je standbeen speelt, dan blijf je in balans.", yt:"ronaldo chop tutorial",
   steps:["Dribbel schuin vooruit met de bal aan je rechtervoet.","Zet je linkervoet net voorbij de bal neer.","Speel de bal met de binnenkant van rechts achter je linkerbeen langs naar links.","Draai mee en versnel de andere kant op."]},
  {title:"Rainbow flick", video:"zzFOco6x5VU", level:"Moeilijk", tip:"Oefen eerst stilstaand, daarna pas lopend. Het gaat om de klemmende beweging, niet om kracht.", yt:"rainbow flick tutorial",
   steps:["Zet de bal tussen je voeten.","Rol de bal met de zool van je rechtervoet tegen de hak van je linkervoet omhoog.","Klem de bal tussen je linkerhak en rechtertenen.","Wip de bal met je linkerhak over je hoofd naar voren."]},
  {title:"Binnenkant-haak", video:"toT_Venh6wc", level:"Makkelijk", tip:"Houd de bal dicht bij je voet tijdens het draaien.", yt:"inside hook turn tutorial",
   steps:["Dribbel vooruit.","Zet de binnenkant van je voet vóór de bal.","Haak de bal terug terwijl je op je standbeen draait.","Neem de bal mee de andere kant op."]},
  {title:"Schaar-draai", video:"Z2XcxeCE-1M", level:"Gemiddeld", tip:"Maak de schaar groot zodat de verdediger denkt dat je doorloopt.", yt:"step over turn tutorial",
   steps:["Dribbel vooruit.","Stap met rechts van binnen naar buiten over de bal.","Draai je lichaam rond op je rechtervoet.","Neem de bal met de buitenkant van links mee terug."]},
  {title:"Schijnschot", video:"U4IFrv7ZqvM", level:"Makkelijk", tip:"Zwaai je been echt naar achteren alsof je hard gaat schieten. Hoe echter, hoe beter.", yt:"fake shot tutorial kids",
   steps:["Dribbel richting doel.","Zwaai je schietbeen naar achteren alsof je gaat schieten.","Stop vlak voor de bal en kap hem met de binnenkant opzij.","Schiet of dribbel verder in de ruimte."]},
  {title:"Panna (door de benen)", video:"mVxzTF8QTEs", level:"Gemiddeld", tip:"Een panna lukt als de verdediger zijn benen spreidt. Wacht op dat moment.", yt:"nutmeg tutorial",
   steps:["Dribbel op de verdediger af.","Kijk naar zijn benen: staan ze uit elkaar?","Doe een kleine schijnbeweging zodat hij zijn benen verder spreidt.","Tik de bal tussen zijn benen door en loop om hem heen."]},
  {title:"L-beweging", video:"ZPDqejeEZD4", level:"Makkelijk", tip:"Trek de bal ver genoeg terug zodat hij achter je standbeen langs kan.", yt:"L turn tutorial soccer",
   steps:["Zet je zool op de bal.","Trek de bal naar je toe.","Speel hem met de binnenkant van dezelfde voet achter je standbeen langs.","Neem hem mee met je andere voet. Samen maakt het een L."]},
  {title:"Rivelino", video:"2e7FkmdS5go", level:"Gemiddeld", tip:"Het is een omgekeerde schaar: je voet gaat van buiten naar binnen.", yt:"rivelino reverse stepover",
   steps:["Dribbel vooruit met de bal aan rechts.","Doe alsof je de bal met je binnenkant naar links speelt.","Stap op het laatste moment van buiten naar binnen óver de bal.","Neem de bal met de buitenkant van rechts mee naar rechts."]},
  {title:"Hak-kap", video:"5Fbb8AXXMdw", level:"Gemiddeld", tip:"Oefen eerst langzaam: teen raakt de bal, daarna de hak.", yt:"toe heel chop tutorial",
   steps:["Dribbel met de bal aan je rechtervoet.","Tik de bal met je tenen een stukje naar achteren.","Kap hem meteen met je hak schuin achter je standbeen langs.","Draai mee en neem de bal mee."]},
  {title:"Teen-sleep", video:"wS9yjTm-zJI", level:"Makkelijk", tip:"Gebruik de punt van je schoen en houd de bal dicht bij je.", yt:"toe drag tutorial",
   steps:["Zet de punt van je voet op de bal.","Sleep de bal naar binnen, voor je standbeen langs.","Duw hem met de buitenkant van je andere voet weg.","Versnel die kant op."]},
  {title:"Puskas-beweging", video:"C4Q182W9ILI", level:"Gemiddeld", tip:"Doe eerst echt alsof je gaat schieten; daarna trek je de bal weg.", yt:"puskas skill tutorial",
   steps:["Kom op de bal af alsof je gaat schieten.","Zet in plaats daarvan je zool op de bal.","Trek de bal terug.","Duw hem met de binnenkant opzij en schiet of pass."]},
  {title:"Rabona", video:"dIBYkQZFD94", level:"Moeilijk", tip:"Begin met een zachte pass. Kracht komt later.", yt:"rabona tutorial",
   steps:["Leg de bal naast je linkervoet.","Zet je linkervoet iets voorbij de bal.","Zwaai je rechterbeen achter je linkerbeen langs.","Trap de bal met je rechtervoet van achter je standbeen."]},
  {title:"McGeady-draai", video:"0RRiL0JFGnk", level:"Gemiddeld", tip:"Draai op het moment dat je de bal stopt, niet erna.", yt:"mcgeady spin tutorial",
   steps:["Dribbel snel vooruit.","Stop de bal met je zool.","Draai op dezelfde voet om je as, met je rug naar de verdediger.","Neem de bal mee de andere kant op."]},
  {title:"Sombrero", video:"sI07i6cLRxo", level:"Moeilijk", tip:"Oefen het wippen eerst zonder tegenstander, met een zachte bal.", yt:"sombrero flick tutorial",
   steps:["Laat de bal op je wreef stilliggen.","Wip de bal met je wreef omhoog.","Laat hem over de tegenstander heen gaan.","Loop om hem heen en vang de bal op."]},
  {title:"Hocus pocus", video:"2Rx36dcFC-0", level:"Moeilijk", tip:"Dit is een showtrucje. Oefen hem vaak voordat je hem in een wedstrijd probeert.", yt:"hocus pocus tutorial",
   steps:["Dribbel vooruit met de bal aan rechts.","Zet je linkervoet voor de bal.","Tik de bal met je rechterhak achter je linkerbeen langs.","Neem hem met de buitenkant van rechts mee naar rechts."]},
  {title:"Around the world", video:"rbWLHOV-0cM", level:"Moeilijk", tip:"Begin met de bal vanuit je hand laten vallen. Lukt dat, dan probeer je het vanuit hooghouden.", yt:"around the world tutorial",
   steps:["Laat de bal vallen en tik hem zacht omhoog met je wreef.","Draai je voet snel helemaal rond de bal.","Vang de bal op of tik hem weer op.","Probeer het daarna tijdens het hooghouden."]},
  {title:"Okocha-stepover", video:"UBzna8LHtpo", level:"Gemiddeld", tip:"Het gaat om ritme: rol, stap, weg.", yt:"okocha stepover tutorial",
   steps:["Rol de bal met je zool naar binnen.","Stap met dezelfde voet over de bal heen.","Laat je lichaam meezakken.","Neem de bal met je andere voet de andere kant op."]},
  {title:"Schijnpass", video:"s4zc33506oI", level:"Makkelijk", tip:"Kijk ook naar de teamgenoot alsof je echt gaat passen.", yt:"fake pass tutorial",
   steps:["Kijk naar een teamgenoot.","Zwaai je been alsof je de bal gaat passen.","Raak de bal niet, maar stap eroverheen.","Neem de bal mee de andere kant op."]},
  {title:"Schaarbeweging", video:"6dcW1VhK3Yw", level:"Makkelijk", tip:"Bij de schaar draai je je voet van buiten naar binnen voor de bal langs.", yt:"scissors move tutorial",
   steps:["Dribbel met de bal voor je.","Draai je voet van buiten naar binnen vóór de bal langs.","Zet je voet neer en laat je schouder meezakken.","Neem de bal met je andere voet mee."]},
  {title:"Sleep-schijn", video:"OFb81pPQ8GE", level:"Gemiddeld", tip:"Doe alsof je de bal terugtrekt, maar ga meteen vooruit.", yt:"drag back fake tutorial",
   steps:["Zet je zool op de bal.","Doe alsof je hem terugtrekt; de verdediger stapt in.","Duw de bal met je zool juist vooruit of opzij.","Versnel langs de verdediger."]}
);
