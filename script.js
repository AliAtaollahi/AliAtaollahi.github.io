const header = document.querySelector("[data-header]");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const year = document.querySelector("[data-year]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeNavigation = () => {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
};

navToggle?.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(willOpen));
  nav?.classList.toggle("is-open", willOpen);
  document.body.style.overflow = willOpen ? "hidden" : "";
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (year) year.textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((element) => observer.observe(element));
}
