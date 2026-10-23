// Stay Hard – tabblad Speler: records, wedstrijddag-checklist, posities en blessures voorkomen.

// ---------- Records ----------
// lower: true = hoe lager, hoe beter (tijden)
const RECORD_TESTS = [
  {id:"hoog", name:"Hooghouden", unit:"keer", icon:"⚽", how:"Houd de bal zo vaak mogelijk hoog zonder dat hij de grond raakt. Je beste van 3 pogingen telt."},
  {id:"hoogzwak", name:"Hooghouden met je zwakke voet", unit:"keer", icon:"🦶", how:"Alleen je zwakke voet. Je beste van 3 pogingen telt."},
  {id:"sprint20", name:"Sprint 20 meter", unit:"sec", lower:true, icon:"⚡", how:"Laat iemand de tijd opnemen. Start stil, sprint 20 meter. Beste van 2 keer."},
  {id:"slalom", name:"Slalom met bal (6 pionnen)", unit:"sec", lower:true, icon:"🔀", how:"6 pionnen op 2 meter van elkaar. Dribbel heen en terug. Beste van 2 keer."},
  {id:"wend", name:"Wendbaarheid 5-10-5", unit:"sec", lower:true, icon:"↔️", how:"Sprint 5 meter naar links, 10 meter naar rechts en 5 meter terug naar het midden. Raak elke lijn aan."},
  {id:"plank", name:"Plank", unit:"sec", icon:"🧱", how:"Houd de plank op je ellebogen met een rechte rug zo lang mogelijk vol."},
  {id:"pushup", name:"Push-ups in 1 minuut", unit:"keer", icon:"💪", how:"Tel alleen push-ups met een rechte rug en je borst bijna op de grond."},
  {id:"squat", name:"Squats in 1 minuut", unit:"keer", icon:"🦵", how:"Zak tot je bovenbenen horizontaal zijn. Tel elke goede herhaling."},
  {id:"wallsit", name:"Wall sit", unit:"sec", icon:"🪑", how:"Zit tegen de muur met je knieën in een hoek van 90 graden. Hoe lang houd je het vol?"},
  {id:"touw", name:"Touwtjespringen in 1 minuut", unit:"keer", icon:"🪢", how:"Tel hoeveel sprongen je in 1 minuut maakt."},
  {id:"versprong", name:"Verspringen uit stand", unit:"cm", icon:"🦘", how:"Spring met twee voeten zo ver mogelijk en land stil. Meet vanaf je hielen."},
  {id:"balans", name:"Balans op één been, ogen dicht", unit:"sec", icon:"🧘", how:"Sta op je zwakke been met je ogen dicht. Stop als je je andere voet neerzet."},
  {id:"muur30", name:"Muurpasses in 30 seconden", unit:"keer", icon:"🧱", how:"Sta 3 meter van een muur. Tel hoeveel passes je in 30 seconden speelt."},
  {id:"raak10", name:"Raak van 10 schoten op de hoeken", unit:"van 10", icon:"🎯", how:"Schiet 10 keer van 11 meter op de hoeken van een doel. Tel de raak-schoten."},
  {id:"pen10", name:"Penalty's raak van 10", unit:"van 10", icon:"🥅", how:"Neem 10 penalty's (met of zonder keeper). Tel hoeveel er raak zijn."},
  {id:"kop", name:"Hooghouden met je hoofd", unit:"keer", icon:"🙆", how:"Gooi de bal op en houd hem hoog met alleen je hoofd."}
];

