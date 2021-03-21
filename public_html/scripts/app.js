

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




// Home Page
var slideIndex = 1;
showDivs(slideIndex);

// Onclick function when the user click on any arrows present on the slides header
function plusDivs(n){
    showDivs(slideIndex+=n);
}

function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";
}

// Automaticly change slide 
var moveSlides = window.setInterval(function(){
    plusDivs(+1);
  }, 4500);


// If the user click on any arrow, the slider become 100% manual 
function stopAutoSlide(){
    clearInterval(moveSlides);
}



// Changer navbar background color after scrolling 
var myNav = document.getElementById('nav');
window.onscroll = function () { 
    if (window.scrollY >= 40 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

const app = () => {
    navSlide();
    initListerner();
    openPopUp();
    closePopUp();
    moveSlides();
    initMap();
}


app();
