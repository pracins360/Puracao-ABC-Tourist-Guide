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
    status_title: "Account Status",
status_state_label: "Current status:",
status_duration_label: "Duration:",
status_expires_label: "Expires on:",
status_psoc_label: "PSOC active:",
status_wallet_label: "Wallet course unlocked:",
status_state_trial: "Trial",
status_state_active: "Active",
status_state_frozen: "Frozen",
status_state_unknown: "Unknown",
status_duration_none: "No duration set",
status_expires_none: "No expiry date",
status_yes: "Yes",
status_no: "No",
donation_title: "Support PuraCao",
donation_desc: "Your donation helps keep PuraCao free for tourists worldwide.",
donation_usdt_title: "Donate with USDT",
donation_usdt_text: "Send USDT to wallet address: 0x1234...ABCD",
donation_xcg_title: "Donate with XCG",
donation_xcg_text: "Send XCG to wallet address: XCG-987654321",
donation_contact_title: "Contact for Help",
donation_contact_text: "Message Mr. Purcy at +59995120536 for donation assistance.",
persona_title: "Your Personal Guide",
persona_section1_title: "Cultural Tips",
persona_section1_text: "Learn how to greet locals, respect traditions, and enjoy the island safely.",
persona_section2_title: "Safety Advice",
persona_section2_text: "Stay aware at night, use trusted drivers, and keep valuables secure.",
persona_section3_title: "Island Guidance",
persona_section3_text: "Find the best beaches, food spots, and hidden gems across Curaçao.",
emergency_title: "Emergency Help",

emergency_police_title: "Police",
emergency_police_text: "Call 911 or +5999 917 for immediate police assistance.",

emergency_ambulance_title: "Ambulance",
emergency_ambulance_text: "Call 912 for medical emergencies.",

emergency_fire_title: "Fire Department",
emergency_fire_text: "Call 911 or +5999 488 8888 for fire emergencies.",

emergency_tourist_title: "Tourist Emergency Hotline",
emergency_tourist_text: "Call +5999 462 1233 for tourist support and urgent help.",

emergency_purcy_title: "Contact Mr. Purcy",
emergency_purcy_text: "For urgent help or guidance, call or WhatsApp +59995120536.",

emergency_safety_title: "Safety Tips",
emergency_safety_text: "Stay in well-lit areas, use trusted drivers, keep valuables secure, and avoid isolated locations at night.",
events_title: "Island Events",
events_list: [
  {
    name: "Mambo Beach Party",
    date: "Every Friday",
    desc: "Live DJs, cocktails, and sunset vibes at Mambo Beach."
  },
  {
    name: "Punda Vibes",
    date: "Every Thursday",
    desc: "Street festival with music, food, art, and local culture."
  },
  {
    name: "Full Moon Party",
    date: "Monthly",
    desc: "Beach celebration with fire shows and live performances."
  },
  {
    name: "Carnival Parade",
    date: "February",
    desc: "Colorful costumes, music, and dancing across Willemstad."
  },
  {
    name: "Kaya Kaya Street Festival",
    date: "August",
    desc: "Community event with art, food, and live bands."
  }
]
menu_title: "Main Menu",
menu_locations: "Tourist Locations",
menu_transport: "Transport Directory",
menu_culture: "Local Culture",
menu_psoc: "PSOC Personal Guide",
menu_wallet_course: "Wallet Course",
menu_recommend: "Recommend Drivers/Places",
menu_status: "Account Status",
menu_unlock: "Enter Unlock Code",

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
loc_title: "Tourist Locations",
loc_list: [
  { name: "Mambo Beach", desc: "Popular beach with restaurants and nightlife." },
  { name: "Punda", desc: "Historic district with colorful buildings and shops." },
  { name: "Otrobanda", desc: "Cultural center with local food and markets." },
  { name: "Shete Boka", desc: "National park with dramatic coastline." },
  { name: "Playa Lagun", desc: "Quiet beach perfect for snorkeling." }
],

