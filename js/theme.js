const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("site-theme");
const themeIcon = document.querySelector("#theme-icon");

root.dataset.theme =
  savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : "dark";

function updateThemeButton() {
  const isLight = root.dataset.theme === "light";

  themeIcon.src = isLight
    ? "/assets/light-icon.svg"
    : "/assets/dark-icon.svg";
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  const newTheme =
    root.dataset.theme === "dark" ? "light" : "dark";

  root.dataset.theme = newTheme;

  localStorage.setItem("site-theme", newTheme);

  updateThemeButton();
});