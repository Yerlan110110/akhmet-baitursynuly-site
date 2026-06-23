const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const scrollTop = document.querySelector(".scroll-top");
const modal = document.querySelector(".modal");
const modalOpen = document.querySelector("[data-modal-open]");
const modalClose = document.querySelector(".modal-close");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "Жарық режим" : "Қара режим";
});

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("visible", window.scrollY > 500);
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

modalOpen.addEventListener("click", () => {
  modal.hidden = false;
});

modalClose.addEventListener("click", () => {
  modal.hidden = true;
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.hidden = true;
  }
});
