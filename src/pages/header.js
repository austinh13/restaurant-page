

export default function createHeader() {
  console.log("create header");
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.innerHTML = "Chompies";

  header.appendChild(title);

  content.appendChild(header);
}