// ---------- Wedstrijddag-checklist ----------
const MATCH_CHECKLIST = [
  ["De avond ervoor", ["Avondeten met pasta, rijst of aardappels","Tas inpakken: schoenen, scheenbeschermers, sokken, tenue, bidon, handdoek","Noppen en veters checken","Bidon klaarzetten in de koelkast","Schermen een uur voor bedtijd weg","Op tijd naar bed, minstens 9 uur slaap"]],
  ["De ochtend", ["Opstaan en een glas water drinken","Ontbijt minstens 3 uur voor de aftrap","Even rekken of rustig bewegen","Drink de hele ochtend af en toe water","Kijk nog even naar je doel voor vandaag"]],
  ["Voor vertrek", ["Tas nog een keer checken","Banaan of krentenbol mee voor de rust of erna","Op tijd vertrekken, zodat je zonder haast aankomt"]],
  ["Bij het veld", ["Omkleden en scheenbeschermers goed vast","Luisteren naar de trainer: wat is jouw taak?","Warming-up: joggen, loopscholing, sprintjes, balcontacten","3 keer rustig ademen voor de aftrap"]],
  ["Tijdens de wedstrijd", ["Praat met je teamgenoten","Kijk om je heen voor je de bal krijgt","Na een fout: 'volgende' en meteen door","Drink in elke pauze een paar slokken"]],
  ["In de rust", ["Drinken en eventueel een stukje banaan","Luisteren naar de tips van de trainer","Eén ding bedenken dat je in de tweede helft beter doet","Even bewegen voor de tweede helft, niet afkoelen"]],
  ["Na de wedstrijd", ["Tegenstander en scheidsrechter een hand geven","Uitlopen en 10 minuten benen rekken","Binnen een uur eten en drinken","Douchen en droge, warme kleren aan","Twee dingen die goed gingen en één leerpunt opschrijven","Vroeg naar bed"]]
];

