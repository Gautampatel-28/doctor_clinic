//Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrollend");
    }else{
        nav.classList.remove("header-scrollend");
    }
}

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navBar.forEach(function(a) {
    a.addEventListener(
        "click", function(){
            navCollapse.classList.remove("show");
        }
    )
})