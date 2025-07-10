document.getElementById("promoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Terima kasih! Diskon akan dikirim ke email kamu 😊");
  this.reset();
});