transport_title: "Transport Directory",
transport_list: [
  { driver: "Carlos", route: "Mambo → Punda → Otrobanda", contact: "+5999 555 1234" },
  { driver: "Maria", route: "Airport → Hotels → Mambo", contact: "+5999 555 5678" },
  { driver: "Jorge", route: "Westpunt → Lagun → Shete Boka", contact: "+5999 555 9012" }
]
frozen_title: "Access Frozen",
frozen_reason_trial: "Your free trial has ended.",
frozen_reason_duration: "Your paid access has expired.",
frozen_contact: "Contact Mr. Purcy at +59995120536 to continue.",
frozen_title: "Access Frozen",
frozen_reason_trial: "Your free trial has ended.",
frozen_reason_duration: "Your paid access has expired.",
frozen_contact: "Contact Mr. Purcy at +59995120536 to continue.",
frozen_title: "Acceso Congelado",
frozen_reason_trial: "Su prueba gratuita ha terminado.",
frozen_reason_duration: "Su acceso pagado ha expirado.",
frozen_contact: "Contacte al Sr. Purcy al +59995120536 para continuar.",
frozen_title: "Akseso Ta Frio",
frozen_reason_trial: "Bo prubeo gratis a kaba.",
frozen_reason_duration: "Bo akseso pagá a ekspirá.",
frozen_contact: "Tuma kontakto ku Señor Purcy na +59995120536 pa kontinuá.",
frozen_title: "Acesso Congelado",
frozen_reason_trial: "Seu período de teste gratuito terminou.",
frozen_reason_duration: "Seu acesso pago expirou.",
frozen_contact: "Contate o Sr. Purcy no +59995120536 para continuar.",
frozen_title: "Zugang Eingefroren",
frozen_reason_trial: "Ihre kostenlose Testphase ist beendet.",
frozen_reason_duration: "Ihr bezahlter Zugang ist abgelaufen.",
frozen_contact: "Kontaktieren Sie Herrn Purcy unter +59995120536, um fortzufahren.",
frozen_title: "Accès Gelé",
frozen_reason_trial: "Votre essai gratuit est terminé.",
frozen_reason_duration: "Votre accès payant a expiré.",
frozen_contact: "Contactez M. Purcy au +59995120536 pour continuer.",
frozen_title: "Accesso Bloccato",
frozen_reason_trial: "La tua prova gratuita è terminata.",
frozen_reason_duration: "Il tuo accesso a pagamento è scaduto.",
frozen_contact: "Contatta il Sig. Purcy al +59995120536 per continuare.",
frozen_title: "Naka-freeze ang Access",
frozen_reason_trial: "Tapos na ang iyong libreng trial.",
frozen_reason_duration: "Nag-expire na ang iyong bayad na access.",
frozen_contact: "Makipag-ugnayan kay Mr. Purcy sa +59995120536 upang magpatuloy.",
frozen_title: "Toegang Bevroren",
frozen_reason_trial: "Je gratis proefperiode is afgelopen.",
frozen_reason_duration: "Je betaalde toegang is verlopen.",
frozen_contact: "Neem contact op met meneer Purcy via +59995120536 om verder te gaan.",


// ------------------------------
// LOAD LANGUAGE
// ------------------------------
const lang = localStorage.getItem("language") || "en";
// ------------------------------
// MAIN MENU TEXT LOADER
// ------------------------------
if (document.getElementById("menu-title")) {

  document.getElementById("menu-title").innerText = dictionary[lang].menu_title;

  document.getElementById("btn-locations").innerText = dictionary[lang].menu_locations;
  document.getElementById("btn-transport").innerText = dictionary[lang].menu_transport;
  document.getElementById("btn-culture").innerText = dictionary[lang].menu_culture;
  document.getElementById("btn-psoc").innerText = dictionary[lang].menu_psoc;
  document.getElementById("btn-wallet-course").innerText = dictionary[lang].menu_wallet_course;
  document.getElementById("btn-recommend").innerText = dictionary[lang].menu_recommend;
  document.getElementById("btn-status").innerText = dictionary[lang].menu_status;
  document.getElementById("btn-unlock").innerText = dictionary[lang].menu_unlock;
}


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
// ------------------------------------------------------
// TRIAL → FREEZE → UNLOCK SYSTEM
// ------------------------------------------------------

// Load or initialize user state
function loadUserState() {
  const state = localStorage.getItem("userState");
  if (state) return JSON.parse(state);

  // First-time user → start trial
  const newState = {
    status: "trial",
    start_date: new Date().toISOString(),
    duration: null,
    expires: null,
    approved_by: null,
    psoc: false,
    wallet_course_unlocked: false
  };

  localStorage.setItem("userState", JSON.stringify(newState));
  return newState;
}

function saveUserState(state) {
  localStorage.setItem("userState", JSON.stringify(state));
}

// Calculate days between two dates
function daysBetween(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  return Math.floor((e - s) / (1000 * 60 * 60 * 24));
}

// Check trial expiration
function checkTrial(state) {
  if (state.status !== "trial") return state;

  const today = new Date();
  const usedDays = daysBetween(state.start_date, today);

  if (usedDays >= 3) {
    state.status = "frozen";
    state.reason = "trial_expired";
    saveUserState(state);
  }

  return state;
}

