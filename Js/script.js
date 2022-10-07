// reference
let NavItem = Array.from(document.getElementsByClassName("nav-item"));

NavItem.forEach(nav =>{
    nav.addEventListener("click", () =>{
        let navBarClick = document.querySelector(".active");
        navBarClick?.classList.remove("active");
        nav.classList.add("active");
    });
});