// ---------- Alleen echte motivatie-Shorts ----------
// Geen compilaties van "momenten" meer, alleen Shorts met een motiverende speech of boodschap.
// Werkt een filmpje niet (verwijderd of niet in te sluiten)? Dan verbergt de app het vanzelf.
(() => {
  const S = (title, video, note) => ({title, video, short:true, note});
  GOGGINS_VIDEOS.splice(0, GOGGINS_VIDEOS.length,
    S("Stay Hard", "g8OdN9e8ttk", "Zijn bekendste motto: blijf doorgaan als het zwaar wordt."),
    S("Get After It", "BT4tWKyYDTs", "Niet wachten tot je zin hebt, gewoon beginnen."),
    S("Lazy", "j5aor1O9WnM", "Over luiheid verslaan."),
    S("There is no dopamine", "oGMdi7L-WiU", "Waarom je niet moet wachten op motivatie."),
    S("Embrace the pain", "xvhiu5qqEk0", "Zwaar is niet slecht. Zwaar maakt je sterker."),
    S("Taking souls", "5SiPAKsJlqg", "Blijf gaan als de rest stopt."),
    S("Stay hard", "AvpjnGFkB1s", "Kort en krachtig over discipline."),
    S("Stay hard: zero excuses", "QXq9hokKb0Y", "Geen excuses, gewoon doen."),
    S("Stay hard: discipline", "qORkQJoiL6U", "Discipline wint van zin hebben."),
    S("Stay hard: stay focused", "UxBOuHMvodo", "Blijf gefocust op je doel."),
    S("Stay hard: mindset", "6__CiZ3rR1s", "Over een sterke mindset."),
    S("Stay Hard (short)", "NrRvP5EK990", "Goggins in een paar seconden.")
  );
  GOGGINS_VIDEOS.forEach(v => v.goggins = true);
  MINDSET_VIDEOS.splice(0, MINDSET_VIDEOS.length,
    S("Ronaldo: talent without work is nothing", "TbidG74hg7Y", "Ronaldo zelf over waarom hard werken belangrijker is dan talent."),
    S("Ronaldo: dedication and hard work", "-sWHSF_TGls", "Ronaldo over toewijding."),
    S("Ronaldo: motivational speech", "C_Ta14avc3g", "Ronaldo over in jezelf geloven."),
    S("Ronaldo spreekt zijn team toe", "azA4jjaHKDY", "Wat Ronaldo zegt voor een wedstrijd."),
    S("Ronaldo: final speech", "4nswQjNTDGs", "Ronaldo over nooit tevreden zijn."),
    S("Ronaldo: when you believe", "14orcjz8bZc", "Over in jezelf geloven."),
    S("Ronaldo: best mentality", "gi4wMBw1Z64", "De mentaliteit van Ronaldo."),
    S("Ronaldo: it's not about the money", "qbDlBMob4xg", "Waar het Ronaldo echt om gaat."),
    S("Ronaldo: bad times", "9Xg-OhoyEM4", "Hoe Ronaldo terugkwam na slechte tijden."),
    S("Messi spreekt zijn team toe", "UfJ5BqXPaWE", "Messi als leider voor een wedstrijd."),
    S("Messi: never give up", "5XEGkIxZXkU", "Messi over nooit opgeven."),
    S("Kobe Bryant: life-changing advice", "WPfVJ3On2Oc", "Kobe over hoe je de beste wordt."),
    S("Kobe Bryant: mamba mentality", "lHIyPJmtkVw", "De werkhouding van Kobe Bryant."),
    S("Kobe Bryant over hard werken", "WEVKem6iCPI", "Kobe over luiheid en hard werken."),
    S("Usain Bolt: no limits", "hpdjkwJAjuk", "De snelste man ooit over grenzen verleggen."),
    S("Arnold: I hate plan B", "QyLhLGomOuA", "Arnold Schwarzenegger over vol gaan voor je doel."),
    S("Arnold Schwarzenegger: work hard", "zoKWBLxIjVY", "Arnold over hard werken voor je droom."),
    S("Eric Thomas: time to level up", "8kOePwmcCfE", "Tijd om beter te worden."),
    S("Eric Thomas: being successful", "SRmKTQT6ov0", "Wat succes echt kost."),
    S("Find a reason to keep going", "MpBSDxk4hwg", "Zoek je reden om door te gaan."),
    S("Coach speech: winning", "ExAkkAbwLHY", "Een krachtcoach spreekt zijn team toe over winnen."),
    S("Discipline", "KPiKbYlXpBg", "Korte speech over discipline."),
    S("Why discipline beats talent", "-SpHAAyS_Cc", "Waarom oefenen wint van talent."),
    S("Discipline over motivation", "q-UMVPEky-8", "Ook trainen als je geen zin hebt."),
    S("Never stop working on yourself", "eLB7WgMeYiQ", "Blijf aan jezelf werken."),
    S("Be the best version of yourself", "R7AOjm7G_3A", "De beste versie van jezelf worden."),
    S("Trying is all that matters", "2gghlzmLIoY", "Je best doen, ook als het moeilijk is."),
    S("Just don't give up", "JjYOXinhh9M", "Kort en krachtig.")
  );
  LONG_VIDEOS.splice(0, LONG_VIDEOS.length);   // vanaf nu alleen Shorts
})();
