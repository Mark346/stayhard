// ---------- Bovenlichaam met gewichten ----------
// Alleen losse gewichten (halters of een kettlebell), geen apparaten.
// Begin licht: een gewicht waarmee je alle herhalingen netjes haalt. Techniek gaat altijd voor zwaarte.
(() => {
  // Liggende poses (op de grond of op een bank) voor borstdrukken, fly en pullover
  const lig = (y, armA, armB) => [0, 1].map(i => { const [e, w] = i ? armB : armA;
    return {h:[16, y - 2], s:[28, y], p:[64, y], e1:e, w1:w, e2:[e[0] - 2, e[1]], w2:[w[0] - 2, w[1]], k1:[80, y - 14], f1:[94, 90], k2:[78, y - 14], f2:[92, 90]}; });
  const LIG = {
    "vloer-druk": lig(86, [[30, 74], [30, 60]], [[42, 88], [36, 76]]),
    "bank-druk": lig(74, [[30, 62], [30, 48]], [[42, 80], [36, 64]]),
    "vloer-fly": lig(86, [[30, 74], [30, 60]], [[22, 84], [8, 86]]),
    "pullover": lig(86, [[30, 74], [30, 60]], [[14, 78], [0, 86]])
  };
  const pz = n => { if (LIG[n]) return LIG[n]; const x = [...EXERCISES, ...KRACHT].find(k => k.title === n); return x && x.poses; };
  const LV = {M: "Makkelijk", G: "Gemiddeld", Z: "Moeilijk"};
  // hoe houd je het gewicht vast (voor het plaatje): 2 = in elke hand, 1 = één hand, mid = één halter met twee handen, kb = kettlebell
  const GEAR = {"Halter-roeien op één arm":"1", "Triceps-kickback":"1", "Triceps-strekken boven je hoofd":"mid", "Pullover met halter":"mid", "Kettlebell halo":"kb"};
  const add = (title, target, reps, text, why, yt, like, lv) => {
    const poses = pz(like);
    if (!poses || KRACHT.some(k => k.title === title)) return;
    KRACHT.push(KR(title, target, reps, text + " Kies een gewicht waarmee je de laatste 2 herhalingen nog netjes haalt.", why, yt, poses, {gewicht: true, level: LV[lv], gear: GEAR[title] || "2", bench: like === "bank-druk"}));
  };
  add("Halter-borstdrukken op de grond", "Borst en armen", "3 x 10", "Lig op je rug met je knieën gebogen en een halter in elke hand. Duw de halters recht omhoog en laat ze langzaam zakken tot je ellebogen de grond raken.", "een sterke borst helpt je om tegenstanders van je af te houden.", "dumbbell floor press", "vloer-druk", "M");
  add("Halter-borstdrukken op een bank", "Borst en armen", "3 x 8", "Lig op een stevige bank, halters naast je borst. Duw ze omhoog tot je armen bijna gestrekt zijn en laat ze rustig zakken.", "meer kracht in je bovenlichaam voor duels.", "dumbbell bench press", "bank-druk", "G");
  add("Halter-fly op de grond", "Borst", "3 x 10", "Lig op je rug met de halters boven je borst. Open je armen met licht gebogen ellebogen tot je bovenarmen de grond raken en breng ze weer samen.", "een brede, sterke borst voor afschermen.", "dumbbell floor fly", "vloer-fly", "G");
  add("Push-up op halters", "Borst en armen", "3 x 8", "Zet twee halters op de grond en pak ze vast. Doe push-ups met je handen op de halters, zo kun je dieper zakken.", "sterke armen en polsen in een rechte lijn.", "push up on dumbbells", "Push-ups", "G");
  add("Halter-roeien op één arm", "Rug en armen", "3 x 10 per arm", "Steun met één hand en knie op een bank. Trek de halter naar je heup en laat hem langzaam zakken.", "een sterke rug houdt je rechtop als je wordt geduwd.", "one arm dumbbell row", "Roeien met een rugzak", "M");
  add("Voorovergebogen roeien met twee halters", "Rug en armen", "3 x 10", "Buig voorover met een rechte rug en de halters onder je schouders. Trek ze naar je buik en knijp je schouderbladen samen.", "een sterke bovenrug geeft je een goede houding.", "bent over dumbbell row", "Roeien met flessen voorovergebogen", "G");
  add("Renegade row", "Rug en armen", "3 x 6 per arm", "Ga in een push-up houding staan met je handen op twee halters. Trek om en om een halter naar je heup zonder je heup te draaien.", "kracht in je rug en een stevige romp tegelijk.", "renegade row dumbbell", "Plank op en neer", "Z");
  add("Reverse fly voorovergebogen", "Schouders en bovenrug", "3 x 12", "Buig voorover met lichte halters. Til je armen opzij tot schouderhoogte, ellebogen licht gebogen.", "gezonde schouders en minder kans op blessures.", "dumbbell reverse fly", "Roeien met flessen voorovergebogen", "M");
  add("Halter-schouderdrukken zittend", "Schouders", "3 x 10", "Zit rechtop met de halters op schouderhoogte. Duw ze boven je hoofd en laat ze rustig zakken.", "sterke schouders voor een verre ingooi.", "seated dumbbell shoulder press", "Rugzak boven je hoofd drukken", "M");
  add("Arnold press", "Schouders", "3 x 8", "Begin met de halters voor je borst, handpalmen naar je toe. Draai je handen naar buiten terwijl je de halters boven je hoofd duwt.", "je hele schouder wordt sterker.", "arnold press dumbbell", "Rugzak boven je hoofd drukken", "G");
  add("Zijwaarts heffen met halters", "Schouders", "3 x 12", "Sta rechtop en til de halters opzij tot schouderhoogte. Laat ze langzaam zakken.", "stevige schouders bij duels en vallen.", "dumbbell lateral raise", "Zijwaarts armen heffen met flessen", "M");
  add("Voorwaarts heffen met halters", "Schouders", "3 x 10", "Til de halters met gestrekte armen naar voren tot schouderhoogte en laat ze rustig zakken.", "kracht voor een verre ingooi.", "dumbbell front raise", "Voorwaarts armen heffen met flessen", "M");
  add("Schouders ophalen met halters", "Schouders en nek", "3 x 12", "Sta rechtop met de halters naast je. Trek je schouders zo hoog mogelijk op, wacht 1 tel en laat ze zakken.", "een sterke nek helpt bij koppen.", "dumbbell shrug", "Zijwaarts armen heffen met flessen", "M");
  add("Biceps-curl met halters", "Armen (voorkant)", "3 x 10", "Sta rechtop, ellebogen tegen je lichaam. Buig je armen en breng de halters naar je schouders. Langzaam zakken.", "sterke armen helpen bij afschermen en vasthouden.", "dumbbell bicep curl", "Biceps met flessen", "M");
  add("Hamer-curl", "Armen (voorkant)", "3 x 10", "Houd de halters met je duimen naar boven, zoals een hamer. Buig je armen en laat ze rustig zakken.", "sterke onderarmen en grip.", "hammer curl", "Biceps met flessen", "M");
  add("Triceps-strekken boven je hoofd", "Armen (achterkant)", "3 x 10", "Houd één halter met twee handen boven je hoofd. Laat hem achter je hoofd zakken en strek je armen weer.", "sterke armen voor de ingooi.", "overhead dumbbell tricep extension", "Armen strekken achter je hoofd met fles", "G");
  add("Triceps-kickback", "Armen (achterkant)", "3 x 10 per arm", "Steun op een bank, bovenarm langs je lichaam. Strek je arm naar achteren en buig hem weer.", "sterke armen in balans.", "dumbbell tricep kickback", "Roeien met flessen voorovergebogen", "M");
  add("Pullover met halter", "Borst en bovenrug", "3 x 10", "Lig op je rug en houd één halter met twee handen boven je borst. Laat hem met bijna gestrekte armen achter je hoofd zakken en breng hem terug.", "kracht voor de ingooi en een brede borst.", "dumbbell pullover", "pullover", "G");
  add("Kettlebell halo", "Schouders en romp", "3 x 5 per kant", "Houd een kettlebell bij de handvatten voor je borst en draai hem langzaam rond je hoofd.", "beweeglijke en sterke schouders.", "kettlebell halo", "Rugzak boven je hoofd drukken", "G");
  add("Boerenloop met halters", "Armen, schouders en grip", "3 x 30 meter", "Pak twee zware halters en loop rechtop met kleine stappen. Schouders naar achteren.", "sterke grip, schouders en romp.", "farmers walk dumbbells", "Biceps met flessen", "G");
  add("Halter-thruster licht", "Schouders en benen", "3 x 8", "Houd de halters op schouderhoogte, zak in een squat en duw ze bij het omhoogkomen boven je hoofd.", "kracht van je benen naar je armen, zoals bij een ingooi.", "dumbbell thruster", "Rugzak boven je hoofd drukken", "Z");
  add("Zittend halters omhoog en opzij (3 kanten)", "Schouders", "2 x 6 per kant", "Zit rechtop met lichte halters. Til ze 6 keer naar voren, 6 keer opzij en 6 keer voorovergebogen naar achteren.", "je hele schouder in één oefening.", "dumbbell 3 way raise", "Zijwaarts armen heffen met flessen", "Z");
})();

