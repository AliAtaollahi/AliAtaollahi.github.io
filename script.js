const toggle = document.querySelector(".profile-toggle");
const menu = document.querySelector(".profile-links");

function closeProfileMenu() {
  toggle?.setAttribute("aria-expanded", "false");
  menu?.classList.remove("is-open");
}

toggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  menu?.classList.toggle("is-open", open);
});

menu?.addEventListener("click", (event) => event.stopPropagation());
document.addEventListener("click", closeProfileMenu);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProfileMenu();
    toggle?.focus();
  }
});
