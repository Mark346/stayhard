// Stay Hard – vijfentwintigste uitbreiding (niet: voorbeeldtrainingen, strekroutines, records).

RECEPTEN.push(
  RC("Ontbijt", "Kwark-pannenkoekjes met bessen", "15 min", "2 personen", ["Kwark","2 eieren","Havermout","Bessen"], ["Mix kwark, eieren en havermout.","Bak kleine pannenkoekjes.","Eet met bessen."], "Veel eiwitten voor een trainingsdag.", "Bevroren bessen kun je even opwarmen."),
  RC("Ontbijt", "Havermout met mango en kokos", "8 min", "1 persoon", ["Havermout","Melk","Mango","Geraspte kokos"], ["Kook havermout met melk.","Doe mango en kokos erop."], "Een tropisch ontbijt vol energie.", "Bevroren mango werkt ook."),
  RC("Voor het sporten", "Pasta met kip en paprika", "20 min", "2 personen", ["Volkoren pasta","Kipreepjes","Paprika","Passata"], ["Kook de pasta.","Bak kip en paprika.","Meng met passata."], "Energie en eiwitten voor een wedstrijd.", "Eet 3 uur voor de aftrap."),
  RC("Na het sporten", "Eiersalade-wrap", "10 min", "1 persoon", ["Volkoren wrap","2 gekookte eieren","Yoghurt","Sla"], ["Prak eieren met yoghurt.","Leg op de wrap met sla en rol op."], "Snel herstel met eiwitten.", "Bieslook erdoor maakt het lekker."),
  RC("Na het sporten", "Rijst met zwarte bonen en ei", "20 min", "2 personen", ["Rijst","Zwarte bonen","2 eieren","Tomaat"], ["Kook de rijst.","Warm de bonen.","Bak de eieren en serveer alles samen."], "Eiwitten uit bonen en ei.", "Een schep yoghurt erop."),
  RC("Lunch", "Volkoren pita met tonijn en komkommer", "5 min", "1 persoon", ["Volkoren pita","Tonijn op water","Komkommer","Yoghurt"], ["Meng tonijn met yoghurt.","Vul de pita met tonijn en komkommer."], "Een lunch vol eiwitten.", "Neem hem mee naar school."),
  RC("Avondeten", "Kip-pesto met groene groente", "25 min", "3 personen", ["Kipfilet","Broccoli en sperziebonen","Beetje pesto","Krieltjes"], ["Kook groente en krieltjes.","Bak de kip.","Meng met een beetje pesto."], "Groen, gezond en vol energie.", "Niet te veel pesto."),
  RC("Avondeten", "Vis-taco's met kool", "25 min", "3 personen", ["Witvis","Volkoren tortilla's","Witte kool","Yoghurtsaus","Limoen"], ["Bak de vis.","Snijd de kool fijn.","Vul de tortilla's."], "Licht, fris en vol eiwitten.", "Laat iedereen zelf vullen."),
  RC("Zoet & gezond", "Chocolade-bananenbrood", "60 min", "1 cake", ["3 rijpe bananen","2 eieren","Havermeel","Ongezoete cacao","Bakpoeder"], ["Prak de bananen en meng alles.","Bak 45 minuten op 180 graden."], "Chocoladecake zonder suiker.", "Laat hem goed afkoelen."),
  RC("Zoet & gezond", "Aardbeien-sorbet", "5 min + vriezer", "2 personen", ["Bevroren aardbeien","Banaan","Scheutje sinaasappelsap"], ["Mix tot een gladde sorbet."], "Fris ijs van alleen fruit.", "Eet meteen."),
  RC("Zoet & gezond", "Havermout-koekjes met appel en rozijnen", "25 min", "12 koekjes", ["Havermout","Geraspte appel","Rozijnen","1 ei","Kaneel"], ["Meng alles.","Bak 15 minuten op 180 graden."], "Zoet door appel en rozijnen.", "Lekker na school."),
  RC("Zoet & gezond", "Yoghurt-ijsrepen met granola", "10 min + vriezer", "4 personen", ["Griekse yoghurt","Granola zonder suiker","Bessen"], ["Smeer yoghurt op bakpapier.","Strooi granola en bessen erover.","Vries 3 uur in en breek."], "Knapperig ijs met eiwitten.", "Bewaar in de vriezer."),
  RC("Snacks", "Paprika-reepjes met hüttenkäse", "5 min", "1 persoon", ["Paprika","Hüttenkäse"], ["Snijd de paprika in reepjes.","Doop in de hüttenkäse."], "Fris en vol eiwitten.", "Ook lekker met hummus."),
  RC("Drankjes", "Ananas-kokos smoothie", "5 min", "1 persoon", ["Ananas","Kokosmelk light","Banaan"], ["Mix alles."], "Tropisch en fris.", "Met ijsblokjes.")
);

