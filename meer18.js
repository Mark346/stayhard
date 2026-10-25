// Stay Hard – achttiende uitbreiding: heel veel nieuwe habits (klein, licht en groot).

// ---------- Kleine habits per thema ----------
const HT = (title, text, how, theme) => ({title, text, how, theme});
TIPS.push(
  // bewegen
  HT("10 squats bij elke tv-reclame", "Zo beweeg je ongemerkt veel meer.", "Doe 10 squats als de reclame begint.", "bewegen"),
  HT("Lopend bellen", "Bellen kan prima terwijl je loopt.", "Loop door het huis of de tuin als je belt.", "bewegen"),
  HT("Fietsen naar school", "Fietsen is gratis conditietraining.", "Fiets elke dag naar school als het kan.", "bewegen"),
  HT("Bal aan je voet in de tuin", "Elke aanraking telt voor je balgevoel.", "Neem 5 minuten de bal mee als je naar buiten gaat.", "bewegen"),
  HT("Trap op met twee treden tegelijk", "Een gratis krachtoefening voor je benen.", "Neem thuis de trap met twee treden tegelijk.", "bewegen"),
  HT("Jongleren voor het avondeten", "Een vast moment maakt het makkelijk.", "Houd 5 minuten hoog voordat je aan tafel gaat.", "bewegen"),
  HT("Een rondje om het blok", "Even naar buiten frist je op.", "Loop of ren na het huiswerk een rondje om het blok.", "bewegen"),
  HT("Planken tijdens een video", "Een video kijken kan ook actief.", "Doe een plank zolang het intro duurt.", "bewegen"),
  HT("Op één been je sokken aantrekken", "Balans oefenen zonder extra tijd.", "Trek je sokken staand op één been aan.", "bewegen"),
  HT("Elke dag 100 balcontacten", "Kleine aanrakingen maken je balvast.", "Tik de bal 100 keer tussen je voeten.", "bewegen"),
  HT("Sprintjes in de tuin", "Kort en snel houdt je benen scherp.", "Doe 5 korte sprintjes van 10 meter.", "bewegen"),
  HT("Touwtjespringen voor school", "Wakker en fit in 2 minuten.", "Spring 2 minuten touwtje voor je vertrekt.", "bewegen"),
  // eten
  HT("Een kleurrijk bord", "Hoe meer kleuren, hoe meer vitamines.", "Zorg voor minstens 3 kleuren op je bord.", "eten"),
  HT("Volkoren boterham bij de lunch", "Volkoren geeft langer energie.", "Kies volkoren brood in plaats van wit.", "eten"),
  HT("Noten als tussendoortje", "Noten geven goede vetten en energie.", "Neem een handje ongezouten noten.", "eten"),
  HT("Yoghurt na het sporten", "Yoghurt heeft eiwitten voor je spieren.", "Eet een bakje yoghurt met fruit na de training.", "eten"),
  HT("Peulvruchten een keer per week", "Bonen en linzen zitten vol eiwitten en vezels.", "Kies een recept met bonen of linzen.", "eten"),
  HT("Vis twee keer per week", "Vis is goed voor je hersenen en spieren.", "Vraag of er deze week twee keer vis gegeten wordt.", "eten"),
  HT("Ontbijt nooit overslaan", "Zonder ontbijt heb je minder energie op school en training.", "Eet altijd iets, ook als je weinig tijd hebt.", "eten"),
  HT("Een stuk fruit bij het ontbijt", "Een makkelijk extra stuk fruit.", "Leg een banaan of appel naast je bord.", "eten"),
  HT("Rustig kauwen", "Goed kauwen helpt je vertering.", "Kauw elke hap goed voor je doorslikt.", "eten"),
  HT("Groente uit het vuistje", "Rauwe groente is een makkelijke snack.", "Neem worteltjes of snoeptomaten mee naar school.", "eten"),
  HT("Een gezonde snack voor de training", "Met energie train je beter.", "Eet een uur voor de training een banaan of krentenbol.", "eten"),
  HT("Minder chips, meer popcorn", "Zelfgemaakte popcorn is lichter dan chips.", "Kies popcorn als je iets wilt knabbelen.", "eten"),
  // drinken
  HT("Een glas water bij elke maaltijd", "Zo drink je vanzelf genoeg.", "Zet altijd een glas water naast je bord.", "drinken"),
  HT("Bidon mee naar school", "Op school vergeet je snel te drinken.", "Neem een volle bidon mee en drink hem leeg.", "drinken"),
  HT("Drinken voor je dorst hebt", "Dorst betekent dat je al een beetje te weinig hebt gedronken.", "Neem elk uur een paar slokken.", "drinken"),
  HT("Thee in de winter", "Warme thee zonder suiker telt ook als drinken.", "Drink 's middags een kopje thee.", "drinken"),
  HT("Check de kleur van je plas", "Lichtgeel betekent dat je genoeg drinkt.", "Is hij donker? Drink dan meer.", "drinken"),
  HT("Water na het opstaan", "Na de nacht heeft je lichaam vocht nodig.", "Drink een groot glas water na het opstaan.", "drinken"),
  HT("Extra drinken bij warm weer", "Bij warmte zweet je veel meer.", "Neem een extra bidon mee als het warm is.", "drinken"),
  // slapen
  HT("Elke dag dezelfde bedtijd", "Een vaste tijd helpt je lichaam slapen.", "Ga elke avond op hetzelfde tijdstip naar bed.", "slapen"),
  HT("Een donkere kamer", "In het donker slaap je dieper.", "Doe je gordijnen helemaal dicht.", "slapen"),
  HT("Koele slaapkamer", "In een koele kamer slaap je beter.", "Zet 's avonds even je raam open.", "slapen"),
  HT("Geen cola of energiedrank", "Cafeïne houdt je wakker.", "Drink na de middag alleen water of melk.", "slapen"),
  HT("Lezen in plaats van scrollen", "Lezen maakt je moe, scrollen houdt je wakker.", "Lees 10 minuten in bed.", "slapen"),
  HT("Wekker aan de andere kant van de kamer", "Dan moet je opstaan om hem uit te zetten.", "Leg je wekker of telefoon verder weg.", "slapen"),
  HT("Een middagdutje na een zware training", "Een kort dutje helpt je herstel.", "Slaap maximaal 20 minuten.", "slapen"),
  HT("Morgen voorbereiden voor het slapen", "Dan lig je niet te piekeren.", "Schrijf op wat je morgen moet doen.", "slapen"),
  // hoofd
  HT("Elke dag één ding leren", "Elke dag een beetje slimmer.", "Lees de dagles of een tip in de app.", "hoofd"),
  HT("Een doel per week", "Een doel geeft je week richting.", "Schrijf op zondag je doel voor de week op.", "hoofd"),
  HT("Drie goede dingen", "Aan het eind van de dag kijken wat goed ging maakt je positiever.", "Noem 3 dingen die vandaag goed gingen.", "hoofd"),
  HT("Een compliment aan jezelf", "Ook jij verdient een compliment.", "Zeg tegen jezelf wat je goed deed vandaag.", "hoofd"),
  HT("Vraag je trainer om één tip", "Feedback helpt je sneller beter worden.", "Vraag na de training: wat kan ik beter doen?", "hoofd"),
  HT("Kijk naar een prof op jouw positie", "Leren door te kijken.", "Kijk 10 minuten naar een speler bij Analyse.", "hoofd"),
  HT("Ademhaling voor een wedstrijd", "Rustig ademen haalt de zenuwen weg.", "Adem 3 keer diep in en langzaam uit.", "hoofd"),
  HT("Je focuswoord voor vandaag", "Eén woord om je op te richten.", "Kies een woord zoals 'kijk' of 'durf'.", "hoofd"),
  HT("Help iemand zonder dat hij het vraagt", "Helpen maakt jou en de ander blij.", "Doe vandaag iets aardigs voor iemand.", "hoofd"),
  HT("Tijd voor familie", "Samen tijd doorbrengen geeft rust.", "Speel een spelletje of eet samen zonder telefoon.", "hoofd"),
  HT("Je fouten opschrijven als leerpunten", "Een fout wordt een les als je hem opschrijft.", "Schrijf na de training één leerpunt op.", "hoofd"),
  HT("Vijf minuten zonder scherm na school", "Even niks doen laadt je op.", "Ga 5 minuten zitten zonder telefoon.", "hoofd"),
  // herstel
  HT("Rekken na elke training", "Rekken houdt je soepel.", "Doe een strekroutine van 5 minuten.", "herstel"),
  HT("Foamrollen 's avonds", "Losse spieren slapen beter.", "Rol 5 minuten je benen.", "herstel"),
  HT("Een rustdag plannen", "Rust hoort bij trainen.", "Zet één rustdag per week in je planner.", "herstel"),
  HT("Benen omhoog na een wedstrijd", "Je benen herstellen sneller.", "Lig 5 minuten met je benen tegen de muur.", "herstel"),
  HT("Warme kleren na de training", "Afkoelen kan je spieren stijf maken.", "Trek direct na de training een warme trui aan.", "herstel"),
  HT("Een warme douche na koud weer", "Warmte ontspant je spieren.", "Neem na een koude training een warme douche.", "herstel")
);

