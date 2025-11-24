// affichage des erreurs au fur et à mesure de leurs corrections (questiond de seynabou)
let formulaire = document.getElementById("formulaire");
let titre = document.getElementById("titre");
let commentaire = document.getElementById("comment");
let age = document.getElementById("age");
let divResultat = document.getElementById("resultat");
let divError = document.getElementById("erreur");

setTimeout(() => {
  console.log("Hello Bernard");
}, 3000);

setInterval(() => {
  console.log("Test de setInterval");
}, 2000);

titre.addEventListener("input", (e) => {
  if (e.target.value.length < 3) {
    divError.innerHTML = `
    <strong>Le titre est un champ obligatoire</strong>
    <br>
    `;
  } else {
    divError.innerHTML = "";
  }
});

formulaire.addEventListener("submit", (evenement) => {
  evenement.preventDefault();

  divError.innerHTML = "";

  if (titre.value == "") {
    divError.innerHTML += `
    <strong>Le titre est un champ obligatoire</strong>
    <br>
    `;

    return;
  }
  if (commentaire.value.length < 3) {
    divError.innerHTML += `
    <p><i>Le nombre minimum de caractères pour le commentaire est 3</i></p>
      `;

    return;
  }
  if (Number(age.value) < 18 || Number(age.value) > 50) {
    divError.innerHTML += `<p>L'âge doit être compris entre 18 et 50'</p>
      `;

    return;
  }

  localStorage.setItem("titre", titre.value);
  localStorage.setItem("commentaire", commentaire.value);
  localStorage.setItem("age", age.value);
  let resultat = `Le titre est ${titre.value}, le commentaire est "${commentaire.value}" et l'âge est ${age.value} ans`;
  divResultat.textContent = resultat;
});

document.getElementById("btn-vider").addEventListener("click", () => {
  let t = localStorage.getItem("titre");
  console.log(t);
  localStorage.removeItem("titre");
});

// Objet Javascript --> JSON
JSON.stringify(value);

// JSON --> Objet Javascript
JSON.parse(text);

// Version avec affichage de toutes les erreurs
// let formulaire = document.getElementById("formulaire");
// let titre = document.getElementById("titre");
// let commentaire = document.getElementById("comment");
// let age = document.getElementById("age");
// let divResultat = document.getElementById("resultat");
// let divError = document.getElementById("erreur");

// formulaire.addEventListener("submit", (evenement) => {
//   evenement.preventDefault();
//   let formValid = true;
//   divError.innerHTML = "";

//   if (titre.value == "") {
//     divError.innerHTML += `
//     <strong>Le titre est un champ obligatoire</strong>
//     <br>
//     `;
//     formValid = false;
//     // return;
//   }
//   if (commentaire.value.length < 3) {
//     divError.innerHTML += `
//     <p><i>Le nombre minimum de caractères pour le commentaire est 3</i></p>
//       `;
//     formValid = false;
//     //return;
//   }
//   if (Number(age.value) < 18 || Number(age.value) > 50) {
//     divError.innerHTML += `<p>L'âge doit être compris entre 18 et 50'</p>
//       `;
//     formValid = false;
//     //return;
//   }

//   if (formValid) {
//     let resultat = `Le titre est ${titre.value}, le commentaire est "${commentaire.value}" et l'âge est ${age.value} ans`;
//     divResultat.textContent = resultat;
//   }
// });
