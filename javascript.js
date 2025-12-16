
var burguer = document.getElementById("burguer-container");
const links = document.getElementById("nav-links");
const aside = document.getElementById("aside-container");

burguer.addEventListener("click", function() {
    /*aside.style.transition = "0.5s";
    aside.style.width = "80%";

    links.style.marginLeft = "0%";
    links.style.transition = "0.5s";*/

    
    links.classList.toggle("activo");
    aside.classList.toggle("activo2");
});