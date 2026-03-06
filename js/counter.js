const counter = document.getElementById("vehicleCounter");

let count = 1284;

setInterval(() => {

count++;

counter.innerText = count;

}, 3500);