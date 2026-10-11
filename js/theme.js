const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("site-theme");
const themeIcon = document.querySelector("#theme-icon");
const assetsPath = new URL("../assets/", document.currentScript.src);

root.dataset.theme =
  savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : "dark";

function updateThemeButton() {
  const isLight = root.dataset.theme === "light";

  themeIcon.src = new URL(
    isLight ? "light-icon.svg" : "dark-icon.svg",
    assetsPath
  ).href;
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  const newTheme =
    root.dataset.theme === "dark" ? "light" : "dark";

  root.dataset.theme = newTheme;

  localStorage.setItem("site-theme", newTheme);

  updateThemeButton();
});