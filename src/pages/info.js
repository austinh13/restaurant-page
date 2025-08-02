export default function createInfo(){
    const content = document.getElementById("content");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");

    const header = document.createElement("h1");
    header.innerHTML = "Chompies: Info";

    const locationHeader = document.createElement("h2");
    locationHeader.innerHTML = "📍 Location";
    const locationTitle = document.createElement("p");
    locationTitle.innerHTML = "Chompies HQ";
    const locationAddy = document.createElement("p");
    locationAddy.innerHTML = "404 Burger Blvd. Snackville, ZZ 99999";



    infoDiv.appendChild(header);
    infoDiv.appendChild(locationHeader);
    infoDiv.appendChild(locationTitle);
    infoDiv.appendChild(locationAddy);

    content.appendChild(infoDiv);
}