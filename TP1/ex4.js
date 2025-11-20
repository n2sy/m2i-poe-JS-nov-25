let inputPrenom = document.getElementById("inpPrenom");
let btn = document.getElementById("btnAjouter");
let divAffichage = document.getElementById("affichage");

let etudiants = [
  "Elodie",
  "Geoffroy",
  "Seynabou",
  "Helene",
  "Melanie",
  "Mari.Lou",
  "Baptiste",
  "Armand",
  "Celine",
  "Adrien",
  "Nicolas",
  "Romain",
  "Marie.Josee",
];

btn.addEventListener("click", () => {
  etudiants.push(inputPrenom.value);
  console.log(etudiants);
  etudiants.sort();
  console.log(etudiants);
  divAffichage.textContent = etudiants.join(" ** ");
  //   divAffichage.innerHTML = "<h1>Geoffroy </h1>";
  //   divAffichage.innerText = "<h1>Geoffroy </h1>";
});
