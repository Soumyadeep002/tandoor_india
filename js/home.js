// const { document } = require("postcss");

menuButtonOpen = document.querySelector("#nav-button");
menuButtonClose = document.querySelector("#close-nav-btn");
mobMenu = document.querySelector("#nav-menu-mob");
menuItems = document.querySelectorAll(".menu-items");

menuButtonOpen.addEventListener("click", function () {
  mobMenu.classList.remove("translate-x-96");
})
menuButtonClose.addEventListener("click", function () {
  mobMenu.classList.add("translate-x-96");
})

for (let i = 0; i < menuItems.length; i++) {
  const element = menuItems[i];
  element.addEventListener("click", function () {
    mobMenu.classList.add("translate-x-96");
    // console.log("clicked");
  })
}
// topbar hide 
let topBar = document.querySelector("#topbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // console.log("scrolling down");
    topBar.classList.add("md:hidden");
  }
  else {
    // console.log("scrolling up");
    topBar.classList.remove("md:hidden");
  }
  lastScrollY = window.scrollY;
});
upButton = document.querySelector("#upButton");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 120) {
    upButton.classList.remove("hidden");
  }
  else {
    upButton.classList.add("hidden");
  }
})
// vanish loader
var preloader = document.querySelector('#loader')
window.addEventListener("load", vanish)
function vanish() {
  preloader.classList.add("vanish");
}
// menu filter 
var btns = document.querySelectorAll(".filter-btn")
for (let i = 0; i < btns.length; i++) {
  const element = btns[i];
  element.addEventListener("click", function () {
    // console.log(element.id);
    document.querySelectorAll(".fooditems").forEach(element2 => {
     
        if (element2.classList.contains(element.id)) {

          element2.classList.remove("hidden")
        }
        else {
          element2.classList.add("hidden")
         
        }
    });

  })
}
// Special-item filter 
var sitems = document.querySelectorAll(".sitems")
for (let i = 0; i < sitems.length; i++) {
  const sitem = sitems[i];
  sitem.addEventListener("click", function (){
    document.querySelectorAll(".scontents").forEach(scontent => {
      if (scontent.classList.contains(sitem.id)) {

        scontent.classList.remove("hidden")
        scontent.classList.add("flex")
      }
      else {
        scontent.classList.add("hidden")
        scontent.classList.remove("flex")
       
      }
    });
  })
  
}
// menulist hide-show 
document.querySelector("#mob-menu-list").addEventListener("click", function () {
  document.querySelector('#menulist').classList.toggle("hidden")
  document.querySelector('#menulist').classList.toggle("flex")
})



// swipper js 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade:'true',
  grabCursor:'true',
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    1080:{
      slidesPerView: 3,
    },
  
  },
});

//AOS
AOS.init({
  mirror: false
});

// number increment animation 
const workSection = document.querySelector('#status')
const workObserver = new IntersectionObserver((entries, observer)=>{
    const [entry] = entries;
    if (!entry.isIntersecting) return;
        const counterNum = document.querySelectorAll('.num');
        const speed = 100;
        counterNum.forEach((curElem) =>{
            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number);
                const initialNum= parseInt(curElem.innerText);
                const incrementNum = Math.trunc(targetNumber/speed);
                if (initialNum < targetNumber) {
                    curElem.innerText = `${initialNum + incrementNum}`;
                    setTimeout(updateNumber, 10);
                }
            }
            updateNumber();
        }) 
        observer.unobserve(workSection);  
},
{
    root:null,
    threshold:0,
})
workObserver.observe(workSection);

//end of number increament animation 
