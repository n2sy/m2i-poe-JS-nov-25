// let tab = [3, "nidhal", true];

// // for (const element of tab) {
// //   console.log(element);
// // }
// // for (const element in tab) {
// //   console.log(element);
// // }

// for (const key of o) {
//   console.log(key);
// }

// let a = function (x, y) {
//   return x * y;
// };

// a(4, 5);

let o = {
  prenom: "nidhal",
  formation: "m2i",
  age: 40,
};

let o1 = {
  prenom: "nidhal",
  formation: "m2i",
  age: 40,
};

function Etudiant(prenom, age) {
  this.prenom = prenom;
  this.age = age;
}

let e1 = new Etudiant("nidhal", 40);
e1.numTel = "0712121";
let e2 = new Etudiant("baptiste", 19);
delete e2.age;

console.log(e1, e2);

class Etudiant {
  constructor() {}
}
