// Stay Hard – 30-dagen-uitdagingen in drie niveaus: makkelijk, gemiddeld en moeilijk.
// Elke dag wordt de opdracht iets zwaarder. Dag 7, 14, 21 en 28 zijn rustige dagen.

const rust30 = n => n % 7 === 0;
const NIVEAUS = [["makkelijk", "Makkelijk", 0.6], ["gemiddeld", "Gemiddeld", 1], ["moeilijk", "Moeilijk", 1.8]];
const factor30 = lvl => (NIVEAUS.find(x => x[0] === lvl) || NIVEAUS[1])[2];
// r(x) rondt af en houdt minstens 1
const U = (id, icon, title, wat, dag) => ({id, icon, title, wat, dag});
const UITDAGINGEN = [
  U("zwak", "🦶", "30 dagen zwakke voet", "Na 30 dagen is je zwakke voet een stuk sterker.",
    (n, r) => rust30(n) ? "Rustdag: 5 minuten rustig jongleren met je zwakke voet." : r(20 + n * 3) + " muurpasses met alleen je zwakke voet, daarna " + r(5 + n / 3) + " schoten met je zwakke voet."),
  U("jongleer", "⚽", "30 dagen jongleren", "Elke dag hooghouden. Je record gaat omhoog.",
    (n, r) => rust30(n) ? "Rustdag: probeer je record van deze week één keer te verbeteren." : "Houd hoog tot je in totaal " + r(50 + n * 10) + " keer hebt geraakt. " + (n > 15 ? "Gebruik ook je dijen en hoofd." : "Gebruik beide voeten.")),
  U("buik", "🧱", "30 dagen buikspieren", "Een sterke romp maakt je stabieler in duels.",
    (n, r) => rust30(n) ? "Rustdag: 5 minuten rustig rekken." : "Plank " + r(20 + n * 3) + " seconden, " + r(8 + n) + " crunches en " + r(5 + n / 2) + " dead bugs per kant."),
  U("pushup", "💪", "30 dagen push-ups", "Een sterker bovenlichaam voor duels en ingooien.",
    (n, r) => rust30(n) ? "Rustdag: armcirkels en je schouders rekken." : "Doe in totaal " + r(10 + n * 2) + " push-ups, verdeeld over sets. Lukt het niet? Op je knieën mag."),
  U("squat", "🦵", "30 dagen squats", "Sterke benen voor een harder schot en een snellere sprint.",
    (n, r) => rust30(n) ? "Rustdag: 10 minuten benen rekken." : "Doe in totaal " + r(20 + n * 3) + " squats." + (n > 14 ? " Doe er " + r(n / 2) + " squat-sprongen bij." : "")),
  U("sprint", "⚡", "30 dagen sneller", "Sprint- en voetenwerk om sneller te worden.",
    (n, r) => rust30(n) ? "Rustdag: rustig 10 minuten wandelen of fietsen." : r(4 + n / 4) + " sprintjes van 20 meter met volledige rust ertussen, en " + r(2 + n / 7) + " minuten snelle voetjes op een lijn."),
  U("rek", "🧘", "30 dagen lenig", "Elke dag rekken maakt je soepeler en voorkomt blessures.",
    (n, r) => "Rek " + r(5 + n / 3) + " minuten: kuiten, hamstrings, bovenbenen, liezen en heupen. Houd elke rekoefening " + r(20 + n) + " seconden vast."),
  U("muur", "🧱", "30 dagen muur", "Elke dag tegen de muur: passen, aannemen en schieten.",
    (n, r) => rust30(n) ? "Rustdag: 5 minuten rustig passen." : r(50 + n * 5) + " muurpasses, wissel om de 10 van voet." + (n > 10 ? " Neem elke bal aan in een richting." : "")),
  U("dribbel", "🔀", "30 dagen dribbelen", "Betere balcontrole en meer lef in de één-tegen-één.",
    (n, r) => rust30(n) ? "Rustdag: 5 minuten rustig de bal aan je voet houden." : r(5 + n / 3) + " minuten dribbelen door pionnen. Oefen vandaag ook " + ["de schaar","de zoolrol","de kap binnendoor","de lichaamsschijn","de stepover","de Cruijff-draai"][n % 6] + "."),
  U("schiet", "🎯", "30 dagen schieten", "Zuiverder en harder schieten met beide voeten.",
    (n, r) => rust30(n) ? "Rustdag: 10 rustige schoten op een vak, alleen op zuiverheid." : r(10 + n) + " schoten met je sterke voet en " + r(5 + n / 2) + " met je zwakke voet. Mik op de hoeken."),
  U("kop", "🙆", "30 dagen koppen", "Sterker en zekerder in de lucht.",
    (n, r) => rust30(n) ? "Rustdag: 3 minuten nekoefeningen en rekken." : r(10 + n) + " kopballen tegen de muur, daarna " + r(3 + n / 5) + " sprongen met kopbal op het hoogste punt."),
  U("aanname", "🫳", "30 dagen aannemen", "Je eerste aanraking wordt beter: alles wordt makkelijker.",
    (n, r) => rust30(n) ? "Rustdag: 5 minuten rustig passen tegen de muur." : r(20 + n * 2) + " aannames tegen de muur. Vandaag met " + ["je binnenkant","je buitenkant","je zool","je dij","je borst (gooi de bal)","je zwakke voet"][n % 6] + "."),
  U("conditie", "🫁", "30 dagen conditie", "Langer volhouden in de tweede helft.",
    (n, r) => rust30(n) ? "Rustdag: 15 minuten rustig wandelen." : r(10 + n / 2) + " minuten hardlopen, met " + r(3 + n / 5) + " keer 30 seconden versnellen."),
  U("balans", "🤸", "30 dagen balans", "Stabielere enkels en knieën, minder blessures.",
    (n, r) => rust30(n) ? "Rustdag: 2 minuten op één been tandenpoetsen." : "Sta " + r(20 + n * 2) + " seconden op elk been" + (n > 10 ? " met je ogen dicht" : "") + ", en doe " + r(5 + n / 3) + " eenbenige squats per been."),
  U("kracht", "🏋️", "30 dagen voetbalkracht", "De krachtoefeningen die profs doen, elke dag een beetje.",
    (n, r) => rust30(n) ? "Rustdag: 10 minuten rollen en rekken." : ["Nordic hamstrings","Copenhagen plank","Bulgaarse split squat","Hip thrust","Eenbenige deadlift","Kuitheffen op één been"][n % 6] + ": " + r(2 + n / 10) + " sets van " + r(6 + n / 5) + " herhalingen."),
  U("touw", "🪢", "30 dagen touwtjespringen", "Snelle voeten en een betere conditie.",
    (n, r) => rust30(n) ? "Rustdag: 1 minuut rustig springen en kuiten rekken." : "Spring " + r(100 + n * 15) + " keer in totaal." + (n > 20 ? " Probeer ook dubbele sprongen." : "")),
  U("water", "💧", "30 dagen genoeg drinken", "Goed drinken maakt je fitter en scherper.",
    (n, r) => "Drink vandaag minstens " + r(n < 10 ? 6 : n < 20 ? 7 : 8) + " glazen water. Geen frisdrank."),
  U("slaap", "😴", "30 dagen goed slapen", "Slaap is je beste herstel.",
    (n, r) => "Schermen weg om " + (n < 10 ? "21:00" : "20:30") + " en op tijd in bed. Lees nog " + r(5 + n / 5) + " minuten."),
  U("eten", "🥦", "30 dagen gezond eten", "Brandstof voor je spel, elke dag een beetje beter.",
    (n, r) => ["Eet vandaag " + r(2) + " stuks fruit.","Eet groente bij je lunch en je avondeten.","Kies vandaag water in plaats van frisdrank.","Maak een recept uit Gezond → Recepten.","Eet een ontbijt met eiwitten.","Neem een gezonde snack mee naar school.","Rustdag: eet rustig aan tafel, zonder scherm."][(n - 1) % 7]),
  U("mindset", "🔥", "30 dagen sterke mindset", "Elke dag een kleine opdracht voor je hoofd.",
    (n, r) => ["Schrijf " + r(3) + " dingen op waar je goed in bent.","Geef " + r(1) + " teamgenoot een compliment.","Schrijf je doel voor deze week op.","Doe " + r(5) + " minuten ademhaling 4-4-4.","Zeg na elke fout vandaag 'volgende'.","Lees de motivatie van de dag hardop.","Rustdag: denk terug aan je beste wedstrijd."][(n - 1) % 7]),
  U("leider", "🧢", "30 dagen leider", "Elke dag een kleine stap om een leider te worden.",
    (n, r) => ["Help " + r(1) + " teamgenoot met iets.","Roep op de training " + r(10) + " keer een naam.","Wees als eerste klaar voor de training.","Vraag een stille teamgenoot hoe het gaat.","Help met opruimen zonder dat iemand het vraagt.","Bedank je trainer.","Rustdag: bedenk wat voor leider jij wilt zijn."][(n - 1) % 7]),
  U("lezen", "📚", "30 dagen lezen", "Lezen maakt je rustiger en slimmer, ook in het spel.",
    (n, r) => "Lees vandaag " + r(10 + n / 3) + " minuten, het liefst voor het slapen."),
  U("geenscherm", "📵", "30 dagen minder scherm", "Meer tijd voor trainen, slapen en vrienden.",
    (n, r) => "Maximaal " + Math.max(30, Math.round((120 - n * 2) / (r(10) / 10))) + " minuten scherm vandaag buiten school en VR. Telefoon weg om " + (n < 15 ? "20:30" : "20:00") + "."),
  U("taken", "✅", "30 dagen taken afvinken", "Elke dag je taken opschrijven en afmaken.",
    (n, r) => "Schrijf bij Start minstens " + r(3 + n / 10) + " taken op en vink ze allemaal af.")
];