// ---------- Voorbeeldtrainingen bovenlichaam met gewichten ----------
TRAININGEN.push(
  VT("Bovenlichaam", "Halters voor beginners", "Makkelijk", "20 min", "2 rondes, 1 minuut rust. Lichte halters (bijv. 2 tot 4 kg).", [["Halter-borstdrukken op de grond","10 keer"],["Halter-roeien op één arm","10 per arm"],["Halter-schouderdrukken zittend","10 keer"],["Biceps-curl met halters","10 keer"],["Reverse fly voorovergebogen","10 keer"]], "Een eerste training met halters. Leer eerst de beweging goed en kies een licht gewicht. Train met een volwassene in de buurt."),
  VT("Bovenlichaam", "Halters: duwen en trekken", "Gemiddeld", "25 min", "3 rondes, 90 seconden rust", [["Halter-borstdrukken op een bank","8 keer"],["Voorovergebogen roeien met twee halters","10 keer"],["Arnold press","8 keer"],["Pullover met halter","10 keer"],["Hamer-curl","10 keer"],["Triceps-strekken boven je hoofd","10 keer"]], "Duwen en trekken in balans, zo blijven je schouders gezond en word je overal sterker."),
  VT("Bovenlichaam", "Sterke schouders met halters", "Gemiddeld", "20 min", "3 rondes, 1 minuut rust", [["Halter-schouderdrukken zittend","10 keer"],["Zijwaarts heffen met halters","12 keer"],["Voorwaarts heffen met halters","10 keer"],["Reverse fly voorovergebogen","12 keer"],["Schouders ophalen met halters","12 keer"]], "Sterke schouders voor een verre ingooi en om stevig te staan in duels."),
  VT("Bovenlichaam", "Armen met halters", "Makkelijk", "15 min", "3 rondes, 45 seconden rust", [["Biceps-curl met halters","10 keer"],["Triceps-kickback","10 per arm"],["Hamer-curl","10 keer"],["Triceps-strekken boven je hoofd","10 keer"]], "Een korte armentraining. Liever netjes en langzaam dan snel en zwaar."),
  VT("Bovenlichaam", "Halter-circuit voor duels", "Zwaar", "25 min", "3 rondes, 2 minuten rust", [["Renegade row","6 per arm"],["Push-up op halters","8 keer"],["Halter-thruster licht","8 keer"],["Boerenloop met halters","30 meter"],["Kettlebell halo","5 per kant"]], "Een pittig circuit voor je bovenlichaam én je romp. Alleen als je de makkelijkere trainingen goed beheerst."),
  VT("Bovenlichaam", "Rug en houding met halters", "Gemiddeld", "18 min", "3 rondes, 1 minuut rust", [["Halter-roeien op één arm","10 per arm"],["Reverse fly voorovergebogen","12 keer"],["Schouders ophalen met halters","12 keer"],["Zittend halters omhoog en opzij (3 kanten)","6 per kant"]], "Een sterke rug houdt je rechtop als je geduwd wordt, en voorkomt rugpijn.")
);
