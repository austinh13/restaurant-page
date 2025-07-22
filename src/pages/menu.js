import imageOne from "../images/burgerOne.jpg";
import imageTwo from "../images/ChompZilla.jpg"

export default function createMenu(){
    const content = document.getElementById("content");

    const menuPage = document.createElement("div");
    menuPage.classList.add("menuPage");

    const header = document.createElement("h1");
    header.classList.add("menuHeader");
    header.innerHTML = "Menu";

    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");

    createTiles(gridDiv);
    menuPage.appendChild(header);
    menuPage.appendChild(gridDiv);
    content.appendChild(menuPage);
}

function createTiles(grid){
    
    const itemOne = document.createElement("div");
    itemOne.classList.add("tile");

    const itemOneName = document.createElement("h1");
    itemOneName.innerHTML = "Chompies Regular";

    const picOne = document.createElement("img");
    picOne.src = imageOne;

    itemOne.appendChild(itemOneName);
    itemOne.appendChild(picOne);

    const itemTwo = document.createElement("div");
    itemTwo.classList.add("tile");

    const itemTwoName = document.createElement("h1");
    itemTwoName.innerHTML = "ChompZilla";

    const picTwo = document.createElement("img");
    picTwo.src = imageTwo;

    itemTwo.appendChild(itemTwoName);
    itemTwo.appendChild(picTwo);

    grid.appendChild(itemOne);
    grid.appendChild(itemTwo);

}