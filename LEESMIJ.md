# Stay Hard – zo zet je de app online

Stay Hard is een website die op een iPhone werkt als een app. Hij draait gratis op GitHub Pages en
haalt elke ochtend rond 06:15 vanzelf nieuw nieuws op. Er is geen account en geen abonnement nodig, alles is gratis.

Je hebt één keer ongeveer 10 minuten nodig op een computer.

## 1. Gratis GitHub-account

Ga naar github.com en maak een gratis account (bijvoorbeeld met je eigen e-mailadres).

## 2. Nieuwe repository maken

1. Klik rechtsboven op **+** en dan **New repository**.
2. Naam: `stayhard`.
3. Kies **Public** (dat is nodig voor gratis hosting).
4. Klik **Create repository**.

## 3. Bestanden uploaden

1. Pak de zip uit.
2. Klik op de pagina van je nieuwe repository op **uploading an existing file**.
3. Sleep alle bestanden uit de map erin, ook de map `.github`.
4. Klik **Commit changes**.

Let op: de map `.github` is op een Mac standaard verborgen. Druk in Finder op **Cmd + Shift + .** om hem te zien.
Lukt het niet? Klik dan in GitHub op **Add file → Create new file**, typ als naam
`.github/workflows/nieuws.yml` en plak de inhoud van dat bestand erin.

## 4. Website aanzetten

1. Ga in je repository naar **Settings → Pages**.
2. Bij **Source** kies je **Deploy from a branch**, branch **main**, map **/ (root)**, en klik **Save**.
3. Na een minuut staat je app op: `https://JOUW-GEBRUIKERSNAAM.github.io/stayhard/`

## 5. Dagelijks nieuws aanzetten

1. Ga naar het tabblad **Actions**. Vraagt GitHub of je workflows wilt aanzetten, klik dan op de groene knop.
2. Klik links op **Nieuws bijwerken** en daarna op **Run workflow** om het meteen te testen.
3. Na een minuut staat er vers nieuws in de app. Daarna gaat het elke ochtend vanzelf.

Werkt dat niet en zie je een rode foutmelding? Ga naar **Settings → Actions → General**, kies onderaan
bij **Workflow permissions** voor **Read and write permissions** en klik **Save**.

## 6. Op de iPhone zetten

1. Open de link in **Safari** op de iPhone.
2. Tik op het deel-icoon (vierkantje met pijl omhoog).
3. Kies **Zet op beginscherm** en tik op **Voeg toe**.

Nu staat Stay Hard als app op het beginscherm.

## Verder ontwikkelen in Claude

De app staat ook als ontwikkelversie in Claude. Vraag daar om wijzigingen, test ze, en laat Claude
daarna een nieuwe zip maken. Upload de gewijzigde bestanden in GitHub (**Add file → Upload files**,
bestaande bestanden worden overschreven). In Claude worden filmpjes als link getoond in plaats van in de app;
op GitHub spelen ze gewoon af.

## Zelf aanpassen

- Habits en tips: `tips.js`
- Voetbaloefeningen, thuisoefeningen, filmpjes, motivatie en uitdagingen: `data.js`
- Herstel, grote habits, plaatjes en mindset-filmpjes: ook in `data.js`
- Dagles (de lessen van 5 minuten): `lessen.js`
- Trucjes (met filmpjes), product van de dag, krachttraining en de standaardweek: `extra.js`. Je eigen trainingstijden pas je in de app aan (Planner → Voorbeelddag).
- Alle extra oefeningen, habits, lessen, situaties, uitdagingen en producten: `meer.js` t/m `meer8.js`, `analyse.js` (spelers en wedstrijden bij Voetbal → Analyse), `speler.js` (tabblad Speler: records, wedstrijddag, posities, blessures), `focus.js`, `hervatting.js` (spelhervattingen per positie, omgaan met tegenslag) (Mindset: focus, geen excuses, leider), `meer9.js`, `meer10.js` en `meer11.js` (muuroefeningen en ochtend- en avondroutines) (uitbreidingen van al deze nieuwe onderdelen) (in meer7.js staan ook de krachtoefeningen voor voetballers) en `maak.js` (de grote uitbreidingen, met ook extra trucjes, posters, motivatie en rekoefeningen voor je benen)
- Nieuwsbronnen: bovenaan `update_news.py`

Wijzig een bestand in GitHub via het potloodje en klik **Commit changes**. De app is binnen een minuut bijgewerkt.

## Goed om te weten

- Het nieuws komt van de NOS (voetbal, sport, binnenland en Jeugdjournaal). Berichten met uitslagen, standen of scores worden eruit gefilterd. Op een rustige dag kan een blokje daardoor leeg zijn.
- Kijk de filmpjes in `data.js` (bij `video:`) eerst zelf even na. Vervang of verwijder er een als je hem niet geschikt vindt.
- GitHub zet geplande taken uit als een repository 60 dagen geen activiteit heeft. Stopt het nieuws ooit, ga dan naar **Actions → Nieuws bijwerken** en klik **Enable workflow**.
- Elke dag wisselt de helft van wat je ziet: de helft die er al twee dagen stond gaat weg, de rest blijft. Wat weggaat kan later terugkomen. Met **Toon alle** zie je altijd alles.
- De weekplanner, de Opslag en "Geprobeerd" worden op de telefoon zelf bewaard en nooit vanzelf gewist. Open de app daarom altijd via het icoon op het beginscherm, niet via een losse Safari-tab.
- De filmpjes van David Goggins zijn Engels en hij gebruikt stoere taal. Kijk ze eerst zelf of vervang ze in `data.js` (bij `MINDSET_VIDEOS`).

## Mijn dag (Start)
Bovenaan Start schrijf je elke dag je taken op. Afgevinkte taken geven punten (klein 3, gemiddeld 5, groot 8). Elke 15 punten = een kwartier chillen. Vink je minstens 3 taken af, dan groeit je streak, en je streak bepaalt je rang (van Beginner tot Legende). Alles wordt bewaard en reset nooit.

## Laatste uitbreiding
- `meer12.js`: meer habits, motivatie, oefeningen, IQ, thuisoefeningen, producten, mindset, spelers en routines.
- `recepten.js`: Gezond → Recepten (ontbijt, voor en na het sporten, lunch, avondeten, snacks, drankjes).
- `dertig.js`: Speler → 30 dagen (30-dagen-uitdagingen).
- Recepten wisselen elke dag; 30-dagen-uitdagingen hebben 3 niveaus (makkelijk, gemiddeld, moeilijk).
- `meer13.js`: lichte habits (Gezond → Niet zwaar), kleine habits in routines en meer wedstrijdroutines (Planner → Routines → Wedstrijddag). Recepten hebben een plaatje.
- `meer14.js`: weer meer oefeningen, lessen, mindset, habits, recepten, uitdagingen, routines en spelers.
- `meer15.js`: nog meer oefeningen, lessen, mindset, habits, recepten, routines en spelers.
