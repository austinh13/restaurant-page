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
    infoTile.id = "infoTile";
    const locationTitle = document.createElement("p");
    locationTitle.innerHTML = "Chompies HQ";
    const locationAddy = document.createElement("p");
    locationAddy.innerHTML = "404 Burger Blvd. Snackville, TX 12345";

    infoTile.appendChild(locationTitle);
    infoTile.appendChild(locationAddy);

    const hourTile = createTile("⏰ Hours of Operation");
    hourTile.id = "hourTile";
    const weekday = document.createElement("p");
    weekday.innerHTML = "Monday – Thursday: 11:00 AM – 9:00 PM";
    const weekend = document.createElement("p");
    weekend.innerHTML = "Friday – Saturday: 11:00 AM – 11:00 PM";

    hourTile.appendChild(weekday);
    hourTile.appendChild(weekend);

    const socialTile = createTile("🧢 Stay in the Loop");
    socialTile.id = "socialTile";
    const insta = document.createElement("p");
    insta.innerHTML = "Instagram: @ChompiesBurgers";
    const tiktok = document.createElement("p");
    tiktok.innerHTML = "TikTok: @Chomps&Dance";
    const tweet = document.createElement("p");
    tweet.innerHTML = "X: @WeChompHard";

    socialTile.appendChild(insta);
    socialTile.appendChild(tiktok);
    socialTile.appendChild(tweet);

    const contactTile = createTile("📞 Contact Us");
    const phone = document.createElement("p");
    phone.innerHTML = "Phone: (555) 867-5309";
    const email = document.createElement("p");
    email.innerHTML = "Email: chompies@fake";

    contactTile.appendChild(phone);
    contactTile.appendChild(email);

    informationGrid.appendChild(infoTile);
    informationGrid.appendChild(hourTile);
    informationGrid.appendChild(socialTile);
    informationGrid.appendChild(contactTile);
    
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