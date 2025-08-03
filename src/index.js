import header from "./pages/header.js";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import info from "./pages/info.js";
import "./styles/style.css"; 
import "./styles/headerstyle.css";
import "./styles/homestyle.css";
import "./styles/infostyle.css";
import "./styles/menustyle.css";


document.addEventListener("DOMContentLoaded", () => {

  header();
  home();

  const homeButton = document.getElementById("homeButton");
  const infoButton = document.getElementById("infoButton");
  const menuButton = document.getElementById("menuButton");

  homeButton.onclick = () => buttonClicked("home");
  infoButton.onclick = () => buttonClicked("info");
  menuButton.onclick = () => buttonClicked("menu");


});

function buttonClicked(buttonType){
  const content = document.getElementById("content");
  content.removeChild(content.lastChild);
  
  if(buttonType == "info"){
    info();
  }
  else if(buttonType == "menu"){
    menu();
  }
  else{
    home();
  }
}

