document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if(name === "" || email === "") {
    alert("⚠️ Please fill in Name & Email!");
    return;
  }

  alert("📬 Thanks! Message Sent!");
  this.reset();
});
