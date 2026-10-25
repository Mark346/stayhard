// Stay Hard – heel veel extra spelers om te analyseren, per positie.
// Alleen speelstijl en wat je ervan kunt leren (geen clubs of uitslagen).

const SPN = (pos, lijst) => lijst.map(([name, stijl, sterk, leer, oefening, yt]) => ({...SP(name, pos, stijl, sterk, leer, oefening, yt || name + " skills analysis"), _pos: pos}));
const NIEUWE_SPELERS = {
  // ---------- Keepers ----------
  k: SPN("Keeper", [
    ["Ederson", "Een keeper die voetbalt als een middenvelder, met heel lange en precieze uittrappen.", ["Lange passes met de voet","Rust onder druk","Uitkomen buiten de zestien"], "Een keeper met een goede trap kan een aanval in één bal beginnen.", "Trap 20 ballen naar een vak op 40 meter.", "ederson passing analysis"],
    ["Marc-André ter Stegen", "Rustig aan de bal en sterk op de lijn, met goede reflexen.", ["Opbouw met korte passes","Reflexen","Één-tegen-één"], "Rust aan de bal geeft het hele team vertrouwen.", "Speel 10 minuten mee in een rondo als keeper.", "ter stegen saves analysis"],
    ["Emiliano Martínez", "Een fel en zelfverzekerde keeper die veel uitstraling heeft bij penalty's.", ["Penalty's","Uitstraling","Reflexen"], "Zelfvertrouwen en lichaamstaal kunnen een nemer onzeker maken.", "Oefen penalty's stoppen: wacht tot de bal geraakt wordt.", "emiliano martinez penalties"],
    ["Yann Sommer", "Klein voor een keeper, maar heel snel en wendbaar.", ["Snelheid","Reflexen","Positiekiezen"], "Lengte is niet alles: snelheid en positie maken het verschil.", "Laat iemand snel achter elkaar schieten en reageer.", "yann sommer saves"],
    ["Petr Čech", "Een lange, rustige keeper die bijna altijd goed stond.", ["Positiekiezen","Rust","Hoge ballen"], "Wie goed staat, hoeft minder spectaculair te duiken.", "Oefen je positie bij schoten uit verschillende hoeken.", "petr cech saves"],
    ["Peter Schmeichel", "Een enorme keeper die zijn hele lichaam gebruikte om ballen te stoppen.", ["Groot maken (stervorm)","Leiderschap","Snel uitgooien"], "Maak jezelf zo groot mogelijk bij een één-tegen-één.", "Oefen de stervorm: armen en benen wijd bij een schot van dichtbij.", "schmeichel star jump save"],
    ["Oliver Kahn", "Een keeper met een enorme wil en felheid.", ["Mentaliteit","Reflexen","Coachen"], "Een keeper die nooit opgeeft, maakt het team sterker.", "Coach je verdediging tijdens de hele training.", "oliver kahn saves"],
    ["David de Gea", "Een keeper met bliksemsnelle reflexen, vaak met zijn voeten.", ["Reflexen","Reddingen met de voeten","Één-tegen-één"], "Ook je voeten kunnen een bal tegenhouden.", "Laat iemand laag schieten en red met je voeten.", "de gea saves with feet"],
    ["Gianluigi Donnarumma", "Een lange keeper met een groot bereik en sterk bij penalty's.", ["Bereik","Penalty's","Rust"], "Gebruik je lengte en blijf rustig.", "Oefen reddingen in de hoeken met grote stappen.", "donnarumma saves"],
    ["Justin Bijlow", "Een moderne keeper die meevoetbalt en snel reageert.", ["Opbouw","Reflexen","Uitkomen"], "Een keeper is ook een voetballer.", "Speel als keeper een partijtje mee met je voeten."],
    ["André Onana", "Een keeper die heel actief meedoet in de opbouw.", ["Passen onder druk","Uitkomen","Durf"], "Durf de bal te vragen, ook als keeper.", "Pass onder druk naar teamgenoten in een vak."],
    ["Unai Simón", "Een rustige keeper die goed meespeelt met de voeten.", ["Opbouw","Rust","Positie"], "Rustig blijven na een fout is belangrijk.", "Oefen korte opbouw met je verdedigers."],
    ["Hugo Lloris", "Een snelle keeper die vaak uitkomt bij doorbraken.", ["Uitkomen","Reflexen","Leiderschap"], "Op tijd uitkomen voorkomt veel kansen.", "Oefen uitkomen bij steekballen."],
    ["Mark Flekken", "Een keeper die goed is in opbouwen en lange ballen.", ["Lange trap","Opbouw","Rust"], "Kies slim tussen kort en lang.", "Oefen kort en lang uittrappen, om en om."]
  ]),
  // ---------- Centrale verdedigers ----------
  cv: SPN("Verdediger", [
    ["Franz Beckenbauer", "Een elegante verdediger die met de bal naar voren kwam en het spel opbouwde.", ["Opbouwen","Overzicht","Met de bal opkomen"], "Een verdediger kan ook een spelmaker zijn.", "Dribbel vanuit de verdediging naar voren en pass naar een middenvelder.", "beckenbauer analysis"],
    ["Franco Baresi", "Klein voor een verdediger, maar hij las het spel als geen ander.", ["Spel lezen","Buitenspelval","Timing"], "Slim verdedigen is belangrijker dan groot zijn.", "Oefen samen met een teamgenoot de buitenspelval.", "franco baresi defending"],
    ["Fabio Cannavaro", "Niet lang, maar heel snel, sprongkrachtig en met een perfecte timing.", ["Timing van tackles","Sprongkracht","Snelheid"], "Timing wint duels, niet alleen lengte.", "Oefen springen en koppen op het hoogste punt.", "cannavaro defending"],
    ["Carles Puyol", "Een strijder die elke bal wilde winnen en een echte leider was.", ["Inzet","Leiderschap","Blokken"], "Inzet en lef zijn net zo belangrijk als techniek.", "Ga op de training elk duel vol aan.", "puyol defending"],
    ["Gerard Piqué", "Een lange verdediger die rustig opbouwde en goed kopte.", ["Opbouwen","Koppen","Positie"], "Rust aan de bal achterin geeft het team rust.", "Oefen passes door de linie naar een middenvelder."],
    ["John Terry", "Een leider die zich voor elke bal wierp en sterk was in de lucht.", ["Koppen","Blokken","Leiderschap"], "Een verdediger die alles geeft, inspireert het team.", "Oefen het blokken van schoten met je lichaam."],
    ["Nemanja Vidić", "Een harde, sterke verdediger die duels bijna altijd won.", ["Duels","Koppen","Kracht"], "Kracht en vastberadenheid winnen duels.", "Oefen kopduels met een teamgenoot."],
    ["Thiago Silva", "Een rustige en slimme verdediger met een uitstekende techniek.", ["Positiekiezen","Rust","Techniek"], "Wie slim staat, hoeft niet te rennen.", "Speel een partijtje en let op je positie."],
    ["Marquinhos", "Snel, slim en flexibel: hij kan ook op het middenveld spelen.", ["Snelheid","Inzicht","Meerdere posities"], "Wie meerdere posities kan spelen, is waardevol.", "Speel een training op een andere positie."],
    ["Antonio Rüdiger", "Een snelle en felle verdediger die veel praat en motiveert.", ["Snelheid","Felheid","Coachen"], "Energie en praten maken een verdediging sterker.", "Roep tijdens de training steeds aanwijzingen."],
    ["Ronald Koeman", "Een verdediger met een geweldige trap: lange ballen, vrije trappen en penalty's.", ["Lange passes","Vrije trappen","Afstandsschoten"], "Ook een verdediger kan scoren met een goede trap.", "Oefen lange passes en vrije trappen.", "ronald koeman free kick"],
    ["Frank de Boer", "Een slimme verdediger met een uitstekende linkervoet voor lange ballen.", ["Lange ballen","Spel lezen","Rust"], "Een goede lange bal kan een hele verdediging uitspelen.", "Geef 20 lange ballen naar de diepte."],
    ["Stefan de Vrij", "Een rustige verdediger die goed positie kiest en zelden fouten maakt.", ["Positiekiezen","Rust","Koppen"], "Weinig fouten maken is een kracht.", "Speel een partijtje en kies steeds de veilige oplossing."],
    ["Nathan Aké", "Een linksbenige verdediger die centraal en als back kan spelen.", ["Meerdere posities","Linksbenig","Rust"], "Flexibel zijn maakt je onmisbaar.", "Oefen passes met je linkervoet."],
    ["Kim Min-jae", "Een snelle, sterke verdediger die durft in te stappen.", ["Instappen","Snelheid","Duels"], "Op het goede moment instappen wint de bal.", "Oefen het instappen bij een pass naar je tegenstander."],
    ["Raphaël Varane", "Een snelle verdediger met rust en een goede timing.", ["Snelheid","Timing","Rust"], "Snelheid en rust samen maken je bijna onpasseerbaar.", "Oefen sprints terug na een lange bal."],
    ["Mats Hummels", "Een verdediger die het spel leest en met lange passes opbouwt.", ["Spel lezen","Lange passes","Instappen"], "Inzicht is je belangrijkste wapen.", "Kijk naar wedstrijden en voorspel waar de bal heen gaat."],
    ["Giorgio Chiellini", "Een felle, sterke verdediger die vocht voor elke bal.", ["Duels","Mentaliteit","Koppen"], "Wilskracht is besmettelijk.", "Ga op de training elk duel aan alsof het een finale is."],
    ["Pepe", "Een snelle en felle verdediger die tot op hoge leeftijd topfit bleef.", ["Felheid","Snelheid","Fitheid"], "Goed voor je lichaam zorgen houdt je lang fit.", "Doe elke week je blessurepreventie-oefeningen."],
    ["Jurriën Timber (centraal)", "Ook centraal sterk door zijn snelheid en felheid in duels.", ["Felheid","Snelheid","Opbouwen"], "Klein en fel kan ook centraal.", "Oefen één-tegen-één verdedigen in een vak."]
  ]),
  // ---------- Backs ----------
  lb: SPN("Verdediger", [
    ["Roberto Carlos", "Een supersnelle linksback met een keihard schot.", ["Snelheid","Hard schot","Mee aanvallen"], "Een back kan ook een wapen zijn in de aanval.", "Oefen hard schieten van afstand met je wreef.", "roberto carlos analysis"],
    ["Ashley Cole", "Een linksback die heel goed verdedigde en ook snel meekwam.", ["Één-tegen-één verdedigen","Snelheid","Inzet"], "Eerst verdedigen, dan aanvallen.", "Oefen één-tegen-één verdedigen langs de zijlijn."],
    ["Jordi Alba", "Een snelle linksback die steeds diep liep en voorzetten gaf.", ["Diepe loopacties","Voorzetten","Combineren"], "Loop diep als je vleugelspeler naar binnen komt.", "Oefen een overlap en een lage voorzet."],
    ["Giovanni van Bronckhorst", "Een linksback met een goede trap en veel rust.", ["Lange passes","Rust","Afstandsschoten"], "Een goede trap maakt je gevaarlijk van ver.", "Schiet 20 keer van 25 meter."],
    ["Patrice Evra", "Een energieke linksback die altijd meekwam en een leider was.", ["Energie","Leiderschap","Snelheid"], "Energie maakt je team sterker.", "Sprint mee bij elke aanval op de training."],
    ["Nuno Mendes", "Een jonge, supersnelle linksback die makkelijk langs zijn man gaat.", ["Snelheid","Dribbelen","Voorzetten"], "Een back met snelheid kan elke verdediging openbreken.", "Dribbel 30 meter op snelheid langs de zijlijn."],
    ["Destiny Udogie", "Een sterke en snelle linksback die graag naar binnen komt.", ["Kracht","Snelheid","Naar binnen komen"], "Een back kan ook als extra middenvelder spelen.", "Oefen naar binnen dribbelen en een pass."],
    ["Daley Blind", "Een slimme linksback en verdediger met een uitstekende pass.", ["Inzicht","Lange passes","Rust"], "Slim spelen maakt snelheid minder belangrijk.", "Geef lange passes naar een teamgenoot op de andere vleugel."]
  ]),
  rb: SPN("Verdediger", [
    ["Philipp Lahm", "Klein, slim en technisch: rechtsback, linksback én middenvelder.", ["Inzicht","Techniek","Meerdere posities"], "Slimheid en techniek maken je overal inzetbaar.", "Speel een training als back én als middenvelder.", "philipp lahm analysis"],
    ["Cafu", "Een rechtsback met eindeloos loopvermogen die steeds meeging.", ["Loopvermogen","Voorzetten","Snelheid"], "Een back die blijft lopen, is goud waard.", "Sprint 10 keer heen en terug langs de zijlijn.", "cafu analysis"],
    ["João Cancelo", "Een technische back die vaak naar het middenveld schuift.", ["Techniek","Dribbelen","Passes naar binnen"], "Een back kan ook spelmaker zijn.", "Oefen dribbelen naar binnen en een steekpass."],
    ["Reece James", "Een sterke rechtsback met een goede voorzet en een hard schot.", ["Voorzetten","Kracht","Schieten"], "Een goede voorzet is een assist in wording.", "Geef 15 voorzetten vanaf de rechterkant."],
    ["Dani Carvajal", "Een felle rechtsback die goed verdedigt en slim meekomt.", ["Verdedigen","Felheid","Overlappen"], "Felheid en slim meelopen gaan samen.", "Oefen overlappen langs je vleugelspeler."],
    ["Kieran Trippier", "Een rechtsback met een geweldige rechtervoet voor voorzetten en vrije trappen.", ["Voorzetten","Vrije trappen","Rust"], "Een goede trap maakt van elke spelhervatting een kans.", "Oefen gekrulde voorzetten op een vak."],
    ["Denzel Dumfries (aanvallend)", "Krachtig en altijd gevaarlijk bij de tweede paal.", ["Kracht","Koppen","Diepe loopacties"], "Een back die in de zestien opduikt, scoort ook.", "Oefen inlopen naar de tweede paal bij voorzetten van links."],
    ["Lutsharel Geertruida", "Een flexibele verdediger die back en centraal kan spelen.", ["Flexibel","Opbouwen","Duels"], "Flexibel zijn helpt je in elk team.", "Speel op verschillende posities op de training."]
  ]),
  // ---------- Controlerende middenvelders ----------
  vm: SPN("Middenvelder", [
    ["Casemiro", "Een harde, slimme controleur die ballen onderschept en het team beschermt.", ["Onderscheppen","Duels","Positiekiezen"], "Een controleur die goed staat, voorkomt veel tegengoals.", "Oefen onderscheppingen in een rondo.", "casemiro analysis"],
    ["Claude Makélélé", "De controleur die zo goed was dat zijn rol naar hem genoemd werd.", ["Positie","Balverovering","Simpel spelen"], "Simpel spelen is een kunst.", "Speel een partijtje met maximaal twee keer raken.", "makelele role analysis"],
    ["Xabi Alonso", "Een controleur met perfecte lange passes en veel overzicht.", ["Lange passes","Overzicht","Rust"], "Een goede pass kan het spel in één keer verplaatsen.", "Geef 20 lange passes naar de andere kant.", "xabi alonso passing"],
    ["Edgar Davids", "Een felle middenvelder die overal opdook en nooit opgaf.", ["Felheid","Loopvermogen","Duels"], "Energie en felheid maken je onmisbaar.", "Zet in een partijtje steeds druk op de bal.", "edgar davids analysis"],
    ["Patrick Vieira", "Een lange, sterke middenvelder die ballen won en met grote passen opkwam.", ["Duels","Opkomen","Leiderschap"], "Kracht en techniek samen maken je dominant.", "Oefen balverovering en direct naar voren dribbelen."],
    ["Roy Keane", "Een leider en harde werker die het middenveld controleerde.", ["Leiderschap","Duels","Mentaliteit"], "Een leider eist het beste van zichzelf en anderen.", "Neem op de training de leiding in een oefening."],
    ["Fabinho", "Een lange controleur met goede timing in tackles.", ["Tackles","Positie","Rust"], "Timing is alles bij een tackle.", "Oefen het timen van een tackle op een rollende bal."],
    ["Aurélien Tchouaméni", "Een atletische controleur die veel ballen wint en ook van afstand schiet.", ["Balverovering","Atletisch","Afstandsschoten"], "Een controleur kan ook gevaarlijk zijn.", "Schiet na een balverovering van afstand."],
    ["Marten de Roon", "Een harde werker die altijd op de goede plek staat.", ["Werklust","Positie","Teamgeest"], "Hard werken voor het team is een kwaliteit.", "Loop in een partijtje elke keer mee terug."],
    ["Nigel de Jong", "Een felle ballenafpakker die het middenveld schoonhield.", ["Ballen afpakken","Felheid","Simpel spelen"], "Na balverovering simpel doorspelen is de beste keuze.", "Oefen balverovering en een korte pass."],
    ["Mark van Bommel", "Een slimme controleur met leiderschap en een goede pass.", ["Leiderschap","Slimheid","Passing"], "Slim spelen en coachen maken een team sterker.", "Coach je teamgenoten op het middenveld."],
    ["Bastian Schweinsteiger", "Een middenvelder die alles kon: verdedigen, opbouwen en scoren.", ["Veelzijdigheid","Mentaliteit","Passing"], "Wie alles een beetje kan, is altijd nuttig.", "Oefen elke dag een ander onderdeel van je spel."],
    ["João Palhinha", "Een controleur die bekendstaat om zijn vele balveroveringen.", ["Tackles","Duels","Positie"], "Een goede tackle is net zo mooi als een goal.", "Oefen tackles op een veilige manier op zacht gras."]
  ]),
  // ---------- Centrale middenvelders ----------
  cm: SPN("Middenvelder", [
    ["Steven Gerrard", "Een complete middenvelder: hard werken, lange passes en schoten van afstand.", ["Afstandsschoten","Lange passes","Leiderschap"], "Een leider die in belangrijke momenten opstaat.", "Schiet 20 keer van 25 meter met je wreef.", "steven gerrard long shots"],
    ["Frank Lampard", "Een middenvelder die op het goede moment in de zestien opdook en veel scoorde.", ["Laat in de zestien komen","Afronden","Afstandsschoten"], "Op het goede moment komen is belangrijker dan altijd voorin staan.", "Oefen een loopactie van achteruit naar de zestien.", "lampard runs into box"],
    ["Paul Scholes", "Een slimme middenvelder met perfecte passes en een geweldig schot.", ["Passing","Overzicht","Schieten"], "Een goede pass is soms mooier dan een goal.", "Speel 20 lange passes op een vak."],
    ["Clarence Seedorf", "Een sterke en technische middenvelder die overal kon spelen.", ["Techniek","Kracht","Veelzijdigheid"], "Techniek en kracht samen maken je compleet.", "Oefen afschermen en wegdraaien."],
    ["Teun Koopmeiners", "Een middenvelder met een sterke linkervoet en goede vrije trappen.", ["Linkervoet","Vrije trappen","Passing"], "Een goede trap maakt je gevaarlijk bij spelhervattingen.", "Oefen vrije trappen met je sterke voet."],
    ["Jerdy Schouten", "Een rustige middenvelder die zelden de bal verliest.", ["Rust","Balbezit","Positie"], "Rust aan de bal geeft het team vertrouwen.", "Speel een rondo zonder de bal te verliezen."],
    ["Vitinha", "Een kleine, technische middenvelder die het spel laat lopen.", ["Techniek","Snel passen","Draaien"], "Klein zijn met goede techniek is een voordeel in kleine ruimtes.", "Oefen draaien met de bal in een klein vak."],
    ["Nicolò Barella", "Een energieke middenvelder die overal is en ook scoort.", ["Energie","Loopvermogen","Afstandsschoten"], "Energie en techniek maken je onmisbaar.", "Doe sprints van zestien tot zestien met een schot aan het eind."],
    ["Enzo Fernández", "Een middenvelder met een uitstekende pass en een goed schot.", ["Passing","Schieten","Inzicht"], "Overzicht maakt het verschil.", "Kijk voor elke pass rond."],
    ["Alexis Mac Allister", "Een slimme middenvelder die altijd de goede keuze maakt.", ["Keuzes maken","Techniek","Werklust"], "De juiste keuze is vaak de simpelste.", "Speel een partijtje en kies steeds de makkelijkste pass."],
    ["Dominik Szoboszlai", "Een energieke middenvelder met een hard schot en goede vrije trappen.", ["Hard schot","Vrije trappen","Energie"], "Een goed schot van afstand is een wapen.", "Schiet 15 vrije trappen over een muurtje."],
    ["Rafael van der Vaart", "Een middenvelder met een geweldige linkervoet en veel fantasie.", ["Linkervoet","Passes","Afstandsschoten"], "Fantasie en techniek maken het verschil.", "Oefen passes met de buitenkant van je voet."],
    ["Davy Klaassen", "Een middenvelder die slim in de zestien opduikt.", ["Loopacties","Afronden","Werklust"], "Slim lopen levert goals op.", "Oefen loopacties naar de tweede paal."],
    ["Mason Mount", "Een hardwerkende middenvelder die druk zet en goed afrondt.", ["Druk zetten","Afronden","Werklust"], "Druk zetten begint bij de middenvelders.", "Zet in een partijtje direct druk na balverlies."]
  ]),
  // ---------- Aanvallende middenvelders ----------
  cam: SPN("Middenvelder", [
    ["Juan Román Riquelme", "Een langzame maar geniale spelmaker die het tempo bepaalde.", ["Overzicht","Passes","Balbezit"], "Je hoeft niet snel te zijn als je snel denkt.", "Speel een partijtje en houd de bal met afschermen.", "riquelme skills"],
    ["Mesut Özil", "Een spelmaker die de beste passes zag, vaak met de linkervoet.", ["Assists","Overzicht","Aanname"], "Een assist is net zo belangrijk als een goal.", "Oefen steekpasses door twee pionnen.", "ozil assists analysis"],
    ["Francesco Totti", "Een spits en spelmaker met geweldige techniek en fantasie.", ["Techniek","Lobben","Passes"], "Fantasie maakt het spel mooi.", "Oefen een lob over een pion."],
    ["David Silva", "Een kleine, wendbare spelmaker die altijd vrijstond.", ["Wendbaarheid","Vrijlopen","Passing"], "Altijd aanspeelbaar zijn is een kunst.", "Loop in een partijtje steeds vrij tussen de linies."],
    ["Christian Eriksen", "Een spelmaker met precieze passes en goede vrije trappen.", ["Passes","Vrije trappen","Overzicht"], "Precisie maakt een pass gevaarlijk.", "Oefen passes op een pion op 15 meter."],
    ["James Rodríguez", "Een spelmaker met een zachte linkervoet en mooie goals.", ["Linkervoet","Volleys","Passes"], "Een goede techniek maakt mooie goals mogelijk.", "Oefen volleys met je sterke voet."],
    ["Hakim Ziyech", "Een creatieve speler met een fantastische linkervoet en lange passes.", ["Linkervoet","Lange passes","Schieten"], "Durf de moeilijke pass te proberen.", "Oefen gekrulde passes in de loop van een teamgenoot."],
    ["Paulo Dybala", "Een technische speler met een geweldige linkervoet en goede vrije trappen.", ["Linkervoet","Dribbelen","Vrije trappen"], "Techniek in kleine ruimtes maakt je gevaarlijk.", "Oefen vrije trappen over een muurtje."],
    ["Rui Costa", "Een elegante spelmaker met veel overzicht.", ["Overzicht","Passes","Rust"], "Elegant voetbal begint met rust.", "Speel een rondo met maximaal twee keer raken."],
    ["Michael Laudrup", "Een spelmaker die passes gaf zonder te kijken.", ["No-look passes","Overzicht","Techniek"], "Wie vooraf kijkt, hoeft tijdens de pass niet meer te kijken.", "Oefen: kijk eerst, en pass dan zonder te kijken."],
    ["Wesley Sneijder (spelmaker)", "Twee goede voeten en heel precieze lange passes.", ["Tweebenig","Lange passes","Afstandsschoten"], "Twee goede voeten maken je onvoorspelbaar.", "Pass 20 keer met links en 20 keer met rechts."]
  ]),
  // ---------- Linksbuiten ----------
  lw: SPN("Aanvaller", [
    ["Eden Hazard", "Een kleine, sterke dribbelaar met een laag zwaartepunt.", ["Dribbelen","Afschermen","Versnellen"], "Laag en sterk aan de bal maakt je moeilijk af te pakken.", "Dribbel 5 minuten met kleine tikjes en versnel.", "eden hazard dribbling"],
    ["Marc Overmars", "Een supersnelle linksbuiten die langs iedereen sprintte.", ["Snelheid","Diepte","Afronden"], "Snelheid is een wapen als je hem slim gebruikt.", "Sprint met de bal langs een pion en schiet."],
    ["Ryan Giggs", "Een snelle, wendbare linksbuiten die heel lang op het hoogste niveau speelde.", ["Dribbelen","Snelheid","Fitheid"], "Goed voor je lichaam zorgen houdt je lang fit.", "Doe elke dag een strekroutine.", "ryan giggs dribbling"],
    ["Khvicha Kvaratskhelia", "Een creatieve dribbelaar die steeds de één-tegen-één opzoekt.", ["Dribbelen","Creativiteit","Schieten"], "Durf creatief te zijn met de bal.", "Oefen elke dag een nieuw trucje."],
    ["Jack Grealish", "Een dribbelaar die de bal goed afschermt en veel overtredingen versiert.", ["Afschermen","Dribbelen","Balbezit"], "De bal houden geeft je team rust.", "Oefen afschermen tegen een vriend."],
    ["Sadio Mané", "Een snelle, hardwerkende aanvaller met veel energie.", ["Snelheid","Druk zetten","Afronden"], "Hard werken en snelheid samen maken je gevaarlijk.", "Zet druk en sprint daarna diep."],
    ["Luis Díaz", "Een snelle dribbelaar die nooit stopt met lopen.", ["Snelheid","Dribbelen","Werklust"], "Blijf lopen, ook zonder bal.", "Doe intervallen met en zonder bal."],
    ["Steven Bergwijn", "Een snelle aanvaller met een goede eerste aanraking.", ["Snelheid","Aanname","Diepte"], "Een goede eerste aanraking maakt je sneller.", "Oefen aannames in de loop."],
    ["Noa Lang", "Een brutale dribbelaar met veel lef.", ["Lef","Dribbelen","Trucjes"], "Lef maakt het verschil in de één-tegen-één.", "Ga in elk partijtje de één-tegen-één aan."],
    ["Raheem Sterling", "Een snelle aanvaller die goed loopt in de zestien.", ["Snelheid","Loopacties","Afronden"], "Goede loopacties leveren makkelijke goals op.", "Oefen loopacties naar de tweede paal."]
  ]),
  // ---------- Rechtsbuiten ----------
  rw: SPN("Aanvaller", [
    ["David Beckham", "Een rechtsbuiten met de beste voorzetten en vrije trappen.", ["Voorzetten","Vrije trappen","Werklust"], "Een geweldige trap kun je trainen door eindeloos te oefenen.", "Oefen 20 gekrulde voorzetten en vrije trappen.", "beckham crossing technique"],
    ["Luís Figo", "Een technische rechtsbuiten die goed dribbelde en voorzette.", ["Dribbelen","Voorzetten","Techniek"], "Een buitenspeler moet kunnen dribbelen én voorzetten.", "Dribbel langs een pion en geef een voorzet."],
    ["Ousmane Dembélé", "Een snelle dribbelaar die met beide voeten even goed is.", ["Tweebenig","Snelheid","Dribbelen"], "Twee goede voeten maken je onvoorspelbaar.", "Oefen alles met beide voeten."],
    ["Riyad Mahrez", "Een technische rechtsbuiten met een zachte linkervoet en een geweldige aanname.", ["Aanname","Techniek","Naar binnen snijden"], "Een goede aanname maakt alles makkelijker.", "Oefen aannames uit de lucht."],
    ["Michael Olise", "Een creatieve rechtsbuiten met een geweldige linkervoet.", ["Linkervoet","Creativiteit","Assists"], "Creativiteit en techniek maken het verschil.", "Oefen passes met de buitenkant."],
    ["Ángel Di María", "Een creatieve linkspoot met mooie assists en goals in grote wedstrijden.", ["Assists","Lobben","Creativiteit"], "Durf in grote wedstrijden je spel te spelen.", "Oefen een lob over de keeper."],
    ["Kingsley Coman", "Een snelle buitenspeler die langs de lijn gaat en voorzet.", ["Snelheid","Voorzetten","Dribbelen"], "Langs de lijn gaan maakt het veld groot.", "Dribbel op snelheid langs de lijn en geef een voorzet."],
    ["Jesús Navas", "Een snelle rechtsbuiten die later ook rechtsback werd.", ["Snelheid","Voorzetten","Werklust"], "Hard werken maakt je op meerdere posities waardevol.", "Sprint mee en sprint terug in elke aanval."],
    ["Bukayo Saka (rechtsbuiten)", "Linksbenig aan de rechterkant: naar binnen snijden en schieten.", ["Naar binnen snijden","Schieten","Werklust"], "Speel op je sterke punt.", "Oefen naar binnen snijden en schieten in de verre hoek."]
  ]),
  // ---------- Spitsen ----------
  sp: SPN("Aanvaller", [
    ["Ronaldo Nazário", "Een explosieve spits met snelheid, kracht en geweldige schijnbewegingen.", ["Snelheid met bal","Schijnbewegingen","Afronden"], "Snelheid en techniek samen zijn bijna niet te stoppen.", "Oefen schijnbewegingen op snelheid.", "ronaldo nazario skills"],
    ["Romário", "Een kleine spits die in de zestien altijd de goede plek vond.", ["Positie in de zestien","Afronden","Rust"], "Een kleine ruimte is genoeg voor een goede spits.", "Oefen afronden in één keer."],
    ["Gabriel Batistuta", "Een spits met een keihard schot.", ["Hard schot","Afronden","Kracht"], "Een hard en zuiver schot is een wapen.", "Schiet 20 keer hard met je wreef."],
    ["Alan Shearer", "Een sterke spits die scoorde met hoofd en voeten.", ["Koppen","Kracht","Afronden"], "Een spits moet op alle manieren kunnen scoren.", "Oefen kopballen én schoten."],
    ["Didier Drogba", "Een sterke spits die de bal vasthield en scoorde in grote wedstrijden.", ["Kracht","Bal vasthouden","Koppen"], "Een spits die de bal vasthoudt, laat het team opschuiven.", "Oefen bal afschermen met je rug naar het doel."],
    ["Samuel Eto'o", "Een snelle spits met een goede afronding en veel werklust.", ["Snelheid","Afronden","Werklust"], "Hard werken als spits levert ook goals op.", "Zet druk en sprint daarna diep."],
    ["Sergio Agüero", "Een kleine, sterke spits met een snelle afronding.", ["Snel afronden","Laag zwaartepunt","Wendbaarheid"], "Snel schieten verrast de keeper.", "Oefen schieten binnen 2 aanrakingen."],
    ["Luis Suárez", "Een slimme spits die altijd een oplossing vond in de zestien.", ["Slimheid","Afronden","Combineren"], "Slim spelen vindt altijd een gat.", "Oefen afronden onder druk van een verdediger."],
    ["Zlatan Ibrahimović", "Een lange spits met de techniek van een kleine speler en veel zelfvertrouwen.", ["Techniek","Kracht","Zelfvertrouwen"], "Geloof in jezelf maakt het onmogelijke mogelijk.", "Oefen aannames uit de lucht en volleys."],
    ["Klaas-Jan Huntelaar", "Een echte goalgetter die altijd op de goede plek stond.", ["Positie","Afronden","Koppen"], "Een goede spits weet waar de bal komt.", "Oefen loopacties en afronden in één keer."],
    ["Patrick Kluivert", "Een technische spits met een goede aanname en afronding.", ["Aanname","Afronden","Techniek"], "Rust voor het doel is goud waard.", "Oefen rustig afronden op een keeper."],
    ["Victor Osimhen", "Een snelle, sterke spits die heel hoog springt.", ["Sprongkracht","Snelheid","Diepte"], "Sprongkracht maakt je gevaarlijk in de lucht.", "Oefen springen en koppen op het hoogste punt."],
    ["Wout Weghorst", "Een lange spits die hard werkt en goed kopt.", ["Koppen","Werklust","Bal vasthouden"], "Hard werken als spits helpt het hele team.", "Oefen kopduels en kaatsen."],
    ["Brian Brobbey", "Een sterke spits die tegenstanders van zich af houdt.", ["Kracht","Afschermen","Snelheid"], "Gebruik je lichaam om de bal te beschermen.", "Oefen afschermen tegen een vriend."],
    ["Romelu Lukaku", "Een krachtige spits met snelheid in de diepte.", ["Kracht","Diepte","Afronden"], "Kracht en snelheid samen zijn een wapen.", "Sprint diep en rond af."],
    ["Raúl", "Een slimme spits die met weinig ruimte scoorde.", ["Slimheid","Afronden","Lob"], "Slim afronden is soms beter dan hard.", "Oefen een lob over de keeper."],
    ["Fernando Torres", "Een snelle spits die in de diepte langs verdedigers sprintte.", ["Snelheid","Diepte","Afronden"], "Op het goede moment diep lopen is een kunst.", "Oefen loopacties achter de verdediging."],
    ["Miroslav Klose", "Een spits die goed kopte en op het goede moment in de zestien stond.", ["Koppen","Positie","Teamspeler"], "Een teamspeler die scoort, is goud waard.", "Oefen kopballen na voorzetten."],
    ["Gerd Müller", "Een spits die van overal scoorde, met snelle draaien in de zestien.", ["Draaien in de zestien","Snel afronden","Positie"], "In de zestien moet je snel zijn met beslissen.", "Oefen draaien en schieten in de zestien."],
    ["Thierry Henry (spits)", "Een snelle, elegante spits die vaak vanaf links naar binnen kwam.", ["Snelheid","Binnenkant-schot","Elegantie"], "Een zuiver schot in de verre hoek is moeilijk te stoppen.", "Oefen schieten met je binnenkant in de verre hoek."]
  ])
};

// toevoegen aan de lijst en aan de posities (dubbele namen overslaan)
(() => {
  const have = new Set(SPELERS.map(p => p.name));
  Object.entries(NIEUWE_SPELERS).forEach(([pos, lijst]) => lijst.forEach(p => {
    const naam = p.name.replace(/ \([^)]*\)$/, "");
    if (have.has(naam)) { // bestaande speler: alleen aan de positie koppelen
      const pp = POSITIES.find(x => x.id === pos); if (pp && !pp.spelers.includes(naam)) pp.spelers.push(naam); return;
    }
    p.name = naam; delete p._pos; have.add(naam); SPELERS.push(p); addPlayers(pos, [naam]);
  }));
})();
