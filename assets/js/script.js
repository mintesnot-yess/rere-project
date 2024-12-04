
var currentIndex = 0;
let HeroCont = document.querySelector(".hero-container");
let addbg = document.querySelector(".addbg");


let HeroTitle = document.querySelector(".hero-title");
let HeroDescription = document.querySelector(".hero-description");



var ContDetais = {
    "images":
        [
            `assets/images/flooring-3.jpg`,
            `assets/images/flooring-7.jpg`,


        ],
    "title": ["WELCOME TO RERE PROJECT DEVELOER", `NEW PERSPECTIVE
ON A BATTER
GROUND`,],
    "description": [`
<i class="fa-solid fa-quote-right"></i>
<strong>

        We’re delighted to welcome you!</strong> Explore our high-quality,
        
              durable SPC flooring solutions perfect for any project. Discover
              the perfect fit for your needs today! <i class="fa-solid fa-quote-right"></i> `, `All Rere spc collection products pro-
vide a better floor for indoor creativi-
ty our newest spc flooring collection is
the perfect choice for better hits and
sound insulation functional tranquility
and comfort.`]

}

HeroTitle.innerHTML = ContDetais.title[currentIndex]
HeroCont.style.background = ` url("${ContDetais.images[currentIndex]}")center/cover fixed`;
addbg.style.background = ` url("${ContDetais.images[currentIndex]}")center/cover fixed`;


HeroDescription.innerHTML = ContDetais.description[currentIndex]



setInterval(function () {
    HeroTitle.style.transform = "translateX(-100%)";
    HeroTitle.style.opacity = "0";
    HeroDescription.style.transform = "translateX(-30%)";
    HeroDescription.style.opacity = "0";

}, 4900)

setInterval(function () {
    HeroTitle.style.transform = "translateX(0%)";
    HeroTitle.style.opacity = "1";
    HeroDescription.style.transform = "translateX(0)";
    HeroDescription.style.opacity = "1";
    currentIndex >= ContDetais.images.length - 1 ? (currentIndex = 0) : currentIndex++;

    HeroTitle.innerHTML = ContDetais.title[currentIndex]
    addbg.style.background = ` url("${ContDetais.images[currentIndex]}")center/cover fixed`;

    HeroDescription.innerHTML = ContDetais.description[currentIndex]

    HeroCont.style.background = `
    url("${ContDetais.images[currentIndex]}")
  center/cover fixed`;

}, 5000);



