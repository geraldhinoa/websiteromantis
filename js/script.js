document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark mode toggle
  const toggle = document.getElementById("dark-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  // ✨ Quotes random
  const quotes = [
    "Cinta adalah seni saling melengkapi, bukan mencari yang sempurna.",
    "Bahagia itu sederhana, cukup bersamamu.",
    "Waktu bersama terasa singkat, tapi kenangan abadi.",
    "Senyummu adalah cahaya yang menerangi hariku.",
    "Sejauh apa pun langkahku, aku ingin selalu kembali padamu."
  ];
  const randomQuote = document.getElementById("random-quote");
  if (randomQuote) {
    randomQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  }

  // 🖼️ Gallery modal (untuk gallery.html)
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");
  const images = document.querySelectorAll(".gallery-img");
  const close = document.getElementById("close");

  if (modal && modalImg && caption && images.length > 0) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.textContent = img.alt;
      });
    });

    if (close) {
      close.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }
  }

  // 🎬 Animasi saat scroll (fade-up)
  const elements = document.querySelectorAll(".future-card, .about-card, .moment-card");
  window.addEventListener("scroll", () => {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });
});
