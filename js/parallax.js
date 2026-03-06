window.addEventListener("scroll", function(){

let scroll = window.scrollY;

document.querySelector(".city").style.transform =
"translateX(" + (-scroll * 0.2) + "px)";

document.querySelector(".cloud1").style.transform =
"translateX(" + (scroll * 0.1) + "px)";

document.querySelector(".cloud2").style.transform =
"translateX(" + (scroll * 0.15) + "px)";

});
/* ================= RADAR VEHICLE SCAN ================= */

const cars = document.querySelectorAll(".car");

setInterval(() => {

  cars.forEach(car => {

    const rect = car.getBoundingClientRect();

    const scanZone = window.innerWidth * 0.5;

    if(rect.left > scanZone - 40 && rect.left < scanZone + 40){

      car.classList.add("verified");

      setTimeout(()=>{
        car.classList.remove("verified");
      },800);

    }

  });

},200);