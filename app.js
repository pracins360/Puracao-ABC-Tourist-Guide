// ------------------------------
// LANGUAGE SELECTOR LOGIC
// ------------------------------
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-lang");
    localStorage.setItem("language", selected);

    // Load main app
    window.location.href = "main.html";
  });
});


// ------------------------------
// MULTILINGUAL DICTIONARY
// ------------------------------
const dictionary = {
  en: {
    welcome: "Welcome to PuraCao",
    menu_title: "Main Menu",
    locations: "Tourist Locations",
    transport: "Transport Directory",
    culture: "Local Culture & Connections",
    psoc: "PSOC Personal Guide",
    wallet_course: "Wallet Course",
    recommend: "Recommend Drivers/Places",
    status: "Account Status",
    unlock: "Enter Unlock Code"
  },
  es: {
    welcome: "Bienvenido a PuraCao",
    menu_title: "Menú Principal",
    locations: "Lugares Turísticos",
    transport: "Directorio de Transporte",
    culture: "Cultura Local y Conexiones",
    psoc: "Guía Personal PSOC",
    wallet_course: "Curso de Billetera",
    recommend: "Recomendar Conductores/Lugares",
    status: "Estado de la Cuenta",
    unlock: "Ingresar Código"
  },
  pap: {
    welcome: "Bon bini na PuraCao",
    menu_title: "Menu Prinsipal",
    locations: "Luganan Turístiko",
    transport: "Direktorio di Transporte",
    culture: "Kultura Lokal & Konexhon",
    psoc: "Guia Personal PSOC",
    wallet_course: "Kurso di Wallet",
    recommend: "Rekomendá Chófer/Lugá",
    status: "Estado di Kuentá",
    unlock: "Hinka Kódigo"
  },
  pt: {
    welcome: "Bem-vindo ao PuraCao",
    menu_title: "Menu Principal",
    locations: "Locais Turísticos",
    transport: "Diretório de Transporte",
    culture: "Cultura Local & Conexões",
    psoc: "Guia Pessoal PSOC",
    wallet_course: "Curso de Carteira",
    recommend: "Recomendar Motoristas/Lugares",
    status: "Status da Conta",
    unlock: "Inserir Código"
  },
  de: {
    welcome: "Willkommen bei PuraCao",
    menu_title: "Hauptmenü",
    locations: "Touristenorte",
    transport: "Transportverzeichnis",
    culture: "Lokale Kultur & Kontakte",
    psoc: "PSOC Persönlicher Guide",
    wallet_course: "Wallet Kurs",
    recommend: "Fahrer/Orte Empfehlen",
    status: "Kontostatus",
    unlock: "Code Eingeben"
  },
  fr: {
    welcome: "Bienvenue à PuraCao",
    menu_title: "Menu Principal",
    locations: "Lieux Touristiques",
    transport: "Annuaire de Transport",
    culture: "Culture Locale & Connexions",
    psoc: "Guide Personnel PSOC",
    wallet_course: "Cours de Portefeuille",
    recommend: "Recommander Conducteurs/Lieux",
    status: "Statut du Compte",
    unlock: "Entrer le Code"
  },
  it: {
    welcome: "Benvenuto a PuraCao",
    menu_title: "Menu Principale",
    locations: "Luoghi Turistici",
    transport: "Directory Trasporti",
    culture: "Cultura Locale & Connessioni",
    psoc: "Guida Personale PSOC",
    wallet_course: "Corso Wallet",
    recommend: "Raccomanda Autisti/Luoghi",
    status: "Stato Account",
    unlock: "Inserisci Codice"
  },
  fil: {
    welcome: "Maligayang pagdating sa PuraCao",
    menu_title: "Pangunahing Menu",
    locations: "Mga Lugar na Panturista",
    transport: "Direktoryo ng Transportasyon",
    culture: "Lokal na Kultura at Koneksyon",
    psoc: "PSOC Personal Guide",
    wallet_course: "Wallet Course",
    recommend: "Magrekomenda ng Driver/Lugar",
    status: "Status ng Account",
    unlock: "Ilagay ang Code"
  },
  nl: {
    welcome: "Welkom bij PuraCao",
    menu_title: "Hoofdmenu",
    locations: "Toeristische Locaties",
    transport: "Transportgids",
    culture: "Lokale Cultuur & Connecties",
    psoc: "PSOC Persoonlijke Gids",
    wallet_course: "Wallet Cursus",
    recommend: "Aanbevolen Chauffeurs/Plaatsen",
    status: "Accountstatus",
    unlock: "Code Invoeren"
  }
};


// ------------------------------
// LOAD LANGUAGE
// ------------------------------
const lang = localStorage.getItem("language") || "en";


// ------------------------------
// LOAD MAIN MENU TEXT
// ------------------------------
if (document.getElementById("menu-title")) {
  document.getElementById("menu-title").innerText = dictionary[lang].menu_title;
  document.getElementById("btn-locations").innerText = dictionary[lang].locations;
  document.getElementById("btn-transport").innerText = dictionary[lang].transport;
  document.getElementById("btn-culture").innerText = dictionary[lang].culture;
  document.getElementById("btn-psoc").innerText = dictionary[lang].psoc;
  document.getElementById("btn-wallet-course").innerText = dictionary[lang].wallet_course;
  document.getElementById("btn-recommend").innerText = dictionary[lang].recommend;
  document.getElementById("btn-status").innerText = dictionary[lang].status;
  document.getElementById("btn-unlock").innerText = dictionary[lang].unlock;
}


// ------------------------------
// LOAD WELCOME TEXT (index.html)
// ------------------------------
if (document.getElementById("welcome")) {
  document.getElementById("welcome").innerText = dictionary[lang].welcome;
}
