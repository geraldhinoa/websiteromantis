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

  // 🎬 Scroll Reveal Animasi
  const reveals = document.querySelectorAll(".reveal, .future-card, .about-card, .moment-card");
  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  });

  // ⏳ Countdown Anniversary
  function countdown() {
    const targetDate = new Date("2025-12-31 00:00:00").getTime(); // ganti tanggal anniversary
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerEl = document.getElementById("countdown-timer");
    if (timerEl) {
      timerEl.textContent = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
      if (distance < 0) {
        timerEl.textContent = "Selamat Anniversary Kita 🎉❤️";
      }
    }
  }
  setInterval(countdown, 1000);
});

// 🍔 Navbar hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// 🚀 Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
// 🎉 Countdown Anniversary (contoh: 14 Februari 2026)
const countdown = document.getElementById("countdown");
if (countdown) {
  const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `
        <div><span>${days}</span><small>Hari</small></div>
        <div><span>${hours}</span><small>Jam</small></div>
        <div><span>${minutes}</span><small>Menit</small></div>
        <div><span>${seconds}</span><small>Detik</small></div>
      `;
    } else {
      countdown.innerHTML = "<h3>Happy Anniversary Sayang! 💖</h3>";
    }
  }, 1000);
}
