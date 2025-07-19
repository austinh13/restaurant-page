export default function createHome(){

    const content = document.getElementById("content");

    const homePage = document.createElement("div");
    homePage.classList.add("homePage");

    const header = document.createElement("h1");
    header.innerHTML = "Chompies:Bite Loud. Live Juicy.";
    header.style.color = "rgb(232, 46, 46)";
    header.classList.add("homeTitle");

    const p1 = document.createElement("p");
    p1.classList.add("paragraph");
    p1.innerHTML = "At Chompies, we're flipping the script on boring burgers. Our patties are loud, our toppings are wild, and our buns are always toasted just right (because soggy bread is a crime). Whether you're a triple-stack daredevil or a pickle minimalist, there's a burger here with your name on it—probably written in special sauce.";

    const p2 = document.createElement("p");
    p2.classList.add("paragraph");
    p2.innerHTML = "We’re not just a place to eat—we’re a place to chomp. Bring your friends, your big appetite, and your love for things that sizzle. Oh, and don’t forget to try our legendary Waffle Fry Avalanche. It might change your life.";

    homePage.appendChild(header);
    homePage.appendChild(p1);
    homePage.appendChild(p2);

    content.append(homePage);
}