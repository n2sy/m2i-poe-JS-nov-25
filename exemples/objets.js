function afficherSalut() {
  console.log("Hey Salut Toi !");
}

function Participant(prenom, nom, fct = afficherSalut) {
  this.prenom = prenom;
  this.nom = nom;
  this.fct = fct;
}

let p1 = new Participant("nidhal", "jelassi");
let p2 = new Participant("bart", "simpson");
// delete p2.nom;
console.log(p1 instanceof Participant);

p1.fct();

Participant.prototype.annee = 2025;
Participant.prototype.formation = "javascript";
console.log(p1, p2);

// Separer les propriétés des objets des propriétés du prototype
let objetProprietes = [];
let prototypeProprietes = [];

for (const prop in p1) {
  if (p1.hasOwnProperty(prop)) objetProprietes.push(prop);
  else prototypeProprietes.push(prop);
}

console.log(objetProprietes, prototypeProprietes);

// Parcours d'un objet
console.log(Object.keys(p1)); // SURTOUT PAS p1.keys()
console.log(Object.values(p1));
console.log(Object.entries(p1));

//2eme manière de créer un objet
let o = {
  prenom: "nidhal",
  poste: "formateur",
  data_naissance: 1985,
  infos: {
    annee: 2025,
    cabinet: "m2i",
  },
  calculAge: () => {
    console.log("this", this);

    console.log(2025 - 2001);
  },
};

//let prop = prompt("Quelle info sur l'utilisateur voudriez-vous afficher ?");

console.log(o.infos.cabinet);
o.calculAge();

//3ème manière
let o1 = Object.create({
  color: "pink",
  largeur: "12px",
});

console.log(o1);

//4ème manière
class Livre {}
