// Stay Hard – Boek van de dag: boeken die inspireren of over voetbal gaan.
// Beschrijvingen zijn in eigen woorden. "leeftijd" is een richtlijn.

const BK = (titel, auteur, soort, leeftijd, wat, waarom, zoek) => ({titel, auteur, soort, leeftijd, wat, waarom, zoek: zoek || (titel + " " + auteur)});
const BOEKEN = [
  // Voetbal
  BK("You Are a Champion", "Marcus Rashford & Carl Anka", "Voetbal en inspiratie", "10+", "Marcus Rashford vertelt hoe je het beste uit jezelf haalt, met verhalen uit zijn eigen leven.", "Geschreven voor jongeren: over doelen, tegenslag en jezelf blijven."),
  BK("Mijn verhaal (My Turn)", "Johan Cruijff", "Voetbal", "12+", "De autobiografie van Johan Cruijff, over zijn ideeën over voetbal en het leven.", "Leer hoe een van de slimste voetballers ooit over het spel nadacht."),
  BK("Ik, Zlatan", "Zlatan Ibrahimović & David Lagercrantz", "Voetbal", "14+", "Het levensverhaal van Zlatan: van een moeilijke wijk in Zweden naar de top van het voetbal.", "Over doorzetten en in jezelf geloven, ook als niemand dat doet."),
  BK("Ultimate Football Heroes (serie)", "Matt & Tom Oldfield", "Voetbal", "8+", "Een serie korte biografieën over topspelers, zoals Messi, Ronaldo en Mbappé, vanaf hun jeugd.", "Lees hoe de grote spelers als kind begonnen en wat ze ervoor deden.", "Ultimate Football Heroes Oldfield"),
  BK("Jamie Johnson (serie)", "Dan Freedman", "Voetbal (verhaal)", "9+", "Spannende verhalen over een jongen die droomt van profvoetbal en daarvoor moet knokken.", "Een leuk verhaal met veel voetbal en doorzetten.", "Jamie Johnson Dan Freedman"),
  BK("Football Academy (serie)", "Tom Palmer", "Voetbal (verhaal)", "8+", "Verhalen over jongens in een voetbalacademie en wat ze daar meemaken.", "Over teamgeest, tegenslag en hard werken.", "Football Academy Tom Palmer"),
  BK("Football School (serie)", "Alex Bellos & Ben Lyttleton", "Voetbal en kennis", "8+", "Grappige boeken die uitleggen hoe de wereld werkt aan de hand van voetbal.", "Je leert van alles over wetenschap, geschiedenis en voetbal tegelijk.", "Football School Bellos Lyttleton"),
  BK("Messi", "Guillem Balagué", "Voetbal", "12+", "Een uitgebreide biografie over het leven en de carrière van Lionel Messi.", "Leer hoe een kleine jongen uit Rosario de beste speler van de wereld werd.", "Messi Guillem Balague"),
  BK("Cristiano Ronaldo: The Obsession for Perfection", "Luca Caioli", "Voetbal", "12+", "Een boek over Ronaldo en zijn enorme discipline en drive.", "Zie hoe hard werken en discipline van talent een wereldster maken."),
  BK("Pep Confidential", "Martí Perarnau", "Voetbal en tactiek", "14+", "Een kijkje achter de schermen bij Pep Guardiola tijdens zijn eerste seizoen in München.", "Leer hoe een toptrainer denkt over training en tactiek."),
  BK("Klopp: Bring the Noise", "Raphael Honigstein", "Voetbal", "14+", "Het verhaal van trainer Jürgen Klopp en zijn manier van voetbal.", "Over energie, teamgeest en druk zetten."),
  BK("Brilliant Orange", "David Winner", "Voetbal en geschiedenis", "15+", "Een boek over het Nederlandse voetbal en het idee van totaalvoetbal.", "Snap waarom Nederland bekendstaat om slim en aanvallend voetbal."),
  BK("Inverting the Pyramid", "Jonathan Wilson", "Voetbal en tactiek", "15+", "De geschiedenis van voetbaltactiek: hoe opstellingen en ideeën zijn veranderd.", "Voor wie echt alles over tactiek wil weten."),
  BK("The Mixer", "Michael Cox", "Voetbal en tactiek", "15+", "Hoe de tactiek in het Engelse voetbal door de jaren heen veranderde.", "Leer kijken naar voetbal zoals een analist."),
  BK("Why Soccer Matters", "Pelé", "Voetbal", "12+", "Pelé vertelt over zijn leven en waarom voetbal zo belangrijk is voor mensen over de hele wereld.", "Inspiratie van een van de grootste spelers ooit."),
  // Inspiratie en mindset
  BK("Atomic Habits", "James Clear", "Inspiratie", "14+", "Over hoe kleine gewoontes elke dag samen een groot verschil maken.", "Past precies bij je taken en habits in deze app: elke dag 1% beter."),
  BK("Mindset", "Carol Dweck", "Inspiratie", "14+", "Over het verschil tussen denken dat je talent vastligt en denken dat je kunt groeien.", "Wie gelooft dat hij kan groeien, wordt beter."),
  BK("Make Your Bed", "William H. McRaven", "Inspiratie", "12+", "Een kort boek met lessen over discipline en doorzetten, te beginnen met je bed opmaken.", "Kleine dingen goed doen is het begin van grote dingen."),
  BK("Bounce", "Matthew Syed", "Inspiratie en sport", "14+", "Over waarom oefenen belangrijker is dan aangeboren talent.", "Een sporter schrijft over hoe je echt beter wordt."),
  BK("You Are Awesome", "Matthew Syed", "Inspiratie", "9+", "Een kinderboek over zelfvertrouwen, oefenen en fouten durven maken.", "Speciaal geschreven voor jongeren: je kunt veel meer dan je denkt."),
  BK("The Little Book of Talent", "Daniel Coyle", "Inspiratie en sport", "12+", "Korte tips over hoe je slimmer oefent en sneller beter wordt.", "Elke bladzijde een tip die je meteen op de training kunt gebruiken."),
  BK("The Talent Code", "Daniel Coyle", "Inspiratie en sport", "14+", "Over waarom sommige plekken zoveel talent opleveren, zoals voetbalclubs in Brazilië.", "Leer hoe slim oefenen werkt."),
  BK("Grit", "Angela Duckworth", "Inspiratie", "15+", "Over doorzettingsvermogen: waarom volhouden belangrijker is dan talent.", "Voor iedereen die wil leren nooit op te geven."),
  BK("The Mamba Mentality", "Kobe Bryant", "Inspiratie en sport", "12+", "Basketballer Kobe Bryant vertelt hoe hij trainde en dacht, met veel foto's.", "Een topsporter laat zien wat echte toewijding is."),
  BK("Legacy", "James Kerr", "Inspiratie en sport", "15+", "Lessen over leiderschap en teamgeest van het beroemde rugbyteam de All Blacks.", "Wat maakt een team echt sterk? Dit boek legt het uit."),
  BK("Peak", "Anders Ericsson & Robert Pool", "Inspiratie", "15+", "Over hoe experts zo goed worden door gericht te oefenen.", "De wetenschap achter oefenen."),
  BK("De Alchemist", "Paulo Coelho", "Inspiratie (verhaal)", "13+", "Een verhaal over een jongen die zijn droom volgt.", "Over dromen najagen en volhouden."),
  BK("Wonder", "R.J. Palacio", "Inspiratie (verhaal)", "10+", "Over een jongen met een ander gezicht die naar een nieuwe school gaat.", "Over moed, vriendschap en aardig zijn voor elkaar."),
  BK("Can't Hurt Me", "David Goggins", "Inspiratie", "16+", "Het verhaal van David Goggins, de man achter 'Stay Hard', over mentale kracht. Bevat stevige taal.", "Voor oudere tieners: over grenzen verleggen. Lees het samen met een ouder."),
  BK("Relentless", "Tim S. Grover", "Inspiratie en sport", "16+", "Een trainer van topsporters over wat winnaars anders doen.", "Over de mentaliteit van de allerbesten."),
  BK("Leading", "Alex Ferguson & Michael Moritz", "Voetbal en leiderschap", "15+", "Sir Alex Ferguson over leiding geven aan een team.", "Leiderschapslessen van een van de beste trainers ooit."),
  BK("The 7 Habits of Highly Effective Teens", "Sean Covey", "Inspiratie", "12+", "Een boek speciaal voor tieners over gewoontes, keuzes en doelen.", "Praktische tips voor school, sport en vriendschap.")
];
