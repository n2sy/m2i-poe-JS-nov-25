let listeCours = [
  {
    id: 1,
    intitule: "Angular",
    niveau: "débutant",
  },
  {
    id: 2,
    intitule: "React",
    niveau: "intermédiaire",
  },
  {
    id: 3,
    intitule: "Next",
    niveau: "débutant",
  },
];

let codeAInserer = "";
divInfos = document.getElementById("cours");
for (const cours of listeCours) {
  codeAInserer = codeAInserer.concat(
    `
        <ul id=${cours.id}>
        <li>${cours.intitule}</li>
        <li>${cours.niveau}</li>
        <li>0</li>
        <button onclick="ajouterLike(${cours.id})">❤️</button>
        </ul>
        `
  );
}

divInfos.innerHTML = codeAInserer;

function ajouterLike(coursId) {
  document.getElementById(coursId).children[2].textContent =
    Number(document.getElementById(coursId).children[2].textContent) + 1;
}