// ---------- Lichte habits (bijna geen moeite) ----------
TIPS.push(
  LH("Een glimlach als je wakker wordt", "Een glimlach zet de toon voor je dag.", "Glimlach even voor je opstaat.", "hoofd"),
  LH("Eén slok water na elke wc-pauze", "Een makkelijk moment om te drinken.", "Neem een slok als je je handen wast.", "drinken"),
  LH("Je schouders naar achteren", "Een rechte houding voelt sterker.", "Rol je schouders 3 keer naar achteren.", "bewegen"),
  LH("Je telefoon op stil bij huiswerk", "Minder afleiding, sneller klaar.", "Zet hem op stil en leg hem omgedraaid.", "hoofd"),
  LH("Je handen wassen voor het eten", "Gezond blijven begint met schone handen.", "Altijd, zonder nadenken.", "eten"),
  LH("Je kussen opschudden", "Een klein klusje voor een fijn bed.", "Doe het bij het opmaken van je bed.", "slapen"),
  LH("Je tenen spreiden", "Goed voor je voeten na een dag in schoenen.", "Spreid je tenen een paar keer als je je sokken uittrekt.", "herstel"),
  LH("Een kort bedankje", "Dankjewel zeggen kost niets.", "Zeg het tegen de buschauffeur, juf of trainer.", "hoofd"),
  LH("Je bidon in het zicht", "Wat je ziet, drink je.", "Zet hem op je bureau.", "drinken"),
  LH("Licht aan bij het opstaan", "Licht helpt je lichaam wakker worden.", "Doe meteen het licht aan of de gordijnen open.", "slapen"),
  LH("Je naam op je bidon", "Dan raak je hem niet kwijt.", "Schrijf je naam erop met een stift.", "hoofd"),
  LH("Een paar keer op en neer op je tenen", "Je kuiten worden wakker.", "Doe het als je staat te wachten.", "bewegen"),
  LH("Je voetbalsokken bij elkaar", "Geen gezoek voor de training.", "Rol ze samen na het wassen.", "hoofd"),
  LH("Je ogen sluiten bij muziek", "Een minuut ontspanning.", "Luister één nummer met je ogen dicht.", "hoofd"),
  LH("Diep ademhalen bij de deur", "Een rustige start van je dag.", "Adem één keer diep in als je de deur uitgaat.", "hoofd"),
  LH("Een stuk fruit in je jaszak", "Altijd iets gezonds bij je.", "Stop er een mandarijn in.", "eten"),
  LH("Je schoenen netjes in je tas", "Een opgeruimde tas geeft rust.", "Gebruik een schoenenzak.", "hoofd"),
  LH("Even rechtop staan na het eten", "Goed voor je vertering.", "Sta even op en loop een paar stappen.", "bewegen"),
  LH("Je planner checken voor het slapen", "Dan weet je wat morgen komt.", "Kijk 1 minuut in je planner.", "hoofd"),
  LH("Een high five aan je ouders", "Een vrolijk moment samen.", "Geef er een als je thuiskomt.", "hoofd"),
  LH("Je kuiten even rekken bij het tandenpoetsen", "Twee dingen tegelijk.", "Zet één been naar achteren en rek je kuit.", "herstel"),
  LH("Een slok water voor je naar bed gaat", "Een klein beetje drinken voor de nacht.", "Niet te veel, één of twee slokken.", "drinken"),
  LH("Je armen schudden na het schrijven", "Ontspan je handen en armen.", "Schud ze 10 seconden los.", "herstel"),
  LH("Je doel op een post-it", "Je ziet het elke dag.", "Plak hem op je spiegel.", "hoofd"),
  LH("Een raam open bij het huiswerk", "Frisse lucht helpt je concentreren.", "Zet hem even open als je begint.", "hoofd"),
  LH("Je bed recht trekken", "Een nette kamer begint met je bed.", "Trek je dekbed recht als je opstaat.", "slapen"),
  LH("Je naam roepen op de training", "Teamgenoten weten dan dat je vrij staat.", "Roep 'hier' of je naam als je vrij bent.", "hoofd"),
  LH("Een appel in plaats van een koek", "Een makkelijke gezonde keuze.", "Kies één keer per dag fruit in plaats van iets zoets.", "eten"),
  LH("Je schouders laten zakken bij stress", "Spanning zit vaak in je schouders.", "Laat ze bewust zakken.", "hoofd"),
  LH("Je telefoon in een la", "Uit het zicht is uit je hoofd.", "Leg hem in een la bij het huiswerk.", "hoofd")
);