// ---------- Posities ----------
// x,y op een staand veld (eigen doel onder)
const POSITIES = [
  {id:"k", short:"Keeper", nr:1, name:"Keeper", spots:[[50,138]], kort:"De laatste man en de eerste aanvaller. Hij ziet het hele veld.",
   bezit:["Bied je aan als extra speler voor een terugspeelbal","Speel snel uit naar een vrije speler","Kies tussen kort opbouwen en een lange bal"],
   verlies:["Sta op de goede plek: tussen bal en het midden van je doel","Coach je verdediging: roep namen en richting","Kom uit bij ballen achter de verdediging"],
   skills:["Vangen en duiken","Goed met beide voeten","Communiceren","Rust"], spelers:["Manuel Neuer","Thibaut Courtois","Edwin van der Sar"]},
  {id:"lb", short:"Linksback", nr:5, name:"Linksback", spots:[[16,110]], kort:"Verdedigt de linkerkant en loopt mee naar voren als het kan.",
   bezit:["Ga breed staan, dicht bij de zijlijn","Loop achter je vleugelspeler langs (overlap)","Geef voorzetten of speel in op de middenvelders"],
   verlies:["Sprint terug naar je positie","Sta tussen je man en het doel","Stuur de aanvaller naar de zijlijn"],
   skills:["Snelheid en uithoudingsvermogen","1-tegen-1 verdedigen","Voorzetten"], spelers:["Alphonso Davies","Andrew Robertson"]},
  {id:"cv", short:"Verdediger", nr:4, name:"Centrale verdediger", spots:[[36,120],[64,120]], kort:"Het hart van de verdediging. Stopt aanvallen en begint de opbouw.",
   bezit:["Sta breed en wees aanspeelbaar voor de keeper","Speel rustig en zuiver naar het middenveld","Dribbel in als er ruimte is"],
   verlies:["Houd de verdediging als een lijn bij elkaar","Win kopduels en blijf op je benen","Praat met je mede-verdediger en keeper"],
   skills:["Kopballen","Positie kiezen","Rust aan de bal","Lange pass"], spelers:["Virgil van Dijk","Paolo Maldini","Sergio Ramos"]},
  {id:"rb", short:"Rechtsback", nr:2, name:"Rechtsback", spots:[[84,110]], kort:"Verdedigt de rechterkant en helpt mee in de aanval.",
   bezit:["Ga breed staan en wees aanspeelbaar","Loop mee in de aanval als je vleugelspeler naar binnen gaat","Geef een strakke voorzet of speel kort in"],
   verlies:["Sprint terug naar je positie","Sta schuin en stuur de aanvaller naar buiten","Help je centrale verdediger bij een voorzet van de andere kant"],
   skills:["Snelheid","Voorzetten","1-tegen-1 verdedigen"], spelers:["Trent Alexander-Arnold","Achraf Hakimi","Denzel Dumfries"]},
  {id:"vm", short:"Controleur", nr:6, name:"Verdedigende middenvelder", spots:[[50,96]], kort:"Staat voor de verdediging en houdt het team in balans.",
   bezit:["Kom tussen of voor de verdedigers om de bal te halen","Speel simpel en zeker","Wissel van kant met een lange pass"],
   verlies:["Sluit het midden af","Onderschep passes door slim te staan","Zet een tegenstander vast tot je team terug is"],
   skills:["Positie","Spel lezen","Simpel en zuiver passen","Duels"], spelers:["Rodri","Sergio Busquets","N'Golo Kanté"]},
  {id:"cm", short:"Middenveld", nr:8, name:"Centrale middenvelder", spots:[[32,80]], kort:"De motor van het team: helpt verdedigen en aanvallen.",
   bezit:["Kijk om je heen voor je de bal krijgt","Neem open aan en speel vooruit","Loop laat de zestien in"],
   verlies:["Zet direct druk","Loop mee terug met je man","Help de verdedigende middenvelder"],
   skills:["Rondkijken","Passen","Uithoudingsvermogen","Draaien"], spelers:["Luka Modrić","Toni Kroos","Frenkie de Jong","Pedri","Xavi","Andrés Iniesta","Jude Bellingham"]},
  {id:"cam", short:"Spelmaker", nr:10, name:"Aanvallende middenvelder", spots:[[68,70]], kort:"Speelt tussen de linies en maakt kansen voor de aanvallers.",
   bezit:["Zoek ruimte tussen de middenvelders en verdedigers van de tegenstander","Draai en speel een steekpass","Schiet zelf van de rand van de zestien"],
   verlies:["Zet druk op hun verdedigende middenvelder","Sluit de passlijn naar het midden af","Loop terug tot achter de bal"],
   skills:["Steekpasses","Draaien onder druk","Schieten van afstand","Creativiteit"], spelers:["Kevin De Bruyne","Zinedine Zidane","Jamal Musiala","Xavi Simons","Dennis Bergkamp"]},
  {id:"lw", short:"Linksbuiten", nr:11, name:"Linksbuiten", spots:[[16,44]], kort:"Snelle aanvaller aan de linkerkant. Gaat 1-tegen-1 en maakt goals.",
   bezit:["Sta breed om het veld groot te maken","Ga 1-tegen-1: langs de buitenkant of naar binnen","Loop in de ruimte achter de back"],
   verlies:["Zet druk op hun rechtsback","Loop mee terug met de back die opkomt","Sluit de pass naar binnen af"],
   skills:["Dribbelen","Snelheid","Afronden","Voorzetten"], spelers:["Cody Gakpo","Neymar","Ronaldinho","Kylian Mbappé","Thierry Henry"]},
  {id:"rw", short:"Rechtsbuiten", nr:7, name:"Rechtsbuiten", spots:[[84,44]], kort:"Snelle aanvaller aan de rechterkant, vaak met een linkervoet naar binnen.",
   bezit:["Sta breed en wacht op je moment","Snijd naar binnen voor een schot of ga langs voor een voorzet","Loop diagonaal naar de goal"],
   verlies:["Zet druk op hun linksback","Help je rechtsback","Sprint terug als het moet"],
   skills:["Dribbelen","Krullende schoten","Snelheid","1-tegen-1"], spelers:["Arjen Robben","Bukayo Saka","Lamine Yamal","Mohamed Salah","Lionel Messi"]},
  {id:"sp", short:"Spits", nr:9, name:"Spits", spots:[[50,30]], kort:"De goalgetter. Maakt goals en houdt de bal vast voor het team.",
   bezit:["Loop in de rug van de verdediger","Houd de bal vast met je rug naar het doel","Sta in de zestien bij een voorzet: eerste of tweede paal"],
   verlies:["Zet als eerste druk op de verdedigers","Stuur ze naar één kant","Sluit de pass naar hun middenvelder af"],
   skills:["Afronden","Loopacties","Kopballen","Kaatsen"], spelers:["Erling Haaland","Cristiano Ronaldo","Lautaro Martínez","Robert Lewandowski","Marco van Basten","Memphis Depay","Antoine Griezmann"]}
];