// Check paid duration expiration
function checkExpiration(state) {
  if (state.status !== "active") return state;
  if (!state.expires) return state;

  const today = new Date();
  const expiry = new Date(state.expires);

  if (today >= expiry) {
    state.status = "frozen";
    state.reason = "duration_expired";
    saveUserState(state);
  }

  return state;
}

// Unlock code processor
function processUnlockCode(code) {
  const state = loadUserState();

  if (!code.startsWith("PURA-")) {
    alert("Invalid code");
    return;
  }

  // Extract duration from code
  const durationMatch = code.match(/(\d+)DAY/);
  if (durationMatch) {
    const duration = parseInt(durationMatch[1]);
    const expires = new Date();
    expires.setDate(expires.getDate() + duration);

    state.status = "active";
    state.duration = duration;
    state.expires = expires.toISOString();
    state.approved_by = "Purcy";
  }

  // Wallet course unlock
  if (code.includes("WALLETCOURSE")) {
    state.wallet_course_unlocked = true;
  }

  // PSOC activation
  if (code.includes("PSOC")) {
    state.psoc = true;
  }

  saveUserState(state);
  alert("Unlocked successfully!");
  window.location.reload();
}

// Attach unlock button logic (main.html)
if (document.getElementById("unlock-input")) {
  document.getElementById("unlock-btn").addEventListener("click", () => {
    const code = document.getElementById("unlock-input").value.trim();
    processUnlockCode(code);
  });
}

// Run state checks on page load
let userState = loadUserState();
userState = checkTrial(userState);
userState = checkExpiration(userState);
saveUserState(userState);

// Display frozen message if needed
if (userState.status === "frozen") {
  const msg = document.getElementById("frozen-message");
  if (msg) {
    msg.innerHTML = `
      <h3>Your access is frozen</h3>
      <p>Reason: ${userState.reason}</p>
      <p>Contact Mr. Purcy: 59995120536</p>
    `;
  }
}
wallet_title: "Wallet Course",
wallet_locked_title: "Course Locked",
wallet_locked_desc: "Enter your unlock code to access the free 1-hour wallet course.",
wallet_section1_title: "1. How to Start a Wallet (Metamask)",
wallet_section1_text: "Download Metamask, create a secure password, and store your recovery phrase offline.",
wallet_section2_title: "2. How to Fund Your Wallet",
wallet_section2_text: "Buy USDT or XCG on an exchange and transfer it to your wallet address.",
wallet_section3_title: "3. How to Pay From Your Wallet",
wallet_section3_text: "Open your wallet, scan the QR code, confirm the transaction, and wait for approval.",
// ------------------------------
// WALLET COURSE MODULE
// ------------------------------
if (document.getElementById("wallet-title")) {

  const state = loadUserState();

  // Load multilingual text
  document.getElementById("wallet-title").innerText = dictionary[lang].wallet_title;
  document.getElementById("wallet-locked-title").innerText = dictionary[lang].wallet_locked_title;
  document.getElementById("wallet-locked-desc").innerText = dictionary[lang].wallet_locked_desc;

  document.getElementById("wallet-section1-title").innerText = dictionary[lang].wallet_section1_title;
  document.getElementById("wallet-section1-text").innerText = dictionary[lang].wallet_section1_text;

  document.getElementById("wallet-section2-title").innerText = dictionary[lang].wallet_section2_title;
  document.getElementById("wallet-section2-text").innerText = dictionary[lang].wallet_section2_text;

  document.getElementById("wallet-section3-title").innerText = dictionary[lang].wallet_section3_title;
  document.getElementById("wallet-section3-text").innerText = dictionary[lang].wallet_section3_text;

  // Lock/unlock logic
  if (state.wallet_course_unlocked === true) {
    document.getElementById("wallet-locked").style.display = "none";
    document.getElementById("wallet-content").style.display = "block";
  } else {
    document.getElementById("wallet-locked").style.display = "block";
    document.getElementById("wallet-content").style.display = "none";
  }
}
psoc_title: "PSOC Personal Guide",
psoc_locked_title: "PSOC Locked",
psoc_locked_desc: "Enter your unlock code to activate the PSOC personal guide.",
psoc_section1_title: "1. What is PSOC?",
psoc_section1_text: "PSOC is your personal guide for the ABC islands, offering cultural insights, safety tips, and personalized recommendations.",
psoc_section2_title: "2. Pricing (Dual Currency)",
psoc_section2_text: "PSOC costs XCG 50ct per day or US$ 0.30 per day. Pay via wallet or discuss payment with Mr. Purcy.",
psoc_section3_title: "3. What You Receive",
psoc_section3_text: "Daily guidance, cultural explanations, safety alerts, and personalized tourist support across Aruba, Bonaire, and Curaçao.",
// ------------------------------
// PSOC MODULE
// ------------------------------
if (document.getElementById("psoc-title")) {

  const state = loadUserState();

  // Load multilingual text
  document.getElementById("psoc-title").innerText = dictionary[lang].psoc_title;
  document.getElementById("psoc-locked-title").innerText = dictionary[lang].psoc_locked_title;
  document.getElementById("psoc-locked-desc").innerText = dictionary[lang].psoc_locked_desc;

  document.getElementById("psoc-section1-title").innerText = dictionary[lang].psoc_section1_title;
  document.getElementById("psoc-section1-text").innerText = dictionary[lang].psoc_section1_text;

  document.getElementById("psoc-section2-title").innerText = dictionary[lang].psoc_section2_title;
  document.getElementById("psoc-section2-text").innerText = dictionary[lang].psoc_section2_text;

  document.getElementById("psoc-section3-title").innerText = dictionary[lang].psoc_section3_title;
  document.getElementById("psoc-section3-text").innerText = dictionary[lang].psoc_section3_text;

  // Lock/unlock logic
  if (state.psoc === true) {
    document.getElementById("psoc-locked").style.display = "none";
    document.getElementById("psoc-content").style.display = "block";
  } else {
    document.getElementById("psoc-locked").style.display = "block";
    document.getElementById("psoc-content").style.display = "none";
  }
}
// ------------------------------
// LOCATIONS MODULE
// ------------------------------
if (document.getElementById("loc-title")) {

  document.getElementById("loc-title").innerText = dictionary[lang].loc_title;

  const list = dictionary[lang].loc_list;
  const container = document.getElementById("loc-list");

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "loc-item";
    div.innerHTML = `<strong>${item.name}</strong><br>${item.desc}`;
    container.appendChild(div);
  });
}


