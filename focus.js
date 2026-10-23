// Stay Hard – Mindset: focus, geen excuses en leiderschap.

// ---------- Focus: zo concentreer je je het best ----------
const FT = (title, wat, hoe, wanneer) => ({title, wat, hoe, wanneer});
const FOCUS_TIPS = [
  FT("Eén ding tegelijk", "Je hoofd kan maar op één ding tegelijk echt goed letten.", "Kies voor elke training één ding waar je op let, bijvoorbeeld je aanname.", "Training en wedstrijd"),
  FT("Een vast woord", "Een kort woord helpt je hoofd terug naar het spel.", "Kies een woord zoals 'focus', 'scherp' of 'volgende'. Zeg het in je hoofd als je afgeleid bent.", "Wedstrijd"),
  FT("Ademhaling 4-4-4", "Rustig ademen maakt je hoofd rustig en scherp.", "Adem 4 tellen in, houd 4 tellen vast en adem 4 tellen uit. Doe het 3 keer.", "Voor de wedstrijd en na een fout"),
  FT("Reset na een fout", "Een fout duurt één seconde. Erover nadenken kost je de volgende actie.", "Klap in je handen of tik op je been en zeg 'volgende'. Meteen weer door.", "Wedstrijd"),
  FT("Kijk, denk, doe", "Goede spelers beslissen voordat de bal er is.", "Kijk om je heen, bedenk wat je doet en voer het uit.", "Elke balcontact"),
  FT("Telefoon weg", "Elke melding trekt je aandacht weg, ook als je hem niet opent.", "Leg je telefoon in een andere kamer bij huiswerk en voor het slapen.", "Thuis en school"),
  FT("Werk in blokken", "Je hoofd houdt het ongeveer 25 minuten goed vol.", "Werk 25 minuten, neem 5 minuten pauze en beweeg even.", "Huiswerk"),
  FT("Vaste routine voor de wedstrijd", "Een routine geeft rust, omdat je niet hoeft na te denken.", "Doe voor elke wedstrijd dezelfde dingen in dezelfde volgorde.", "Wedstrijddag"),
  FT("Kijk naar wat jij kunt doen", "Het weer, de scheidsrechter of de tegenstander kun je niet veranderen.", "Richt je op jouw inzet, jouw houding en jouw volgende actie.", "Altijd"),
  FT("Visualiseren", "In je hoofd oefenen helpt je echt beter te worden.", "Sluit je ogen en zie jezelf een goede actie maken. Hoe voelt het? Wat zie je?", "Voor het slapen en voor de wedstrijd"),
  FT("Ogen op de bal, hoofd op het spel", "Wie alleen naar de bal kijkt, mist wat er om hem heen gebeurt.", "Kijk elke paar seconden even om je heen, ook als je de bal niet hebt.", "Training en wedstrijd"),
  FT("Praat jezelf sterk", "Wat je tegen jezelf zegt, bepaalt hoe je speelt.", "Zeg 'ik kan dit' in plaats van 'als het maar niet misgaat'.", "Voor moeilijke momenten"),
  FT("Goed slapen = goed focussen", "Na een slechte nacht kun je je veel slechter concentreren.", "Ga op tijd naar bed en leg je scherm een uur eerder weg.", "Elke avond"),
  FT("Drink genoeg", "Al een beetje uitdroging maakt je minder scherp.", "Drink de hele dag door water, ook tijdens het huiswerk.", "Altijd"),
  FT("Kleine doelen", "Een groot doel kan te ver weg voelen.", "Verdeel het in kleine stappen: vandaag 50 passes met je zwakke voet.", "Training"),
  FT("Focus op het proces", "Denk niet aan de uitslag, maar aan wat je nu moet doen.", "Vraag jezelf: wat is mijn volgende taak?", "Wedstrijd"),
  FT("Rustig worden bij spanning", "Spanning is normaal. Het betekent dat het belangrijk voor je is.", "Adem lang uit, ontspan je schouders en kijk naar één punt.", "Voor de wedstrijd"),
  FT("Luister actief naar je trainer", "Goed luisteren is ook concentreren.", "Kijk je trainer aan en herhaal in je hoofd wat hij zegt.", "Training"),
  FT("De eerste 5 minuten", "Veel wedstrijden worden in het begin al bepaald.", "Wees vanaf het eerste fluitsignaal scherp: eerste duel, eerste sprint.", "Wedstrijd"),
  FT("De laatste 5 minuten", "Aan het eind is iedereen moe en vallen veel goals.", "Zeg tegen jezelf: nu nog scherper.", "Wedstrijd")
];
const FOCUS_OEFENINGEN = [
  ["Kleurenspel", "Laat iemand kleuren roepen terwijl je dribbelt. Tik bij 'rood' de bal met je zool, bij 'blauw' met je buitenkant. Traint je hoofd en voeten tegelijk."],
  ["Tel terug", "Houd de bal hoog en tel hardop terug van 50. Lastig, maar goed voor je focus."],
  ["Eén minuut stil", "Ga een minuut zitten en let alleen op je ademhaling. Dwalen je gedachten af? Breng ze rustig terug."],
  ["Schouderblik-spel", "Speel tegen de muur en kijk voor elke aanname over je schouder. Roep wat je ziet."],
  ["Focus-kaart", "Schrijf voor de training één ding op een papiertje en lees het in de pauze nog eens."]
];