// ---------- Grote habits (een week lang) ----------
BIG_HABITS.push(
  BH("Een week elke dag fietsen", "Fietsen is gratis conditie.", "Fiets elke dag minstens 20 minuten."),
  BH("Een week elke dag 1000 aanrakingen", "Meer balcontact, meer balgevoel.", "Tel jongleren, dribbelen en muurpasses bij elkaar op."),
  BH("Een week elke dag 3 kleuren op je bord", "Meer kleuren, meer vitamines.", "Let bij elke maaltijd op de kleuren."),
  BH("Een week geen frisdrank en sap", "Alleen water, melk en thee.", "Neem altijd water mee."),
  BH("Een week elke avond rekken", "Soepele spieren voorkomen blessures.", "Kies elke avond een strekroutine."),
  BH("Een week elke dag naar buiten", "Daglicht en frisse lucht.", "Minstens 30 minuten buiten zijn."),
  BH("Een week om 21:00 naar bed", "Meer slaap, meer energie.", "Zet een wekker voor je bedtijd."),
  BH("Een week elke dag een dagles", "Elke dag een beetje slimmer.", "Lees de dagles en doe de oefening."),
  BH("Een week elke dag een compliment geven", "Een positiever team en een positiever jij.", "Geef elke dag minstens één compliment."),
  BH("Een week elke dag 10 minuten zwakke voet", "Na een week merk je al verschil.", "Plan het op een vast moment."),
  BH("Een week elke dag helpen met koken", "Leer koken en eet gezonder.", "Help elke dag mee met het avondeten."),
  BH("Een week elke dag 5 minuten ademhaling", "Meer rust in je hoofd.", "Doe 's avonds ademhaling 4-4-4."),
  BH("Een week elke dag een krachtoefening", "Elke dag een beetje sterker.", "Kies één oefening uit Kracht."),
  BH("Een week elke dag je kamer opruimen", "Een opgeruimde kamer geeft een opgeruimd hoofd.", "5 minuten per dag is genoeg."),
  BH("Een week geen telefoon aan tafel", "Meer aandacht voor je familie en je eten.", "Leg hem in een andere kamer."),
  BH("Een week elke dag 2 stuks fruit", "Vitamines voor je weerstand.", "Een stuk bij het ontbijt en een stuk na school."),
  BH("Een week elke dag je taken opschrijven en afmaken", "Discipline wordt een gewoonte.", "Gebruik Mijn taken bij Start."),
  BH("Een week elke dag kijken naar een prof", "Leer van de besten.", "Kijk elke dag 10 minuten bij Analyse."),
  BH("Een week vroeg opstaan", "Meer tijd in de ochtend, minder haast.", "Sta elke dag op dezelfde tijd op, ook in het weekend."),
  BH("Een week elke dag 3 lichte habits", "Kleine dingen, groot effect.", "Kies ze uit Gezond → Niet zwaar.")
);

