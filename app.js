

let selectedFilterElement;

function initListerner(){
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => button.addEventListener("click", () =>{
        if(selectedFilterElement){
            selectedFilterElement.classList.remove("selected");
        }
        selectedFilterElement = button;
        selectedFilterElement.classList.add("selected")
    }))
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener('click', ()=>{
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle")

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation){
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.7}s`
            }            
        });

    });
}




function filterSelection(appliedFilter){
    var articles = document.querySelectorAll(".article")
    for(i = 0 ; i < articles.length ; i++){
        if(appliedFilter == "all"){
            articles[i].classList.remove("hide-item")
        }
        else if(articles[i].getAttribute("data-filter") != appliedFilter){
            articles[i].classList.add("hide-item");
        }
        else{
            articles[i].classList.remove("hide-item")
        }
    }
}


function openPopUp(){
    const articles = document.querySelectorAll(".articles-container a")
    const modal = document.querySelector(".showcase")
    const popup = document.querySelector(".popup")
    articles.forEach((article) => article.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.opacity="0.5"
        popup.style.display="block"
    }))
}

function closePopUp(){
    const modal = document.querySelector(".showcase")
    const popup = document.querySelector(".popup")

    const closeButton = document.querySelector(".close-popup");
    closeButton.addEventListener("click", ()=>{
        modal.style.opacity="1"
        popup.style.display="none"

    })
}

const app = () => {
    navSlide();
    initListerner();
    openPopUp();
    closePopUp()
}


app();
