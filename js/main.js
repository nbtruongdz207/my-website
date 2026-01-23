/* =========================
   DARK MODE (LƯU TRẠNG THÁI)
========================= */
const themeBtn = document.querySelector(".theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

/* =========================
   ACTIVE MENU THEO TRANG
========================= */
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add("active");
  }
});

/* =========================
   TYPING EFFECT (HOME)
========================= */
const typingEl = document.querySelector(".typing");

if (typingEl) {
  const texts = [
    "Dịch vụ mạng xã hội",
    "Code tool & web mini",
    "Bán acc game uy tín",
    "Thiết kế website"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typingEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingEl.textContent = currentText.substring(0, charIndex++);
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typingEffect, 1200);
        return;
      }
    } else {
      typingEl.textContent = currentText.substring(0, charIndex--);
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typingEffect, isDeleting ? 40 : 80);
  }

  typingEffect();
}

/* =========================
   COPY TEXT (BANK / CONTACT)
========================= */
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Đã copy: " + text);
  });
}

/* Cho phép dùng trong HTML */
window.copyText = copyText;
const texts = [
  "Uy tín ~ Nhanh chóng ~ Bảo mật",
  "Đây là các dịch vụ bên mình",
  "Chuyên dịch vụ Facebook - TikTok - Acc Game"
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 60;
const delayBetween = 1500;

const typingElement = document.getElementById("typing-text");

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetween);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeText);
const btn = document.getElementById("themeToggle");

btn.onclick = () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};
function copyEmail() {
  const email = "yourmail@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Đã copy email: " + email);
}
function sendMail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Liên hệ từ website");
  const body = encodeURIComponent(
    `Tên: ${name}\nEmail: ${email}\n\nNội dung:\n${message}`
  );

  window.location.href =
    `mailto:yourmail@gmail.com?subject=${subject}&body=${body}`;
}
/* COPY EMAIL */
function copyEmail() {
  const email = "youremail@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Đã copy email: " + email);
}

/* SEND MAIL */
function sendMail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Yêu cầu từ " + name);
  const body = encodeURIComponent(
    "Tên: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Nội dung:\n" + message
  );

  window.location.href =
    `mailto:youremail@gmail.com?subject=${subject}&body=${body}`;
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailto =
    "mailto:nbtruong207@gmail.com" +
    "?subject=Liên hệ từ " + encodeURIComponent(name) +
    "&body=" +
    encodeURIComponent(
      "Email: " + email + "\n\nNội dung:\n" + message
    );

  window.location.href = mailto;
});
