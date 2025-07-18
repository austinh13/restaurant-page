export default function createHeader() {
  console.log("create header");
  const content = document.getElementById("content");

  // header element
  const header = document.createElement("div");
  header.classList.add("header");

  // title of header
  const title = document.createElement("h1");
  title.innerHTML = "Chompies";

  // div that holds buttons
  const buttonHolders = document.createElement("div");
  buttonHolders.classList.add("buttonHolder");

  // creation of 3 seperate buttons
  const homeButton = document.createElement("button");
  homeButton.innerHTML = "Home";
  homeButton.classList.add("tabButtons");

  const menuButton = document.createElement("button");
  menuButton.innerHTML = "Menu";
  menuButton.classList.add("tabButtons");

  const infoButton = document.createElement("button");
  infoButton.innerHTML = "Info";
  infoButton.classList.add("tabButtons");

  // hover effects for 3 buttons
  homeButton.addEventListener("mouseover", () => {
      homeButton.classList.toggle("active");
  });
  homeButton.addEventListener("mouseout", () => {
      homeButton.classList.toggle("active");
  });

  menuButton.addEventListener("mouseover", () => {
      menuButton.classList.toggle("active");
  });
  menuButton.addEventListener("mouseout", () => {
      menuButton.classList.toggle("active");
  });

  infoButton.addEventListener("mouseover", () => {
      infoButton.classList.toggle("active");
  });
  infoButton.addEventListener("mouseout", () => {
      infoButton.classList.toggle("active");
  });


  // appending to screen

  buttonHolders.appendChild(homeButton);
  buttonHolders.appendChild(menuButton);
  buttonHolders.appendChild(infoButton);

  header.appendChild(title);
  header.appendChild(buttonHolders);
  
  content.appendChild(header);
}
