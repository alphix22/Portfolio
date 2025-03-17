let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");
const yearText = document.getElementById("year");
const year = new Date().getFullYear();
yearText.textContent = year;

// Gestion du défilement pour afficher/masquer le header
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});

// Récupérer l'heure pour le fuseau horaire de Paris (Cergy)
const now = new Date();
const parisTime = now.toLocaleTimeString("fr-FR", {
  timeZone: "Europe/Paris",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

timeText.textContent = `${parisTime} `;
