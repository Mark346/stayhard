// Stay Hard – spelhervattingen per positie en omgaan met tegenslag.

// ---------- Spelhervattingen per positie ----------
// Per soort speler: plek = waar je staat, taak = wat je doet, let = waar je op let.
const SH_SITUATIES = [
  ["hoek-voor", "Hoekschop voor ons", "⛳"],
  ["hoek-tegen", "Hoekschop tegen", "🛡️"],
  ["vt-voor", "Vrije trap voor ons (bij de zestien)", "🎯"],
  ["vt-tegen", "Vrije trap tegen (bij onze zestien)", "🧱"],
  ["ingooi-voor", "Ingooi voor ons", "🙌"],
  ["ingooi-tegen", "Ingooi tegen", "👀"],
  ["doelschop-voor", "Doelschop voor ons", "🥅"],
  ["doelschop-tegen", "Doelschop tegen", "📡"],
  ["penalty", "Penalty (voor of tegen)", "⚪"],
  ["aftrap", "Aftrap", "▶️"]
];
const H = (plek, taak, let_) => ({plek, taak, let: let_});
const SH_GROEPEN = {
  keeper: {
    "hoek-voor": H("Blijf in je doel of kom iets naar voren, tot de rand van je zestien.", "Coach je achterblijvers: wie dekt de snelle spits?", "Wees klaar voor een snelle counter als de bal wordt weggekopt."),
    "hoek-tegen": H("Op de doellijn, iets naar de tweede paal.", "Roep 'keeper' als je de bal komt pakken en ga er vol voor.", "Laat de verdedigers weten wie bij de palen staat."),
    "vt-voor": H("Rond de rand van je eigen zestien.", "Houd de spitsen van de tegenstander in de gaten.", "Coach de spelers die achterblijven."),
    "vt-tegen": H("Aan de kant waar de muur niet staat.", "Bepaal hoeveel spelers in de muur komen en zet ze goed neer.", "Blijf staan tot de bal geraakt is."),
    "ingooi-voor": H("Iets voor je doel, bij de rand van de zestien.", "Wees aanspeelbaar als iemand terug wil spelen.", "Coach je verdedigers bij balverlies."),
    "ingooi-tegen": H("In je doel, iets naar de kant van de ingooi.", "Coach je verdedigers: wie dekt wie?", "Let op lange ingooien de zestien in."),
    "doelschop-voor": H("Bij de bal.", "Kies: kort naar een vrije verdediger of lang naar een vrije plek.", "Kijk eerst of er iemand vrij staat."),
    "doelschop-tegen": H("Een stukje voor je doel.", "Wees klaar voor een lange bal achter je verdediging.", "Coach je verdedigers om compact te staan."),
    "penalty": H("Op de doellijn.", "Kies een kant of wacht zo lang mogelijk en reageer.", "Kijk naar de heupen en het standbeen van de nemer."),
    "aftrap": H("In je doel.", "Wees klaar voor een snelle aanval.", "Coach je team om scherp te zijn.")
  },
  verdediger: {
    "hoek-voor": H("Vaak in de zestien voor een kopbal, of als laatste man achter.", "Ga bij een hoekschop naar de bal als je groot bent; anders blijf je achter.", "Spreek af wie achterblijft voor de counter."),
    "hoek-tegen": H("In de zestien, bij je man of in je zone.", "Kop de bal hoog en ver weg, het liefst naar de zijkant.", "Laat je man nooit los en kijk naar de bal én je man."),
    "vt-voor": H("In de zestien bij een kopbal, of achter als laatste man.", "Loop op het moment van de trap naar de bal.", "Spreek af wie achterblijft."),
    "vt-tegen": H("In de muur of bij je man.", "Blijf bij je man tot de bal weg is.", "Stap mee naar voren als het team uitstapt (buitenspel)."),
    "ingooi-voor": H("Op je positie, aanspeelbaar voor een terugspeelbal.", "Wees een veilige optie als het misgaat.", "Kijk of de tegenstander snel kan counteren."),
    "ingooi-tegen": H("Dicht bij je man, aan de kant van je eigen doel.", "Pak je man direct op.", "Let op lange ingooien in de zestien."),
    "doelschop-voor": H("Breed bij de rand van de zestien.", "Wees aanspeelbaar voor de keeper.", "Neem de bal open aan zodat je vooruit kunt."),
    "doelschop-tegen": H("Een stukje dieper dan normaal.", "Win de kopbal of zorg dat je achter je man staat.", "Pak de tweede bal of zorg dat iemand anders hem pakt."),
    "penalty": H("Bij de rand van de zestien, buiten de boog.", "Sprint mee voor een rebound.", "Blijf buiten de zestien tot de bal geraakt is."),
    "aftrap": H("Op je positie.", "Wees klaar voor een lange bal.", "Praat met je mede-verdediger.")
  },
  back: {
    "hoek-voor": H("Bij de rand van de zestien of breed voor een korte hoekschop.", "Pak de tweede bal of bied je aan voor een korte variant.", "Blijf alert op een counter langs jouw kant."),
    "hoek-tegen": H("Bij de eerste of tweede paal, of bij je man.", "Werk de bal weg en blijf niet stilstaan.", "Ga na het wegwerken meteen mee naar voren."),
    "vt-voor": H("Breed voor de tweede bal, of laat in de zestien.", "Loop laat naar de tweede paal.", "Houd een counter in de gaten."),
    "vt-tegen": H("Bij je man of bij de tweede paal.", "Blijf bij je man.", "Pas op voor een korte variant naar jouw kant."),
    "ingooi-voor": H("Vaak ben jij degene die ingooit.", "Gooi snel naar een vrije teamgenoot, liefst naar zijn voet.", "Loop na je ingooi meteen het veld in."),
    "ingooi-tegen": H("Bij je man aan de zijkant.", "Sta aan de kant van je eigen doel en pak je man op.", "Wees alert op een snelle ingooi."),
    "doelschop-voor": H("Breed bij de zijlijn.", "Bied je aan voor de keeper.", "Kijk voor je aanname al wat je gaat doen."),
    "doelschop-tegen": H("Iets naar binnen, dicht bij je verdediger.", "Help bij de tweede bal.", "Houd je vleugelspeler in de gaten."),
    "penalty": H("Bij de rand van de zestien.", "Sprint mee voor een rebound.", "Wacht tot de bal geraakt is."),
    "aftrap": H("Op je positie, breed.", "Wees klaar om op te komen.", "Let op een lange bal op jouw kant.")
  },
  middenvelder: {
    "hoek-voor": H("Bij de rand van de zestien.", "Pak de tweede bal of schiet als hij voor je valt.", "Wees de eerste die terugloopt bij balverlies."),
    "hoek-tegen": H("Bij de rand van de zestien of bij een man.", "Pak de tweede bal en start de counter.", "Kijk wie er vrij staat voor de snelle aanval."),
    "vt-voor": H("Vaak nemer, of bij de rand van de zestien.", "Neem de trap of loop laat de zestien in.", "Spreek de variant af met je team."),
    "vt-tegen": H("In de muur of bij de rand van de zestien.", "Blokkeer een korte variant of pak de tweede bal.", "Blijf geconcentreerd tot de bal weg is."),
    "ingooi-voor": H("Dicht bij de ingooi.", "Loop eerst weg en kom dan terug om aanspeelbaar te zijn.", "Speel na de ingooi snel door."),
    "ingooi-tegen": H("Bij je man in het midden.", "Pak je man op en blokkeer de pass naar binnen.", "Let op een snelle ingooi."),
    "doelschop-voor": H("Tussen de verdedigers, of op het middenveld.", "Bied je aan voor een korte opbouw of pak de tweede bal na een lange.", "Kijk over je schouder voor de aanname."),
    "doelschop-tegen": H("Rond de plek waar de bal valt.", "Pak de tweede bal na de kopbal.", "Sta dicht bij elkaar zodat de tegenstander geen ruimte heeft."),
    "penalty": H("Bij de rand van de zestien.", "Sprint mee voor een rebound.", "Blijf buiten de boog tot de bal geraakt is."),
    "aftrap": H("Vaak bij de aftrap.", "Speel de bal rustig terug of naar voren, zoals afgesproken.", "Ken de afspraak van je team.")
  },
  vleugel: {
    "hoek-voor": H("Vaak de nemer, of bij de tweede paal.", "Geef een strakke hoekschop of loop laat naar de tweede paal.", "Mik op de plek die jullie afgesproken hebben."),
    "hoek-tegen": H("Bij de rand van de zestien of voorin voor de counter.", "Blijf voorin als counter-optie als de trainer dat vraagt.", "Sprint weg zodra jouw team de bal wint."),
    "vt-voor": H("Breed of bij de tweede paal.", "Loop laat in de ruimte of neem de trap.", "Kijk of een korte variant mogelijk is."),
    "vt-tegen": H("Bij een tegenstander aan jouw kant of voorin.", "Help bij een korte variant of wacht op de counter.", "Wees snel weg bij balwinst."),
    "ingooi-voor": H("Bij de zijlijn, vlak voor de ingooi.", "Loop eerst diep en kom dan terug voor de bal.", "Draai snel als je ruimte hebt."),
    "ingooi-tegen": H("Bij hun back.", "Dek hun back of de speler bij de ingooi.", "Let op een snelle ingooi."),
    "doelschop-voor": H("Breed, bij de zijlijn.", "Bied je aan of loop diep voor een lange bal.", "Pak de tweede bal als je vrij staat."),
    "doelschop-tegen": H("Op je positie, iets naar binnen.", "Zet druk op hun back als de bal kort gaat.", "Sluit de passlijn naar de zijkant af."),
    "penalty": H("Bij de rand van de zestien.", "Sprint mee voor een rebound.", "Wacht tot de bal geraakt is."),
    "aftrap": H("Breed op je positie.", "Wees klaar om diep te lopen.", "Let op de afspraak van het team.")
  },
  spits: {
    "hoek-voor": H("In de zestien, vaak bij de eerste paal of voor de keeper.", "Loop op het moment van de trap naar de bal en kop naar beneden.", "Maak een schijnbeweging om los te komen."),
    "hoek-tegen": H("Bij de eerste paal om weg te koppen, of voorin voor de counter.", "Kop de bal weg of blijf voorin als de trainer dat zegt.", "Ben je voorin? Wees klaar om de bal vast te houden."),
    "vt-voor": H("In de zestien.", "Ga voor de rebound of de kopbal.", "Sta niet buitenspel."),
    "vt-tegen": H("Vaak in de muur of voorin.", "Help in de muur of wacht op de counter.", "Blijf in de muur staan tot de bal geraakt is."),
    "ingooi-voor": H("Vlak voor de ingooi, met je rug naar het doel.", "Vraag de bal en kaats hem terug of scherm af.", "Gebruik je lichaam tegen je verdediger."),
    "ingooi-tegen": H("Op je positie of bij hun verdediger.", "Zet druk zodra de bal binnen is.", "Sluit een pass terug naar hun keeper af."),
    "doelschop-voor": H("Waar de bal ongeveer valt.", "Win de kopbal of houd de bal vast.", "Kop door naar een teamgenoot die meeloopt."),
    "doelschop-tegen": H("Bij hun verdedigers.", "Zet druk als de keeper kort speelt.", "Stuur ze naar één kant."),
    "penalty": H("Vaak ben jij de nemer, of je staat klaar voor de rebound.", "Kies vooraf je hoek en schiet zonder twijfel.", "Gebruik steeds dezelfde routine."),
    "aftrap": H("Bij de middenstip.", "Neem de aftrap volgens de afspraak.", "Loop daarna meteen naar je positie.")
  }
};
const SH_GROEP_VAN = {k:"keeper", cv:"verdediger", lb:"back", rb:"back", vm:"middenvelder", cm:"middenvelder", cam:"middenvelder", lw:"vleugel", rw:"vleugel", sp:"spits"};

