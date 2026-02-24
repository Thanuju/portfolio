<<<<<<< HEAD
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
=======
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
>>>>>>> 394b78f4dca2c242234555b15ab5709d954fa36e
