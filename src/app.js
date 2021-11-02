const menuIcon = document.querySelector(".fa-bars");
const ResponsiveMenu = document.querySelector(".nav__bar-menu");
let flag = false;

menuIcon.addEventListener("click", ()=>{
    console.log("clikeando el boton de menu")
    flag = !flag;
    ResponsiveMenu.style.display = flag ? "none": "flex";
})