DRILLS.push(
  D("Kaats met je dij en volley", "Moeilijk", "8 min", "Gooi de bal op, kaats met je dij en volley tegen de muur.", ["Gooi op","Dij","Volley"], "thigh volley wall", {wall:true, me:[70,55], ball:[70,36], paths:[{d:"M70 36 L70 48",t:"ball"},{d:"M76 50 L140 40",t:"ball"}]}),
  D("Snelle één-twee's langs de muur", "Gemiddeld", "8 min", "Loop langs de muur en speel steeds een één-twee.", ["Loop langs de muur","Pass schuin","Loop door en pak de bal"], "wall one twos moving", {wall:true, me:[40,80], ball:[48,80], paths:[{d:"M48 78 L140 60",t:"ball"},{d:"M140 60 L90 40",t:"ball"}]}),
  D("Dribbel en schiet met je zwakke voet", "Gemiddeld", "10 min", "Dribbel naar binnen en schiet met je zwakke voet.", ["Dribbel vanaf de zijkant","Naar binnen","Schiet met je zwakke voet"], "cut and shoot weak foot", {goal:true, me:[60,20], ball:[66,22], paths:[{d:"M66 22 L100 40",t:"ball"},{d:"M100 42 L144 50",t:"ball"}]}),
  D("Reactie-start met de bal", "Gemiddeld", "8 min", "Een maatje klapt, jij versnelt met de bal.", ["Bal aan je voet","Wacht op de klap","Versnel 10 meter"], "reaction start dribble", {me:[30,50], ball:[38,50], paths:[{d:"M38 50 L100 50",t:"ball"}]}),
  D("Hooghouden met wissel links-rechts", "Gemiddeld", "5 min", "Houd hoog en raak om de beurt links en rechts.", ["Links","Rechts","Hoe vaak achter elkaar?"], "alternate foot juggling", {me:[70,55], ball:[70,38]}),
  D("Doelschop kort uitspelen", "Gemiddeld", "10 min", "Oefen met je team een korte doelschop onder druk.", ["Keeper speelt kort","Verdedigers breed","Speel naar de vrije man"], "goal kick build up", {goalLeft:true, mates:[[20,50],[50,20],[50,80]], foes:[[70,30]], ball:[26,50], paths:[{d:"M26 52 L48 76",t:"ball"}]})
);

IQ_LESSONS.push(
  IQ("Je lichaam tussen bal en tegenstander", "Bij afschermen gebruik je je lichaam als schild.", "Houd de bal aan de kant weg van je tegenstander.", {me:[80,50], foe:[94,50], ball:[70,52]}),
  IQ("De bal snel van kant wisselen", "Als één kant vol staat, is de andere kant leeg.", "Speel de bal snel naar de andere vleugel.", {me:[50,20], mates:[[50,85]], foes:[[60,25],[70,30]], ball:[56,22], paths:[{d:"M56 24 Q80 50 54 82",t:"ball"}]}),
  IQ("Wachten op de overlap", "Een back die overlapt, geeft je een extra optie.", "Houd de bal even vast tot je back langs je loopt.", {me:[100,20], mates:[[70,30]], foe:[110,25], ball:[96,22], paths:[{d:"M70 30 Q100 5 130 15",t:"run"}]}),
  IQ("Kijk naar de scheidsrechter bij een voordeel", "Bij een voordeel speelt het spel door.", "Speel door tot de scheidsrechter fluit.", {me:[70,50], ball:[78,50]})
);

DAILY_LESSONS.push(
  L("De bal hoog aannemen met je borst", "Een borstaanname maakt een lastige bal makkelijk.", "Je hebt de bal snel onder controle.", ["Ga onder de bal staan.","Duw je borst naar voren.","Laat de bal zacht voor je vallen."], "Gooi 15 ballen hoog en neem aan met je borst.", "Je borst stijf houden, dan stuitert hij weg.", "Borst vooruit en zacht meegeven."),
  L("Een snelle aanval opzetten", "Snel aanvallen geeft de tegenstander geen tijd.", "Een verdediging die niet staat, is kwetsbaar.", ["Kijk na balwinst vooruit.","Speel de bal snel naar voren.","Loop mee."], "Speel een partijtje waarin je binnen 10 seconden moet schieten.", "Eerst rustig terugspelen.", "Kijk vooruit, speel snel, loop mee."),
  L("Leiding geven in de rust", "In de rust kun je het team helpen.", "Een korte, positieve boodschap helpt de tweede helft.", ["Luister eerst naar de trainer.","Zeg één ding dat beter kan.","Eindig positief."], "Bedenk wat je in de volgende rust zou zeggen.", "Schreeuwen of de schuld geven.", "Luisteren, één punt, positief.")
);