// ---------- Omgaan met tegenslag ----------
const TS = (title, gevoel, doe, denk) => ({title, gevoel, doe, denk});
const TEGENSLAG = [
  TS("Je zit op de bank", "Teleurgesteld en misschien boos. Dat is normaal.", ["Moedig je team aan","Kijk goed naar het spel, dan ben je klaar als je erin komt","Vraag na de wedstrijd aan de trainer wat je kunt verbeteren"], "De bank is geen eindpunt. Laat op de training zien waarom je moet spelen."),
  TS("Je wordt niet geselecteerd", "Verdrietig, onzeker of jaloers.", ["Neem een dag om het te laten zakken","Vraag de trainer wat je beter kunt doen","Maak een plan en train er elke dag aan"], "Veel profs werden als jeugdspeler ooit niet gekozen. Wie doorgaat, wint later."),
  TS("Je bent geblesseerd", "Gefrustreerd dat je niet mag spelen.", ["Volg precies wat de dokter of fysio zegt","Train wat wel kan: bovenlichaam, buik, balans","Kijk wedstrijden en leer van het spel"], "Een blessure is tijd om andere dingen te verbeteren. Rustig opbouwen is ook sterk."),
  TS("Je team verliest", "Balen, boos of moe.", ["Geef de tegenstander een hand","Bedenk één ding dat goed ging en één leerpunt","Laat het los na het avondeten"], "Verliezen hoort bij voetbal. Wie ervan leert, wint later vaker."),
  TS("Je maakt een grote fout", "Je schaamt je of bent boos op jezelf.", ["Zeg 'volgende' en doe meteen weer mee","Vraag na de wedstrijd wat je anders kon doen","Oefen die situatie op de training"], "Elke speler maakt fouten. Het gaat erom wat je daarna doet."),
  TS("Je mist een penalty", "Je voelt je schuldig tegenover je team.", ["Accepteer het: ook de beste spelers missen penalty's","Bedank je teamgenoten die je steunen","Oefen een vaste penalty-routine"], "Wie een penalty durft te nemen, is al dapper."),
  TS("Je krijgt een rode kaart", "Boos, of je voelt je onterecht behandeld.", ["Loop rustig van het veld","Bied je team je excuses aan als het jouw schuld was","Bedenk hoe je het de volgende keer voorkomt"], "Van een fout leren maakt je een betere speler."),
  TS("Je wordt uitgelachen", "Gekwetst of onzeker.", ["Laat je niet uitlokken","Praat erover met iemand die je vertrouwt","Laat het zien met je inzet"], "Wat anderen zeggen, bepaalt niet wie jij bent."),
  TS("Een slechte training", "Je voelt dat niets lukt.", ["Haal diep adem en houd het simpel","Focus op één ding dat wel lukt","Ga op tijd naar bed: morgen is een nieuwe dag"], "Iedereen heeft slechte dagen. Het telt hoe je terugkomt."),
  TS("De trainer is boos op je", "Bang of verdrietig.", ["Luister naar wat hij zegt","Vraag na afloop rustig wat je beter kunt doen","Laat in de volgende training zien dat je het hebt opgepikt"], "Een trainer die kritiek geeft, ziet vaak iets in je."),
  TS("Ruzie in het team", "Onrustig of boos.", ["Blijf rustig en doe niet mee aan roddels","Praat het rustig uit met de persoon","Vraag hulp aan de trainer als het niet lukt"], "Een team dat ruzie oplost, wordt sterker."),
  TS("Je staat achter in de wedstrijd", "Je voelt dat het niet meer lukt.", ["Klap in je handen en roep het team op","Speel simpel en vecht voor elke bal","Focus op de volgende actie, niet op de stand"], "Veel wedstrijden zijn in de laatste minuten nog gedraaid."),
  TS("Je wordt gewisseld", "Teleurgesteld of boos.", ["Loop snel van het veld en geef je vervanger een high five","Moedig je team aan","Vraag later wat de reden was"], "Een wissel is soms tactiek, niet altijd een straf."),
  TS("Je bent kleiner dan anderen", "Je voelt je minder sterk in duels.", ["Gebruik je snelheid en wendbaarheid","Train je balans en romp","Wees slimmer: kies je positie goed"], "Iedereen groeit op zijn eigen tempo. Veel kleine spelers werden groot op het veld."),
  TS("Je gaat langzamer vooruit dan anderen", "Je denkt dat je niet goed genoeg bent.", ["Vergelijk je alleen met jezelf van vorige maand","Schrijf op wat je al beter kunt","Blijf elke dag een beetje oefenen"], "Groei gaat niet in een rechte lijn. Soms gaat het ineens hard."),
  TS("Een teamgenoot krijgt jouw plek", "Jaloers of onzeker.", ["Feliciteer hem","Leer van wat hij goed doet","Werk harder om je plek terug te verdienen"], "Concurrentie maakt jullie allebei beter."),
  TS("Terugkomen na een blessure", "Bang dat het weer misgaat of dat je niet meer zo goed bent.", ["Bouw rustig op met de fysio","Vertrouw op je lichaam","Kijk terug op hoe ver je al bent"], "Na een blessure kom je vaak sterker terug, omdat je beter op je lichaam let."),
  TS("Je bent je motivatie kwijt", "Je hebt nergens zin in.", ["Begin klein: 5 minuten met de bal","Denk terug aan waarom je voetbal leuk vindt","Train eens met een vriend"], "Motivatie komt en gaat. Discipline en plezier houden je op de been."),
  TS("Kritiek van langs de lijn", "Gespannen of geïrriteerd.", ["Luister naar je trainer, niet naar het publiek","Praat thuis rustig over wat je wel en niet fijn vindt","Focus op je eigen spel"], "Jij speelt voor jezelf en je team."),
  TS("Druk van verwachtingen", "Je voelt dat je moet presteren.", ["Focus op je inzet, niet op het resultaat","Adem rustig voor de wedstrijd","Onthoud: je speelt omdat je het leuk vindt"], "Plezier en inzet zijn genoeg. De rest volgt."),
  TS("Een verloren finale", "Heel verdrietig: je was zo dichtbij.", ["Wees trots op hoe ver je kwam","Huil als je wilt, dat mag","Bedenk wat je meeneemt naar volgend jaar"], "Ook verliezers van een finale waren de beste op één na."),
  TS("De scheidsrechter fluit tegen je", "Je voelt je onrecht aangedaan.", ["Haal diep adem en accepteer het","Zeg niets terug","Focus op je volgende actie"], "Boos worden op de scheidsrechter levert nooit iets op."),
  TS("Je verliest een duel na het andere", "Je voelt je zwak.", ["Kijk naar je timing en positie","Gebruik je lichaam slimmer","Zoek een duel dat je wel kunt winnen"], "Duels winnen leer je door ze te blijven aangaan."),
  TS("Je bent moe van school en sport", "Alles voelt te veel.", ["Plan rust in je week","Slaap extra","Praat met je ouders over wat je kunt schrappen"], "Goed rusten is ook een deel van sterk worden."),
  TS("Een slechte wedstrijd na een goede week", "Verward: je had toch goed getraind?", ["Accepteer dat het niet altijd lukt","Kijk wat er anders was: slaap, eten, spanning?","Houd vertrouwen in je training"], "Eén wedstrijd zegt weinig. Wat je elke week doet, telt.")
];
const HERSTEL_STAPPEN = [
  ["Adem", "Haal 3 keer diep adem. Zo wordt je hoofd rustig."],
  ["Voel", "Het is oké om teleurgesteld te zijn. Geef het een naam: boos, verdrietig of bang."],
  ["Leer", "Wat kun je hiervan leren? Kies één ding."],
  ["Plan", "Wat ga je de volgende keer anders doen?"],
  ["Ga door", "Zet de eerste stap: één training, één oefening, één actie."]
];
