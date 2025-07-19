import header from "./pages/header.js";
import home from "./pages/home.js";
import "./styles/style.css"; // ✅ Import CSS here


document.addEventListener("DOMContentLoaded", () => {
  header();
  home();
});
