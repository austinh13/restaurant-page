import imageOne from "../images/burgerOne.jpg";
import imageTwo from "../images/ChompZilla.jpg";
import imageThree from "../images/MooMoo.jpg";
import imageFour from "../images/PicklePanic.jpg";
import imageFive from "../images/Burgernaut.jpg";
import imageSix from "../images/Sasquatch.jpg";

export default function createMenu(){
    const content = document.getElementById("content");

    const menuPage = document.createElement("div");
    menuPage.classList.add("menuPage");

    const header = document.createElement("h1");
    header.classList.add("menuHeader");
    header.innerHTML = "Menu";

    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");

    createGrid(gridDiv);
    menuPage.appendChild(header);
    menuPage.appendChild(gridDiv);
    content.appendChild(menuPage);
}

function createGrid(grid){
    
    const itemOne = createTile("Chompies Regular",imageOne);

    const itemTwo = createTile("The Chompzilla",imageTwo);

    const itemThree = createTile("MooMooPow",imageThree);

    const itemFour = createTile("The Pickle Panic",imageFour);

    const itemFive = createTile("Burgernaut",imageFive);

    const itemSix = createTile("Sizzlin' Sasquatch ",imageSix);

    grid.appendChild(itemOne);
    grid.appendChild(itemTwo);
    grid.appendChild(itemThree);
    grid.appendChild(itemFour);
    grid.appendChild(itemFive);
    grid.appendChild(itemSix);

}

function createTile(name,imgSrc){
    let item = document.createElement("div");
    item.classList.add("tile");

    const itemName = document.createElement("h1");
    itemName.innerHTML = name;

    const pic = document.createElement("img");
    pic.src = imgSrc;

    item.appendChild(itemName);
    item.appendChild(pic);

    return item;
}