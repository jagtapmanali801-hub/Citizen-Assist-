// Citizen Assist - Chatbot functionality

function toggleChat() {
  document.getElementById("chatBox").classList.toggle("hidden");
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();

  if (!text) return;

  const chatMessages = document.getElementById("chatMessages");

  const userBubble = document.createElement("div");
  userBubble.className =
    "bg-blue-600 text-white p-2.5 rounded-xl max-w-[85%] ml-auto text-xs shadow-sm";
  userBubble.innerText = text;

  chatMessages.appendChild(userBubble);
  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    const botBubble = document.createElement("div");
    botBubble.className =
      "bg-blue-100 text-blue-950 p-2.5 rounded-xl max-w-[85%] text-xs shadow-sm";

    const q = text.toLowerCase();

    let reply =
      "I can guide you about PAN, Aadhaar, Passport and Driving License requirements, documents and steps.";

    if (q.includes("pan")) {
      reply =
        "For PAN applications, check the current official requirements and keep the required identity, address and date-of-birth documents ready.";
    } else if (q.includes("aadhaar") || q.includes("aadhar")) {
      reply =
        "For Aadhaar services, your registered mobile number may be needed for OTP-based services. Check UIDAI for the current process.";
    } else if (q.includes("passport")) {
      reply =
        "For Passport applications, use the official Passport Seva portal to register, complete the application, pay the applicable fee and book an appointment.";
    } else if (q.includes("driving") || q.includes("license") || q.includes("dl")) {
      reply =
        "For Driving License services, start with the official Sarathi Parivahan portal and follow the current learner/permanent license process.";
    } else if (q.includes("mistake") || q.includes("error") || q.includes("reject")) {
      reply =
        "Common issues include incorrect information, document problems and incomplete verification. Always compare your entries with the official requirements before submitting.";
    }

    botBubble.innerText = reply;
    chatMessages.appendChild(botBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
}
