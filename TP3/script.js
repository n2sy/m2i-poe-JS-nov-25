const inpIntitule = document.getElementById("intitule");
const inpMontant = document.getElementById("montant");
const btnAjouter = document.getElementById("btn-ajouter");
const listeDepenses = document.getElementById("list-dep");
const spanTotal = document.getElementById("total-dep");
const filtrePrix = document.getElementById("filtre-prix");
const btnEffacer = document.getElementById("btn-effacer");

let afficherPasDeDepenses = true;
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
  newLi.className = "list-group-item  d-flex justify-content-between"; // ou passer par classList

  newLi.amount = inpMontant.value;
  let newBtn = document.createElement("button");
  newBtn.className = "btn btn-danger";
  newBtn.textContent = "Supprimer";
  newBtn.addEventListener("click", () => {
    supprimerDepenses(newLi);
  });

  let newText = document.createTextNode(
    `${inpIntitule.value} : ${inpMontant.value}€`
  );

  newLi.appendChild(newText);
  newLi.appendChild(newBtn);
  listeDepenses.appendChild(newLi);

  total += +inpMontant.value;
  spanTotal.textContent = `${total}€`;

  reinit();
});

function supprimerDepenses(depenseASupprimer) {
  if (confirm("Etes-vous sûr de vouloir supprimer cette dépense ?")) {
    listeDepenses.removeChild(depenseASupprimer);
    total = total - depenseASupprimer.amount;
    spanTotal.textContent = `${total}€`;

    if (!listeDepenses.children.length) {
      listeDepenses.innerHTML = `<li class="list-group-item">💼 Aucune dépense enregistrée</li>`;
      afficherPasDeDepenses = true;
    }
  }
}

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
