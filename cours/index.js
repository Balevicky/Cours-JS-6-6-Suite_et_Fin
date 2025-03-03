"use strict";
// // ===================
// //  CANVAS
// // ===================
// function draw() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   setTimeout(() => {
//     ctx.fillStyle = "rgb(200,0, 0)";
//     ctx.fillRect(50, 50, 50, 150);
//   }, 2000);
//   setTimeout(() => {
//     ctx.fillStyle = "rgb(0,1000, 200, 0.5)";
//     ctx.fillRect(100, 30, 100, 50);
//   }, 3000);
//   setTimeout(() => {
//     ctx.fillStyle = "rgb(100,100, 200,0.5)";
//     ctx.fillRect(10, 25, 100, 100);
//     ctx.clearRect(35, 25, 40, 40);
//     ctx.strokeRect(125, 75, 50, 50);
//   }, 4000);
//   setTimeout(() => {
//     ctx.fillStyle = "rgb(201,0,200,0.5)";
//     ctx.beginPath();
//     ctx.moveTo(200, 0);
//     ctx.lineTo(1, 75);
//     ctx.lineTo(100, 150);
//     ctx.fill();
//   }, 5000);
// }
// window.addEventListener("load", draw);

// /========================================================
//          TRY / CASH
// /========================================================
try {
  //test un block de code
} catch (error) {
  console.log(error);
}
// ======
function inValidJON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch (error) {
    return false;
  }
}
// console.log(inValidJON(24));
// ====+Finally
try {
  //test un block de code*
  mafonction();
} catch (error) {
  // console.log(error);
} finally {
  // console.log("on est  arrivé au bout");
}

// /========================================================
//          THROW
// /========================================================
function isNumber(num) {
  if (isNaN(num)) {
    throw "not a numer!";
  } else {
    console.log("c'est un nombre!");
  }
  // PLEIN DE CODE
}

try {
  isNumber("5d");
} catch (error) {
  console.log("Erreur: " + error);
}

// /========================================================
//          strict mode
// /========================================================
// voiture = "toyota";
// console.log(voiture);
