let Hamburger = document.querySelector(".hamburger");
let HamburgerActive = document.querySelector(".hamburgeractive");
let NavMenu = document.querySelector(".nav-menu");
let NavItem = Array.from(document.getElementsByClassName("nav-link"));


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

NavItem.forEach(menu => {
    menu.addEventListener("click", () => {
        NavMenu.classList.remove("active");
        HamburgerActive.classList.remove("active");
        Hamburger.classList.remove("down");
    })
})