// ---------- Geen excuses ----------
const EXCUSES = [
  ["Ik heb geen zin.", "Begin gewoon 2 minuten. Zin komt vaak pas als je bezig bent."],
  ["Ik heb geen tijd.", "10 minuten is genoeg. Iedereen heeft 10 minuten."],
  ["Het regent.", "In een wedstrijd regent het ook. Trek een jas aan, of train binnen kracht en balans."],
  ["Ik ben moe.", "Doe dan iets lichts: rekken of 5 minuten balcontacten. Echt moe? Slaap dan eerder."],
  ["Ik kan het toch niet.", "Nog niet. Alles wat je nu kunt, kon je ooit ook niet."],
  ["De trainer ziet me niet zitten.", "Laat het hem zien met je inzet. Vraag wat je beter kunt doen."],
  ["Mijn teamgenoten doen het ook niet.", "Jij bent niet zij. Wees degene die het voorbeeld geeft."],
  ["Morgen begin ik.", "Morgen wordt nooit vandaag. Doe nu één kleine stap."],
  ["Ik heb geen muur of veld.", "Je hebt een bal en twee voeten. Hooghouden en tikjes kan overal."],
  ["Het lukt toch niet meer vandaag.", "Doe het kleinste stukje: 20 squats. Dan heb je toch iets gedaan."],
  ["Het is te koud.", "Warm je eerst goed op. Kou is geen reden, wel een reden om beter op te warmen."],
  ["Die ander is gewoon beter.", "Vergelijk je met jezelf van gisteren, niet met anderen."],
  ["Ik ben niet getalenteerd.", "Hard werken verslaat talent als talent niet hard werkt."],
  ["Ik heb pech gehad.", "Pech gebeurt. Wat je daarna doet, bepaal jij."],
  ["De scheidsrechter was slecht.", "Je kunt hem niet veranderen. Je eigen spel wel."],
  ["Ik vergeet het steeds.", "Zet het in je planner of hang een briefje op je spiegel."],
  ["Het is saai.", "Maak er een spel van: tel, time of daag jezelf uit."],
  ["Ik heb het al een keer geprobeerd.", "Eén keer is niet genoeg. Profs oefenen duizenden keren."],
  ["Ik ben nog te jong.", "De beste spelers begonnen juist jong met hard werken."],
  ["Ik doe het later wel.", "Later wordt vaak nooit. Doe het nu, dan ben je ervan af."],
  ["Mijn schoenen zijn niet goed.", "Train dan iets zonder schoenen: kracht, balans of rekken."],
  ["Ik ben slecht in mijn zwakke voet.", "Daarom moet je hem juist trainen. Elke dag 20 passes."],
  ["Niemand wil met me trainen.", "Dan train je alleen. Een muur is altijd beschikbaar."],
  ["Ik had een slechte dag.", "Een slechte dag mag. Morgen is een nieuwe kans. Ga op tijd slapen."],
  ["Ik wil eerst nog even gamen.", "Eerst trainen, dan gamen. Dan geniet je er ook meer van."]
];

