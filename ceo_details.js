const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("ceos.json")
  .then(response => response.json())
  .then(data => {

    const index = Number(id) - 1;
    const ceo = data[index];

    if (!ceo) {
      document.body.innerHTML = "<h2>CEO not found</h2>";
      return;
    }

    document.getElementById("ceoName").textContent = ceo["name" + id];
    document.getElementById("ceoTitle").textContent = ceo["company" + id];
    document.getElementById("ceoUniversity").textContent = ceo["university" + id];
    document.getElementById("ceoBio").textContent = ceo["bio" + id];
    document.getElementById("ceoEmail").textContent = ceo["email" + id];
    document.getElementById("ceoPhone").textContent = ceo["phone" + id];
    document.getElementById("ceoImage").src = ceo["image" + id];

  })
  .catch(error => {
    console.error("Error loading CEO data:", error);
  });