// ------------------------------
// TRANSPORT MODULE
// ------------------------------
if (document.getElementById("transport-title")) {

  document.getElementById("transport-title").innerText = dictionary[lang].transport_title;

  const list = dictionary[lang].transport_list;
  const container = document.getElementById("transport-list");

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "transport-item";
    div.innerHTML = `
      <strong>Driver:</strong> ${item.driver}<br>
      <strong>Route:</strong> ${item.route}<br>
      <strong>Contact:</strong> ${item.contact}
    `;
    container.appendChild(div);
  });
}
// ------------------------------
// FROZEN PERSONA SCREEN
// ------------------------------
if (document.getElementById("frozen-title")) {

  const state = loadUserState();

  // Load multilingual title
  document.getElementById("frozen-title").innerText = dictionary[lang].frozen_title;

  // Reason
  let reasonText = "";

  if (state.reason === "trial_expired") {
    reasonText = dictionary[lang].frozen_reason_trial;
  }

  if (state.reason === "duration_expired") {
    reasonText = dictionary[lang].frozen_reason_duration;
  }

  document.getElementById("frozen-reason").innerText = reasonText;

  // Contact
  document.getElementById("frozen-contact").innerText = dictionary[lang].frozen_contact;
}
// ------------------------------
// ACCOUNT STATUS SCREEN
// ------------------------------
if (document.getElementById("status-title")) {

  const state = loadUserState();

  document.getElementById("status-title").innerText = dictionary[lang].status_title;

  // Status
  let statusText = dictionary[lang].status_state_unknown;
  if (state.status === "trial") statusText = dictionary[lang].status_state_trial;
  if (state.status === "active") statusText = dictionary[lang].status_state_active;
  if (state.status === "frozen") statusText = dictionary[lang].status_state_frozen;

  document.getElementById("status-state").innerText =
    `${dictionary[lang].status_state_label} ${statusText}`;

  // Duration
  const durationText = state.duration
    ? `${state.duration} days`
    : dictionary[lang].status_duration_none;

  document.getElementById("status-duration").innerText =
    `${dictionary[lang].status_duration_label} ${durationText}`;

  // Expires
  const expiresText = state.expires
    ? new Date(state.expires).toLocaleDateString()
    : dictionary[lang].status_expires_none;

  document.getElementById("status-expires").innerText =
    `${dictionary[lang].status_expires_label} ${expiresText}`;

  // PSOC
  const psocText = state.psoc ? dictionary[lang].status_yes : dictionary[lang].status_no;
  document.getElementById("status-psoc").innerText =
    `${dictionary[lang].status_psoc_label} ${psocText}`;

  // Wallet course
  const walletText = state.wallet_course_unlocked ? dictionary[lang].status_yes : dictionary[lang].status_no;
  document.getElementById("status-wallet-course").innerText =
    `${dictionary[lang].status_wallet_label} ${walletText}`;
}
// ------------------------------
// DONATION SCREEN
// ------------------------------
if (document.getElementById("donation-title")) {

  document.getElementById("donation-title").innerText = dictionary[lang].donation_title;
  document.getElementById("donation-desc").innerText = dictionary[lang].donation_desc;

  document.getElementById("donation-usdt-title").innerText = dictionary[lang].donation_usdt_title;
  document.getElementById("donation-usdt-text").innerText = dictionary[lang].donation_usdt_text;

  document.getElementById("donation-xcg-title").innerText = dictionary[lang].donation_xcg_title;
  document.getElementById("donation-xcg-text").innerText = dictionary[lang].donation_xcg_text;

  document.getElementById("donation-contact-title").innerText = dictionary[lang].donation_contact_title;
  document.getElementById("donation-contact-text").innerText = dictionary[lang].donation_contact_text;
}
// ------------------------------
// PERSONA INTERACTION SCREEN
// ------------------------------
if (document.getElementById("persona-title")) {

  document.getElementById("persona-title").innerText = dictionary[lang].persona_title;

  document.getElementById("persona-section1-title").innerText = dictionary[lang].persona_section1_title;
  document.getElementById("persona-section1-text").innerText = dictionary[lang].persona_section1_text;

  document.getElementById("persona-section2-title").innerText = dictionary[lang].persona_section2_title;
  document.getElementById("persona-section2-text").innerText = dictionary[lang].persona_section2_text;

  document.getElementById("persona-section3-title").innerText = dictionary[lang].persona_section3_title;
  document.getElementById("persona-section3-text").innerText = dictionary[lang].persona_section3_text;
}
// ------------------------------
// EMERGENCY HELP SCREEN
// ------------------------------
if (document.getElementById("emergency-title")) {

  document.getElementById("emergency-title").innerText = dictionary[lang].emergency_title;

  document.getElementById("emergency-police-title").innerText = dictionary[lang].emergency_police_title;
  document.getElementById("emergency-police-text").innerText = dictionary[lang].emergency_police_text;

  document.getElementById("emergency-ambulance-title").innerText = dictionary[lang].emergency_ambulance_title;
  document.getElementById("emergency-ambulance-text").innerText = dictionary[lang].emergency_ambulance_text;

  document.getElementById("emergency-fire-title").innerText = dictionary[lang].emergency_fire_title;
  document.getElementById("emergency-fire-text").innerText = dictionary[lang].emergency_fire_text;

  document.getElementById("emergency-tourist-title").innerText = dictionary[lang].emergency_tourist_title;
  document.getElementById("emergency-tourist-text").innerText = dictionary[lang].emergency_tourist_text;

  document.getElementById("emergency-purcy-title").innerText = dictionary[lang].emergency_purcy_title;
  document.getElementById("emergency-purcy-text").innerText = dictionary[lang].emergency_purcy_text;

  document.getElementById("emergency-safety-title").innerText = dictionary[lang].emergency_safety_title;
  document.getElementById("emergency-safety-text").innerText = dictionary[lang].emergency_safety_text;
}
// ------------------------------
// ISLAND EVENTS SCREEN
// ------------------------------
if (document.getElementById("events-title")) {

  document.getElementById("events-title").innerText = dictionary[lang].events_title;

  const list = dictionary[lang].events_list;
  const container = document.getElementById("events-list");

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "event-item";
    div.innerHTML = `
      <strong>${item.name}</strong><br>
      <em>${item.date}</em><br>
      ${item.desc}
    `;
    container.appendChild(div);
  });
}
// ------------------------------
// MAIN MENU BUTTON LINKS
// ------------------------------
if (document.getElementById("btn-locations")) {

  document.getElementById("btn-locations").onclick = () => {
    window.location.href = "locations.html";
  };

  document.getElementById("btn-transport").onclick = () => {
    window.location.href = "transport.html";
  };

  document.getElementById("btn-culture").onclick = () => {
    window.location.href = "culture.html"; // optional future screen
  };

  document.getElementById("btn-psoc").onclick = () => {
    window.location.href = "psoc.html";
  };

  document.getElementById("btn-wallet-course").onclick = () => {
    window.location.href = "wallet-course.html";
  };

  document.getElementById("btn-recommend").onclick = () => {
    window.location.href = "recommend.html"; // optional future screen
  };

  document.getElementById("btn-status").onclick = () => {
    window.location.href = "status.html";
  };

  document.getElementById("btn-unlock").onclick = () => {
    window.location.href = "unlock.html";
  };
}
