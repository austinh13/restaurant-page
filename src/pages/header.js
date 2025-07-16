export default function createHeader() {
  console.log("create header");
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.classList.add("header");

  content.appendChild(header);
}