// ---------- Hersteltips extra ----------
RECOVERY_TIPS.push(
  RT("Je benen schudden na de training", "Even losschudden helpt je spieren ontspannen.", "Schud je benen 20 seconden per been los."),
  RT("Een warme kruik op stijve spieren", "Warmte ontspant.", "Leg 10 minuten een warme kruik op je onderrug of bovenbeen."),
  RT("Water na het eten", "Water helpt je lichaam beter dan iets zoets na het eten.", "Drink een glas water na het eten."),
  RT("Rustig aan de dag na een zware training", "Je lichaam heeft tijd nodig om sterker te worden.", "Plan na een zware dag een lichte dag.")
);


// ---------- Nog meer habits ----------
TIPS.push(
  HT("Elke ochtend je doel hardop", "Wat je hardop zegt, onthoud je beter.", "Zeg je doel van vandaag in de spiegel.", "hoofd"),
  HT("Elke week een nieuw trucje", "Zo leer je er 52 per jaar.", "Kies elke maandag een trucje bij Trucjes.", "bewegen"),
  HT("Na school eerst iets gezonds", "Na school heb je trek. Kies slim.", "Pak fruit of yoghurt voordat je iets anders neemt.", "eten"),
  HT("Je trainingsspullen meteen wassen", "Schone spullen ruiken fris en zijn gezonder.", "Doe ze direct na de training in de was.", "hoofd"),
  HT("Een kwartier eerder naar bed", "Een beetje meer slaap maakt veel verschil.", "Ga vanavond 15 minuten eerder naar bed.", "slapen"),
  HT("Drink een glas water na het tandenpoetsen", "Een vast moment om te drinken.", "Elke ochtend en avond.", "drinken"),
  HT("Muurpasses tijdens het wachten", "Wachten op het eten? Train even.", "Doe 50 muurpasses.", "bewegen"),
  HT("Snijd groente voor de hele week", "Dan heb je altijd een gezonde snack klaar.", "Snijd op zondag wortels en komkommer in bakjes.", "eten"),
  HT("Vraag een vriend om samen te trainen", "Samen is leuker en je houdt het langer vol.", "Spreek een vast moment per week af.", "hoofd"),
  HT("Een kwartier geen scherm na het eten", "Je eten zakt rustig en je hoofd ook.", "Doe na het eten iets zonder scherm.", "hoofd"),
  HT("Zet je schoenen klaar voor de training", "Een kleine voorbereiding geeft rust.", "Zet ze de avond ervoor bij je tas.", "hoofd"),
  HT("Squats tijdens het tandenpoetsen", "Twee minuten poetsen = twee minuten benen trainen.", "Doe langzame squats terwijl je poetst.", "bewegen"),
  HT("Eet je bord leeg met groente eerst", "Zo eet je zeker je groente.", "Begin altijd met de groente.", "eten"),
  HT("Een rustig ontbijt aan tafel", "Rustig eten geeft een rustige start.", "Neem 10 minuten voor je ontbijt.", "eten"),
  HT("Je bidon schoonmaken", "Een schone bidon is gezonder.", "Spoel hem elke avond om met warm water.", "drinken"),
  HT("Een tijd zonder schermen in je slaapkamer", "Je slaapkamer is voor slapen.", "Laat tablet en telefoon 's nachts buiten je kamer.", "slapen"),
  HT("Elke dag 5 minuten lezen over voetbal", "Kennis maakt je slimmer op het veld.", "Lees een tip, les of spelersanalyse in de app.", "hoofd"),
  HT("Je doel van de week afvinken", "Een doel halen voelt goed.", "Vink op zondag af of je je doel haalde.", "hoofd"),
  HT("Rekken na het opstaan", "Soepel de dag beginnen.", "Rek 2 minuten je benen en rug.", "herstel"),
  HT("Een warme trui na het douchen", "Warm blijven helpt je herstel.", "Trek direct iets warms aan.", "herstel"),
  HT("Een gezonde lunch meenemen", "Wat je meeneemt, eet je.", "Pak 's avonds je lunch al in.", "eten"),
  HT("Elke dag 10 push-ups", "Een klein beetje elke dag maakt je sterk.", "Doe ze direct na het opstaan.", "bewegen"),
  HT("Elke dag 30 seconden plank", "Een sterke romp in een halve minuut.", "Doe het voor je gaat douchen.", "bewegen"),
  HT("Je kleren voor morgen klaarleggen", "Geen keuzestress in de ochtend.", "Leg ze op een stoel voor je gaat slapen.", "slapen"),
  HT("Een dankjewel na de training", "Je trainer doet het ook voor jou.", "Bedank hem bij het weggaan.", "hoofd"),
  HT("Water in plaats van sportdrank", "Voor de meeste trainingen is water genoeg.", "Neem gewoon water mee.", "drinken"),
  HT("Elke week je doelen bekijken", "Weten waar je staat, helpt je verder.", "Kijk op zondag naar je records en challenges.", "hoofd"),
  HT("Spelen met een kleinere bal", "Een kleine bal traint je techniek extra.", "Jongleer met een tennisbal of maat 1-bal.", "bewegen"),
  HT("Rustig eten voor een wedstrijd", "Te veel of te laat eten maakt je zwaar.", "Eet 3 uur voor de wedstrijd je laatste maaltijd.", "eten"),
  HT("Je hoofd leegmaken voor het slapen", "Piekeren houdt je wakker.", "Schrijf je gedachten op een papiertje.", "slapen")
);

// ---------- Opruimen ----------
(() => {
  const dedupe = arr => { const seen = new Set(), keep = arr.filter(x => { if (seen.has(x.title)) return false; seen.add(x.title); return true; }); arr.length = 0; arr.push(...keep); };
  [TIPS, BIG_HABITS, RECOVERY_TIPS].forEach(dedupe);
})();
