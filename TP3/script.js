const inpIntitule = document.getElementById("intitule");
const inpMontant = document.getElementById("montant");
const btnAjouter = document.getElementById("btn-ajouter");
const listeDepenses = document.getElementById("list-dep");
const spanTotal = document.getElementById("total-dep");
const filtrePrix = document.getElementById("filtre-prix");
const btnEffacer = document.getElementById("btn-effacer");

let afficherPasDeDepenses = false;
let total = 0;
btnAjouter.addEventListener("click", () => {
  if (!inpIntitule.value.trim().length || !inpMontant.value.trim().length) {
    alert("Veuillez remplir les deux champs SVP");
    return;
  }
  if (afficherPasDeDepenses) {
    listeDepenses.innerHTML = "";
    afficherPasDeDepenses = false;
  }

  let newLi = document.createElement("li");
  newLi.className = "list-group-item"; // ou passer par classList

  let newText = document.createTextNode(
    `${inpIntitule.value} : ${inpMontant.value}€`
  );

  newLi.appendChild(newText);
  listeDepenses.appendChild(newLi);

  total += +inpMontant.value;
  spanTotal.textContent = `${total}€`;

  reinit();
});

btnEffacer.addEventListener("click", reinit);

function reinit() {
  inpIntitule.value = "";
  inpMontant.value = "";
}

filtrePrix.addEventListener("input", (e) => {
  for (const child of listeDepenses.children) {
    let t = child.textContent.split(" ");
    // Ou     if(Number(t[2] < Number(filtrePrix.value)))
    if (e.target.value.length != 0) {
      if (Number(t[2]) >= Number(e.target.value)) {
        // child.style.backgroundColor = "red";
        child.classList.remove("list-group-item-success");
        child.classList.add("list-group-item-danger");
      } else {
        // child.style.backgroundColor = "green";
        child.classList.remove("list-group-item-danger");
        child.classList.add("list-group-item-success");
      }
    } else child.style.backgroundColor = "white";
  }
});

document.getElementById("inpTag").addEventListener("keyup", (e) => {
  if (e.code == "Space") {
    let newSpan = document.createElement("span");
    newSpan.className = "badge text-bg-secondary m-2";
    newSpan.textContent = `#${document.getElementById("inpTag").value}`;
    document.getElementById("tags").appendChild(newSpan);
    document.getElementById("inpTag").value = "";
  }
});
