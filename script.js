document.getElementById("contactForm").addEventListener("submit", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const idea = document.getElementById("idea").value.trim();

  if (!name || !email || !idea) {
    alert("⚠ Please fill all required fields!");
    return false; // stop submit ONLY if invalid
  }

  alert("✅ Message sent successfully!");
});
