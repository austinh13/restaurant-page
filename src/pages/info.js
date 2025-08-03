/*
import HQ from "../images/ChompiesHQ.jpg";
infoTile.style.backgroundImage  = `url(${HQ})`;
infoTile.style.backgroundSize = "cover";*/
export default function createInfo(){
    const content = document.getElementById("content");

    const header = document.createElement("h1");
    header.innerHTML = "Chompies: Info";


    const informationGrid = document.createElement("div");
    informationGrid.classList.add("informationGrid");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");

    const infoTile = createTile("📍 Location");

    const locationTitle = document.createElement("p");
    locationTitle.innerHTML = "Chompies HQ";
    const locationAddy = document.createElement("p");
    locationAddy.innerHTML = "404 Burger Blvd. Snackville, TX 12345";

    infoTile.appendChild(locationTitle);
    infoTile.appendChild(locationAddy);

    const hourTile = createTile("⏰ Hours of Operation");
    hourTile.id = "hourTile";

    informationGrid.appendChild(infoTile);
    informationGrid.appendChild(hourTile);
    
    /*const locationHeader = document.createElement("h2");
    locationHeader.innerHTML = "📍 Location";
    const locationTitle = document.createElement("p");
    locationTitle.innerHTML = "Chompies HQ";
    const locationAddy = document.createElement("p");
    locationAddy.innerHTML = "404 Burger Blvd. Snackville, TX 12345";

    const hoursHeader = document.createElement("h2");
    hoursHeader.innerHTML = "⏰ Hours of Operation";*/



    infoDiv.appendChild(header);
    infoDiv.appendChild(informationGrid);

    content.appendChild(infoDiv);
}

function createTile(title){
    const tile = document.createElement("div");
    tile.classList.add("infoTile");

    const tileTitle = document.createElement("h2");
    tileTitle.innerHTML =  title;

    tile.appendChild(tileTitle);

    return tile;
}