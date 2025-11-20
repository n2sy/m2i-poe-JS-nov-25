const inputPrenom = document.getElementById("inpPrenom");
const inputAge = document.getElementById("inpAge");
const btnAfficher = document.getElementById("btn");

// function salut() {
//   console.log("Hey Salut...");
// }

// function afficherSalut() {
//   salut("Mon message");
// }

// btnAfficher.addEventListener("click", salut);
btnAfficher.addEventListener("click", () => {
  alert(`Je m'appelle ${inputPrenom.value} et j'ai ${inputAge.value} ans !`);
});

// function addition(a, b) {
//     return a + b
// }

//  (a, b) => {
//     return a + b
// }

//  (a, b) =>  a + b;

//  a =>  a + 10;

//  () =>  20 + 10
