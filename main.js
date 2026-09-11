// Citizen Assist - Main JavaScript

const translations = {
  en: {
    tagline: "Government Portal Guidance",
    nav_home: "Home",
    nav_services: "Services",
    nav_faq: "FAQ",
    nav_about: "About",
    nav_contact: "Contact",
    hero_title: "Simple guidance for government digital services",
    hero_subtitle: "Find, understand and successfully use government digital portals in simple steps.",
    btn_search: "Search",
    i_am_a: "I Am A...",
    role_student: "Student",
    role_citizen: "Citizen",
    role_worker: "Worker",
    role_others: "Others",
    popular_services: "Popular Services",
    view_all: "View All",
    chat_btn: "Ask Citizen Assist"
  },
  hi: {
    tagline: "सरकारी पोर्टल मार्गदर्शन",
    nav_home: "होम",
    nav_services: "सेवाएं",
    nav_faq: "सामान्य प्रश्न",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क करें",
    hero_title: "सरकारी डिजिटल सेवाओं के लिए सरल मार्गदर्शन",
    hero_subtitle: "सरल चरणों में सरकारी डिजिटल पोर्टलों को खोजें, समझें और सफलतापूर्वक उपयोग करें।",
    btn_search: "खोजें",
    i_am_a: "मेरी श्रेणी...",
    role_student: "विद्यार्थी",
    role_citizen: "नागरिक",
    role_worker: "श्रमिक",
    role_others: "अन्य",
    popular_services: "लोकप्रिय सेवाएं",
    view_all: "सभी देखें",
    chat_btn: "सहायक से पूछें"
  },
  mr: {
    tagline: "शासकीय पोर्टल मार्गदर्शन",
    nav_home: "मुख्यपृष्ठ",
    nav_services: "सेवा",
    nav_faq: "वारंवार विचारले जाणारे प्रश्न",
    nav_about: "आमच्याबद्दल",
    nav_contact: "संपर्क",
    hero_title: "शासकीय डिजिटल सेवांसाठी सोपे मार्गदर्शन",
    hero_subtitle: "सोप्या चरणांमध्ये सरकारी डिजिटल पोर्टल शोधा, समजून घ्या आणि वापरा.",
    btn_search: "शोधा",
    i_am_a: "मी एक...",
    role_student: "विद्यार्थी",
    role_citizen: "नागरिक",
    role_worker: "कामगार",
    role_others: "इतर",
    popular_services: "लोकप्रिय सेवा",
    view_all: "सर्व पहा",
    chat_btn: "सहाय्यकाला विचारा"
  }
};

const guideData = {
  pan: {
    title: "PAN Card",
    description: "Understand the application, required documents and next steps before you continue to the official Income Tax / PAN service portal.",
    portal: "https://www.incometaxindia.gov.in/tax-services/apply-for-pan",
    track: "https://www.incometaxindia.gov.in/en/pan",
    eligibility: "Check the current PAN eligibility and application category on the official Income Tax Department website before starting.",
    documents: ["Proof of identity", "Proof of address", "Proof of date of birth", "Active mobile number and email, where required", "Scanned documents in the format and size accepted by the official portal"],
    steps: [
      "Open the official PAN application page and choose the applicable online application option.",
      "Select the correct applicant category and application type.",
      "Enter your personal details exactly as shown on your supporting documents.",
      "Keep the required identity, address and date-of-birth proofs ready and upload them when requested.",
      "Complete the applicable fee/payment and verification process on the official portal.",
      "Save the acknowledgement or application/reference number so you can track the request."
    ]
  },
  aadhaar: {
    title: "Aadhaar Services",
    description: "Get simple guidance for common Aadhaar services while keeping the final action on the official UIDAI portal or authorised centre.",
    portal: "https://myaadhaar.uidai.gov.in/",
    track: "https://myaadhaar.uidai.gov.in/",
    eligibility: "The exact process depends on the Aadhaar service. Some updates may require a visit to an authorised Aadhaar centre.",
    documents: ["Aadhaar number or enrolment details, when applicable", "Registered mobile number for OTP-based services", "Valid supporting proof for the requested update, when required", "Original documents for centre-based services, when required"],
    steps: [
      "Open the official UIDAI / myAadhaar website and select the service you need.",
      "Read the eligibility and document requirements shown for that service.",
      "Sign in or provide the requested Aadhaar details and OTP where applicable.",
      "Upload supporting documents only through the official UIDAI process when online upload is available.",
      "For services requiring an Aadhaar centre, use the official appointment or centre process.",
      "Save the request or acknowledgement number for future reference."
    ]
  },
  passport: {
    title: "Passport Seva",
    description: "Follow a simple preparation checklist for a fresh passport, reissue or related Passport Seva services.",
    portal: "https://www.passportindia.gov.in/",
    track: "https://www.passportindia.gov.in/",
    eligibility: "Requirements vary by fresh passport, reissue and other services. Confirm the current document list on Passport Seva.",
    documents: ["Proof of present address", "Proof of date of birth, when applicable", "Existing passport for reissue, if applicable", "Photographs or other documents only when the official process requires them", "Original documents for the appointment"],
    steps: [
      "Register or sign in on the official Passport Seva portal.",
      "Choose the appropriate service such as fresh passport or reissue.",
      "Complete the online application with accurate personal and address details.",
      "Pay the applicable fee and schedule an appointment if required.",
      "Prepare original documents and attend the designated appointment centre.",
      "Use the official portal to check the application status."
    ]
  },
  dl: {
    title: "Driving Licence Services",
    description: "Prepare for learner or driving licence services through the official Parivahan / Sarathi system.",
    portal: "https://parivahan.gov.in/",
    track: "https://parivahan.gov.in/",
    eligibility: "Age, learner licence, test and document requirements depend on the licence service and current rules for the applicant.",
    documents: ["Proof of age", "Proof of address", "Passport-size photograph where required", "Medical certificate where applicable", "Existing licence or learner licence for applicable services"],
    steps: [
      "Open the official Parivahan / Sarathi service and select the licence service.",
      "Choose the appropriate state and service type.",
      "Fill in the application details and upload documents when requested.",
      "Pay the applicable fee and book a slot or test appointment when required.",
      "Carry the required original documents to the designated centre.",
      "Use the official portal to check the application or appointment status."
    ]
  }
};