// extra spelers voor de posities
SPELERS.push(
  SP("Edwin van der Sar", "Keeper", "Rustig, groot en heel goed met zijn voeten. Speelde mee in de opbouw toen dat nog niet gewoon was.", ["Rust onder druk","Goed met zijn voeten","Positie kiezen"], "Een keeper die goed kan voetballen, helpt zijn team om rustig op te bouwen.", "Als je keept: speel 20 passes met beide voeten en neem de bal eerst aan voor je speelt.", "van der sar saves"),
  SP("Andrew Robertson", "Linksback", "Loopt de hele wedstrijd de linkerkant op en neer en geeft veel voorzetten.", ["Uithoudingsvermogen","Voorzetten in de loop","Druk zetten"], "Een back die blijft lopen, maakt het verschil in de laatste minuten.", "Doe 6 keer: sprint 30 meter langs de lijn, geef een voorzet en sprint terug.", "robertson crosses"),
  SP("Trent Alexander-Arnold", "Rechtsback", "Een back met de passing van een middenvelder: lange ballen en voorzetten die precies vallen.", ["Lange passes","Voorzetten","Spelhervattingen"], "Ook als back kun je een spelmaker zijn.", "Speel 20 lange ballen naar een plek op 30 meter.", "alexander arnold passing"),
  SP("Achraf Hakimi", "Rechtsback", "Supersnel en heel aanvallend. Loopt vaak tot in de zestien van de tegenstander.", ["Snelheid","Meedoen in de aanval","Afronden als back"], "Als back kun je ook gevaarlijk zijn voor het doel.", "Oefen 10 sprints met een schot aan het eind.", "hakimi speed"),
  SP("Denzel Dumfries", "Rechtsback", "Sterk, groot en energiek. Gevaarlijk met kopballen en loopt veel mee naar voren.", ["Kracht en energie","Kopballen","Loopacties naar de tweede paal"], "Een back die bij de tweede paal opduikt, scoort verrassend vaak.", "Oefen 10 keer een loopactie naar de tweede paal met een kopbal.", "dumfries goals"),
  SP("Sergio Ramos", "Verdediger", "Een leider die sterk is in de lucht en ook vaak scoort bij spelhervattingen.", ["Kopballen","Leiderschap","Belangrijke goals"], "Een verdediger kan bij hoekschoppen heel belangrijk zijn.", "Oefen 15 kopballen na een gooi en kop ze naar beneden.", "sergio ramos headers"),
  SP("Robert Lewandowski", "Spits", "Een complete spits: sterk met beide voeten, met zijn hoofd en heel slim in de zestien.", ["Afronden met beide voeten","Positie in de zestien","Kopballen"], "Een spits moet overal mee kunnen scoren.", "Schiet 10 keer met links, 10 keer met rechts en kop 10 keer op doel.", "lewandowski finishing"),
  SP("Marco van Basten", "Spits", "Elegant en dodelijk voor het doel. Bekend van zijn volley in de EK-finale van 1988.", ["Volleys","Techniek","Afronden"], "Durf te schieten, ook als het moeilijk lijkt.", "Oefen 15 volleys tegen de muur.", "van basten goals")
);

