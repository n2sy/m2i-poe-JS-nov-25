let myMap = new Map();

myMap.set("ville", "Paris");
myMap.set("prenom", "Nidhal");
myMap.set("age", 40);
myMap.set("ville", "Lyon");

let valeur = myMap.get("prenom");

//console.log(myMap);

myMap.delete("age");
//console.log(myMap);

let tab = ["nidhal", "nidhal", 13, "m2i", 13, 13, 13, "m2i"];

let mySet = new Set(tab);
console.log(mySet);
