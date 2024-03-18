// mobile menu

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("open");
}); 

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("open");
    navMenu.classList.remove("open");
}));

// style active link
// find all nav links and each page's body id
let links = document.querySelectorAll(".nav-link");
let bodyId = document.querySelector("body").id;

// loop through nav links and if link's data-active matches body id, apply active class to nav link
for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
};