// ---------- Blessures voorkomen ----------
const WARMUP_PREVENT = [
  ["Rustig joggen", "2 minuten", "Rustig heen en weer joggen om warm te worden."],
  ["Heupen open en dicht", "2 x 10 meter", "Jog en draai je knie naar buiten en weer naar binnen."],
  ["Zijwaarts huppelen", "2 x 10 meter", "Huppel zijwaarts, beide kanten."],
  ["Kniebuigingen", "10 keer", "Rustige squats met je knieën boven je tenen."],
  ["Nordic hamstring", "3 tot 5 keer", "Met een maatje die je enkels vasthoudt. Langzaam zakken."],
  ["Balans op één been met bal", "30 sec per been", "Gooi een bal naar een maatje terwijl je op één been staat."],
  ["Sprongen en zacht landen", "10 keer", "Spring omhoog en land zacht met je knieën boven je tenen."],
  ["Plank", "2 x 20 sec", "Op je ellebogen, rechte rug."],
  ["Sprints met wending", "4 keer", "Sprint 10 meter, rem af, draai en sprint terug."]
];
const BLESSURES = [
  {title:"Verzwikte enkel", wat:"Je enkel klapt om. Het doet pijn en kan dik worden.", doe:["Stop met spelen","Koel 10 tot 15 minuten met ijs in een doekje","Leg je voet hoog","Loop pas weer als het niet meer pijn doet"], stop:"Kun je niet op je voet staan of wordt het heel dik en blauw? Laat een dokter kijken.", voorkom:"Train je balans op één been en doe kuitheffen op één been."},
  {title:"Kramp", wat:"Een spier trekt ineens samen en doet veel pijn, vaak in je kuit.", doe:["Strek de spier rustig","Trek bij kramp in je kuit je tenen naar je toe","Drink water","Masseer de spier zacht"], stop:"Komt kramp heel vaak terug? Vertel het je ouders.", voorkom:"Drink genoeg, eet goed en rek na het sporten."},
  {title:"Stoot of kneuzing", wat:"Een harde klap op je been, bijvoorbeeld van een knie of noppen.", doe:["Koel de plek 10 minuten","Rust even","Rustig weer bewegen als het minder pijn doet"], stop:"Is het heel dik, kun je niet lopen of blijft het lang pijn doen? Laat het nakijken.", voorkom:"Draag altijd scheenbeschermers."},
  {title:"Pijn onder je knie bij het groeien", wat:"Bij jongens die snel groeien kan het bot onder de knie pijn doen, vooral na springen en sprinten.", doe:["Vertel het je ouders en trainer","Doe het rustiger aan","Rek je bovenbenen","Koel na het sporten"], stop:"Laat een fysiotherapeut of huisarts kijken als het blijft.", voorkom:"Rek je bovenbenen na elke training en bouw rustig op."},
  {title:"Pijn in je hiel bij het groeien", wat:"Ook je hiel kan pijn doen als je snel groeit, vooral na veel rennen.", doe:["Rek je kuiten","Doe het rustiger aan","Draag goede schoenen","Vertel het je ouders"], stop:"Blijft het pijn doen? Laat een fysiotherapeut of huisarts kijken.", voorkom:"Rek je kuiten elke dag en draag niet de hele dag noppen."},
  {title:"Verrekte spier", wat:"Een plotselinge pijn in een spier, vaak in je hamstring tijdens een sprint.", doe:["Stop meteen","Koel de plek","Rust een paar dagen","Begin heel rustig weer"], stop:"Voel je een knap of is er een blauwe plek? Laat het nakijken.", voorkom:"Warm altijd goed op en doe de Nordic hamstring."},
  {title:"Klap op je hoofd", wat:"Een botsing met je hoofd tijdens een kopduel of val.", doe:["Stop met spelen","Vertel het meteen een volwassene","Rust"], stop:"Hoofdpijn, duizelig, misselijk of wazig zien? Altijd naar een dokter. Nooit doorspelen.", voorkom:"Kop met je voorhoofd en houd je ogen open."},
  {title:"Blaren", wat:"Een blaasje op je voet door schuren van je schoen.", doe:["Doe er een blarenpleister op","Prik hem niet zelf open","Draag goede sokken"], stop:"Wordt het rood, warm of dik? Laat het nakijken.", voorkom:"Draag schoenen die goed passen en sokken die niet schuiven."},
  {title:"Schaafwond", wat:"Een open wondje door een val op kunstgras.", doe:["Spoel schoon met water","Dep droog","Doe er een pleister op"], stop:"Is het diep of wordt het rood en warm? Laat het nakijken.", voorkom:"Pas op met slidings op kunstgras."},
  {title:"Spierpijn", wat:"Stijve spieren een dag of twee na een zware training.", doe:["Rustig bewegen","Rekken","Goed eten en slapen"], stop:"Spierpijn gaat vanzelf over. Scherpe pijn op één plek is iets anders.", voorkom:"Bouw je trainingen rustig op."}
];
const BLESSURE_REGELS = [
  "Warm altijd minstens 10 minuten op voor training en wedstrijd.",
  "Rek na elke training en wedstrijd je benen.",
  "Slaap minstens 9 uur, zeker na een zware dag.",
  "Drink genoeg, ook als je geen dorst hebt.",
  "Train niet door met pijn: pijn is een signaal.",
  "Bouw rustig op na een vakantie of blessure.",
  "Draag altijd scheenbeschermers en goede schoenen.",
  "Doe 2 keer per week kracht en balans (zie Kracht).",
  "Neem minstens één rustdag per week.",
  "Vertel het een volwassene als iets langer dan 2 dagen pijn doet."
];