function changeLanguage(lang) {
  const texts = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (texts[key]) el.innerText = texts[key];
  });
}

function showView(viewName) {
  document.querySelectorAll(".page-view").forEach(view => {
    view.classList.add("hidden");
  });

  const target = document.getElementById("view-" + viewName);
  if (target) target.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

let currentFontSize = 16;

function changeFontSize(delta) {
  currentFontSize = Math.min(22, Math.max(13, currentFontSize + delta));
  document.getElementById("bodyRoot").style.fontSize = currentFontSize + "px";
}

function resetFontSize() {
  currentFontSize = 16;
  document.getElementById("bodyRoot").style.fontSize = "16px";
}

function toggleAccessibility() {
  document.getElementById("bodyRoot").classList.toggle("high-contrast");
}

function executeHomeSearch() {
  const term = document.getElementById("homeSearchInput").value.trim();
  showView("services");

  document.getElementById("serviceSearchInput").value = term;
  filterServicesList();
}

function filterByRole(role) {
  showView("services");

  const input = document.getElementById("serviceSearchInput");
  input.value = role === "all" ? "" : role;
  filterServicesList();
}

function filterServicesList() {
  const query = document.getElementById("serviceSearchInput").value.toLowerCase();
  const cat = document.getElementById("filterCategory").value;
  const diff = document.getElementById("filterDifficulty").value;

  document.querySelectorAll(".service-entry").forEach(entry => {
    const keywords = entry.dataset.keywords.toLowerCase();
    const matchQ = keywords.includes(query);
    const matchC = cat === "all" || entry.dataset.category === cat;
    const matchD = diff === "all" || entry.dataset.difficulty === diff;

    entry.style.display = matchQ && matchC && matchD ? "flex" : "none";
  });
}

function openGuide(serviceKey) {
  const data = guideData[serviceKey];
  if (!data) return;

  document.getElementById("guideTitle").innerText = data.title;
  document.getElementById("guideDescription").innerText = data.description;
  document.getElementById("guideEligibility").innerText = data.eligibility;
  document.getElementById("officialPortalBtn").href = data.portal;
  document.getElementById("applyNowBtn").href = data.portal;
  document.getElementById("trackPortalBtn").href = data.track;

  const documentsContainer = document.getElementById("documentsContainer");
  documentsContainer.innerHTML = data.documents.map(doc => `
    <li><i class="fa-solid fa-circle-check"></i><span>${doc}</span></li>
  `).join("");

  renderChecklist(data.steps);
  showView("guide");
}

function scrollToGuideSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const icon = btn.querySelector("i");

  answer.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}

function filterFaq() {
  const term = document.getElementById("faqSearchInput").value.toLowerCase();

  document.querySelectorAll(".faq-item").forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your feedback has been received.");
  e.target.reset();
  showView("home");
}

document.addEventListener("DOMContentLoaded", () => {
  showView("home");
});
