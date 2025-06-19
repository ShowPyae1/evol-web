const validCodes = ["EVOL123", "ABC456", "XYZ789"]; // Replace with real codes
const registeredKey = "evol_registered";

window.onload = () => {
  if (localStorage.getItem(registeredKey)) {
    showWelcome();
  }
};

function verifyCode() {
  const serialInput = document.getElementById("serialInput").value.trim();
  const status = document.getElementById("status");

  if (!serialInput) {
    status.textContent = "⚠️ Please enter your serial code.";
    return;
  }

  if (validCodes.includes(serialInput)) {
    localStorage.setItem(registeredKey, serialInput);
    showWelcome();
  } else {
    status.textContent = "❌ Invalid code. Please check your EVOL case.";
  }
}

function showWelcome() {
  document.getElementById("register-section").style.display = "none";
  document.getElementById("welcome-section").style.display = "block";
}
