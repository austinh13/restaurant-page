export default function createInfo(){
    const content = document.getElementById("content");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");

    const header = document.createElement("h1");
    header.innerHTML = "Chompies: Info";



    infoDiv.appendChild(header);

    content.appendChild(infoDiv);
}