// ---------- Leiderschap ----------
const LT = (title, wat, doe, voorbeeld) => ({title, wat, doe, voorbeeld});
const LEIDER = [
  LT("Geef het voorbeeld", "Een leider doet zelf wat hij van anderen vraagt.", "Wees op tijd, werk hard en help met opruimen.", "Teamgenoten volgen wat je doet, niet wat je zegt."),
  LT("Praat op het veld", "Een leider helpt zijn teamgenoten met korte, duidelijke woorden.", "Roep 'man', 'tijd', 'draai' en namen.", "Een stil team maakt meer fouten."),
  LT("Blijf positief na een fout", "Na een fout van een teamgenoot is jouw reactie belangrijk.", "Zeg 'kom op, volgende' in plaats van boos te worden.", "Een team dat elkaar steunt, herstelt sneller."),
  LT("Moedig aan", "Aanmoedigen geeft energie aan het hele team.", "Geef elke wedstrijd minstens drie complimenten.", "Een compliment op het goede moment doet wonderen."),
  LT("Neem verantwoordelijkheid", "Een leider kijkt eerst naar zichzelf.", "Zeg 'mijn fout' als jij iets fout doet.", "Zo durft de rest dat ook."),
  LT("Help nieuwe spelers", "Een nieuwe speler voelt zich vaak onzeker.", "Laat hem meedoen, leg dingen uit en stel hem voor aan anderen.", "Zo wordt het team sterker."),
  LT("Luister naar anderen", "Een goede leider praat niet alleen, maar luistert ook.", "Vraag een teamgenoot hoe het gaat of wat hij ervan vindt.", "Mensen volgen iemand die naar ze luistert."),
  LT("Blijf rustig bij spanning", "Als het spannend wordt, kijkt het team naar de leider.", "Adem rustig, praat rustig en geef duidelijke aanwijzingen.", "Rust is besmettelijk."),
  LT("Respect voor iedereen", "Een leider heeft respect voor de scheidsrechter, de tegenstander en zijn team.", "Geef iedereen na de wedstrijd een hand.", "Respect krijg je door het te geven."),
  LT("Verdeel taken", "Een aanvoerder zorgt dat iedereen weet wat hij moet doen.", "Spreek bij hoekschoppen en vrije trappen af wie waar staat.", "Duidelijkheid voorkomt chaos."),
  LT("Wees eerlijk", "Een leider zegt eerlijk wat er beter kan, op een aardige manier.", "Zeg wat goed ging én wat beter kan.", "Eerlijkheid bouwt vertrouwen."),
  LT("Werk het hardst", "Als jij het hardst werkt, kan niemand achterblijven.", "Sprint terug als je de bal verliest, ook in de laatste minuut.", "Inzet is het beste voorbeeld."),
  LT("Vier samen", "Een goal is van het hele team.", "Vier een goal samen met de speler die de assist gaf.", "Samen winnen voelt beter."),
  LT("Na verlies: samen verder", "Na een verlies is de leider degene die het team weer oppept.", "Zeg wat goed ging en wat jullie de volgende keer beter doen.", "Een team dat samen verliest, kan samen winnen."),
  LT("Ken je teamgenoten", "Iedereen is anders. De een heeft een duwtje nodig, de ander rust.", "Let op hoe teamgenoten reageren en pas je woorden aan.", "Een goede leider kent zijn mensen."),
  LT("Praat met de trainer", "Een aanvoerder is de brug tussen team en trainer.", "Vertel de trainer wat er in het team speelt, op een rustige manier.", "Zo begrijpen trainer en team elkaar beter."),
  LT("Houd je aan afspraken", "Een leider doet wat hij zegt.", "Kom je afspraken na, ook de kleine.", "Betrouwbaar zijn maakt je een leider."),
  LT("Geef anderen een kans", "Een leider laat ook anderen schitteren.", "Speel de bal naar iemand die beter staat, ook als jij zelf kunt schieten.", "Een team is sterker dan één speler."),
  LT("Ga voor elkaar door het vuur", "Een leider verdedigt zijn teamgenoten.", "Sta naast een teamgenoot die het moeilijk heeft.", "Zo voelt iedereen zich veilig."),
  LT("Blijf leren", "Ook leiders worden steeds beter.", "Vraag na de wedstrijd: wat kon ik als leider beter doen?", "De beste leiders blijven leren.")
];
const LEIDER_OPDRACHTEN = [
  "Geef deze week elke training een compliment aan drie teamgenoten.",
  "Help na elke training met opruimen, zonder dat iemand het vraagt.",
  "Praat deze week extra veel op het veld: roep namen en aanwijzingen.",
  "Zeg na elke fout van een teamgenoot iets positiefs.",
  "Kom deze week elke training als eerste klaar te staan.",
  "Vraag een stille teamgenoot hoe het met hem gaat.",
  "Bedank na de wedstrijd de scheidsrechter en de trainer.",
  "Help een nieuwe of jongere speler met een oefening."
];
