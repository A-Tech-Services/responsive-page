let Hamburger = document.querySelector(".hamburger");
let HamburgerActive = document.querySelector(".hamburgeractive");
let NavMenu = document.querySelector(".nav-menu");


Hamburger.addEventListener("click", () => {
    NavMenu.classList.add("active");
    HamburgerActive.classList.add("active");
    Hamburger.classList.add("down");
})

HamburgerActive.addEventListener("click", () => {
    NavMenu.classList.remove("active");
    HamburgerActive.classList.remove("active");
    Hamburger.classList.remove("down");
})