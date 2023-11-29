menuButtonOpen = document.querySelector("#nav-button");
menuButtonClose = document.querySelector("#close-nav-btn");
mobMenu = document.querySelector("#nav-menu-mob");
menuItems = document.querySelectorAll(".menu-items");

menuButtonOpen.addEventListener("click", function(){
    mobMenu.classList.remove("translate-x-96");
})
menuButtonClose.addEventListener("click", function(){
    mobMenu.classList.add("translate-x-96");
})

for (let i = 0; i < menuItems.length; i++) {
    const element = menuItems[i];
    element.addEventListener("click", function(){
        mobMenu.classList.add("translate-x-96");
        console.log("clicked");
    })
}
// topbar hide 
let topBar= document.querySelector("#topbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll",()=>{
  if (lastScrollY < window.scrollY){
    console.log("scrolling down");
    topBar.classList.add("md:hidden");
  }
  else{
    console.log("scrolling up");
    topBar.classList.remove("md:hidden");
  }
  lastScrollY = window.scrollY;
});

upButton = document.querySelector("#upButton");
window.addEventListener("scroll",()=>{
    if (window.scrollY >=120){
      upButton.classList.remove("hidden");
    }
    else{
      upButton.classList.add("hidden");
    }
})

// vanish loader
var preloader =document.querySelector('#loader')
window.addEventListener("load", vanish)
function vanish(){
    preloader.classList.add("vanish");
}