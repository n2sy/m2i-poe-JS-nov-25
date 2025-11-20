let tab = [
  125,
  "ABC",
  214,
  87,
  "ERT",
  "TYUIO",
  254,
  963,
  47,
  "Scrt",
  "Sezat",
  52,
  ,
  "nidhal",
  89,
];

let tabEntiers = tab.filter((element) => typeof element == "number");
let tabStrings = tab.filter((element) => typeof element == "string");

tabEntiers.sort((a, b) => a - b);
tabStrings.sort();

console.log(tabEntiers, tabStrings);

tabStrings.reverse();
// console.log(tabStrings);

let somme = tabEntiers.reduce(
  (total, elementCourant) => total + elementCourant
);
let produit = tabEntiers.reduce(
  (total, elementCourant) => total * elementCourant,
  1
);

let moyenne = somme / tabEntiers.length;
// console.log("Somme : ", somme);
// console.log("Produit : ", produit);
console.log("Moyenne : ", moyenne);

let minElement = Math.min(...tabEntiers);
let maxElement = Math.max(...tabEntiers);

console.log(minElement, maxElement);

let elementAChercher = 1250;
let res = tabEntiers.includes(elementAChercher);
if (res) {
  let i = tabEntiers.indexOf(elementAChercher);
  console.log(`L'element ${elementAChercher} se trouve à la position ${i}`);
} else {
  console.log(`L'element ${elementAChercher} n'existe pas dans notre tableau`);
}

let tabSup = tabEntiers.filter((element) => element > moyenne);
let tabMin = tabEntiers.filter((element) => element < moyenne);
console.log(tabSup, tabMin);

console.log(tabStrings);

moitieTabStrings = tabStrings.slice(
  parseInt(tabStrings.length / 2),
  tabStrings.length
);

console.log(moitieTabStrings);

let fusion = [...tabMin, ...moitieTabStrings];
console.log(fusion);
