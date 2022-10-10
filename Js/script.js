// reference
let NavItem = Array.from(document.getElementsByClassName("nav-item"));
let frontEnd = document.querySelector(".frontend");
let uiux = document.querySelector(".uiux");
let graphics = document.querySelector(".graphics");
let allFolio = document.querySelector(".allfolio");
let Menu1 = document.querySelector(".con1");
let Menu2 = document.querySelector(".con2");
let Menu3 = document.querySelector(".con3");
let Menu4 = document.querySelector(".con4");

let allMenu = Array.from(document.getElementsByClassName("cons"));

NavItem.forEach(nav =>{
    nav.addEventListener("click", () =>{
        let navBarClick = document.querySelector(".active");
        navBarClick?.classList.remove("active");
        nav.classList.add("active");
    });
});

// allMenu.forEach(menu =>{
//     nav.addEventListener("click", () =>{
//         let menuClick = document.querySelector(".active");
//         menuClick?.classList.remove("active");
//         menu.classList.add("active");
//     });
// });


Menu1.addEventListener("click", ()=>{
    Menu1.classList.add("active");
    Menu2.classList.remove("active");
    Menu3.classList.remove("active");
    Menu4.classList.remove("active");
    allFolio.classList.add("active");
    uiux.classList.remove("active");
    frontEnd.classList.add("down");
    graphics.classList.remove("active");
})

Menu2.addEventListener("click", ()=>{
    Menu1.classList.remove("active");
    Menu2.classList.add("active");
    Menu3.classList.remove("active");
    Menu4.classList.remove("active");
    allFolio.classList.remove("active");
    uiux.classList.remove("active");
    frontEnd.classList.remove("down");
    graphics.classList.remove("active");
})

Menu3.addEventListener("click", ()=>{
    Menu1.classList.remove("active");
    Menu2.classList.remove("active");
    Menu3.classList.add("active");
    Menu4.classList.remove("active");
    allFolio.classList.remove("active");
    uiux.classList.add("active");
    frontEnd.classList.add("down");
    graphics.classList.remove("active");
})

Menu4.addEventListener("click", ()=>{
    Menu1.classList.remove("active");
    Menu2.classList.remove("active");
    Menu3.classList.remove("active");
    Menu4.classList.add("active");
    allFolio.classList.remove("active");
    uiux.classList.remove("active");
    frontEnd.classList.add("down");
    graphics.classList.add("active");
})