TEGENSLAG.push(
  TS("Je haalt je 5 taken niet en je streak is weg", "Je baalt.", ["Begin morgen opnieuw","Zet alvast taken voor morgen klaar","Kijk naar je langste streak: dat kun je weer"], "Een nieuwe streak begint met dag 1."),
  TS("Je krijgt een slechte beoordeling van de trainer", "Teleurgesteld.", ["Vraag wat je kunt verbeteren","Maak een plan","Laat het zien op de training"], "Feedback is een cadeau om beter te worden."),
  TS("Je verliest het partijtje op de training", "Je bent een slechte verliezer.", ["Geef de winnaars een hand","Bedenk wat je anders kunt doen","Volgende keer weer"], "Ook op de training leer je verliezen.")
);
FOCUS_TIPS.push(
  FT("De intervaltimer", "Met een intervaltimer train je geconcentreerd.", "Gebruik de intervaltimer bij Extra bij krachttraining.", "Thuis"),
  FT("Even niks doen", "Verveling kan ook rust zijn.", "Gebruik de 'Wat kan ik doen?'-knop als je echt iets wilt doen.", "Thuis"),
  FT("Morgen voorbereiden", "Wie morgen voorbereidt, slaapt rustiger.", "Zet je taken voor morgen klaar op Start.", "Thuis")
);
LEIDER.push(
  LT("Wees eerlijk tegen jezelf", "Een leider weet wat hij goed en minder goed doet.", "Schrijf na de training één ding op dat beter kan.", "Wie eerlijk is tegen zichzelf, groeit sneller."),
  LT("Leer de spelers van de tegenstander kennen", "Een leider weet wie gevaarlijk is.", "Kijk in de warming-up wie er snel of groot is.", "Kennis geeft het team een voorsprong.")
);
MOTIVATION.push(
  "Werken, rusten, herhalen.", "Elke interval maakt je sterker.", "Verveling is een kans om iets nieuws te doen.",
  "Kleine pauzes, grote prestaties.", "Je hoeft niet te wachten op zin. Begin gewoon.", "Wat je vandaag doet, voel je morgen."
);
BOEKEN.push(
  BK("Diary of a Young Footballer", "diverse auteurs", "Voetbal (verhaal)", "8+", "Grappige dagboekverhalen over jonge voetballers.", "Leuk om te lezen en herkenbaar.", "young footballer diary book kids"),
  BK("The Inner Game of Tennis", "W. Timothy Gallwey", "Inspiratie en sport", "15+", "Over hoe je hoofd je spel beïnvloedt, ook bruikbaar bij voetbal.", "Leer rustig en gefocust spelen.")
);
PREVENTIE.push(
  PV("⏱️", "#E2541B", "Interval met rust", "Hele lichaam", "Rust tussen inspanningen voorkomt overbelasting.", "Gebruik de intervaltimer en neem de rust echt.", "Bij elke training", ""),
  PV("🧘", "#0891B2", "Rustig bij verveling", "Hoofd", "Even niks doen is ook herstel.", "Kies bij 'Wat kan ik doen?' voor 'Rustig'.", "Als je moe bent", "")
);
TIPS.push(
  LH("Een idee als je je verveelt", "Verveling? Probeer iets nieuws.", "Tik op 'Wat doen?' bij Extra.", "hoofd"),
  LH("De timer voor huiswerk", "Met een timer werk je geconcentreerder.", "Zet 25 minuten en ga aan de slag.", "hoofd"),
  LH("Taken voor morgen klaarzetten", "Een rustige start van morgen.", "Zet er 's avonds alvast een paar klaar.", "hoofd")
);
(() => {
  const dedupe = (arr, key) => { const seen = new Set(), keep = arr.filter(x => { const k = typeof x === "string" ? x : x[key] || x.title || x.titel; if (seen.has(k)) return false; seen.add(k); return true; }); arr.length = 0; arr.push(...keep); };
  [RECEPTEN, DRILLS, IQ_LESSONS, DAILY_LESSONS, TEGENSLAG, FOCUS_TIPS, LEIDER, MOTIVATION, BOEKEN, PREVENTIE, TIPS].forEach(a => dedupe(a));
})();
