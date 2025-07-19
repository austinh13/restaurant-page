export default function createHome(){

    const content = document.getElementById("content");

    const homePage = document.createElement("div");
    homePage.classList.add("homePage");

    const header = document.createElement("h1");
    header.innerHTML = "Chompies:A Classic Burger Restaurant";
    header.classList.add("homeTitle");

    homePage.appendChild(header);

    content.append(homePage);
}