// function Book(titre, auteur, isbn) {
//     this.titre = titre;
//     this.auteur = auteur;
//     this.isbn = isbn
// }

// let b = new Book(titre, auteur, isbn)

class Book {
  titre;
  auteur;
  isbn;

  constructor(titre, auteur, isbn) {
    this.titre = titre;
    this.auteur = auteur;
    this.isbn = isbn;
  }
}

class UI {
  ajouterLivre(book) {
    let listeLivres = document.getElementById("book-list");
    let newTr = document.createElement("tr");
    let newTd1 = document.createElement("td");
    let newTd2 = document.createElement("td");
    let newTd3 = document.createElement("td");
    let newTd4 = document.createElement("td");
    newTd1.textContent = book.titre;
    newTd2.textContent = book.auteur;
    newTd3.textContent = book.isbn;
    newTd4.innerHTML = '<a href="#" class="delete">X</a>';

    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd4);

    listeLivres.appendChild(newTr);
  }

  afficherToast(message, classeBootstrap) {
    let newDiv = document.createElement("div");
    // newDiv.classList.add("alert");
    // newDiv.classList.add(classeBootstrap);

    newDiv.className = `alert ${classeBootstrap}`;
    newDiv.textContent = message;

    let divContainer = document.querySelector(".container");
    let formulaire = document.getElementById("formBook");
    divContainer.insertBefore(newDiv, formulaire);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  supprimerLivre(cible) {
    cible.parentElement.parentElement.remove();
  }

  reinitialiserChamps() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("isbn").value = "";
  }
}

class Stockage {
  static getLivres() {
    let listeLivres = localStorage.getItem("access_books");
    if (listeLivres == null) {
      return [];
    } else {
      return JSON.parse(listeLivres);
    }
  }
  static chargerLivres() {
    const books = Stockage.getLivres();
    books.forEach((livre) => {
      let ui = new UI();
      ui.ajouterLivre(livre);
    });
  }

  static ajoutLivreLocalStorage(livre) {
    let listeLivres = Stockage.getLivres();
    if (listeLivres.findIndex((book) => book.isbn == livre.isbn) == -1) {
      listeLivres.push(livre);
      localStorage.setItem("access_books", JSON.stringify(listeLivres));
      return true;
    } else return false;
  }
  static supprimerLivreLocalStorage(livreID) {
    let listeLivres = Stockage.getLivres();
    let indice = listeLivres.findIndex((livre) => livre.isbn == livreID);
    listeLivres.splice(indice, 1);
    localStorage.setItem("access_books", JSON.stringify(listeLivres));
  }
}

Stockage.chargerLivres();

document.getElementById("formBook").addEventListener("submit", (e) => {
  e.preventDefault();
  const titre = document.getElementById("titre").value;
  const auteur = document.getElementById("auteur").value;
  const isbn = document.getElementById("isbn").value;

  let interfaceU = new UI();
  if (titre == "" || auteur == "" || isbn == "") {
    interfaceU.afficherToast(
      "Veuillez remplir tous les champs",
      "alert-warning"
    );
    return;
  }
  let b = new Book(titre, auteur, isbn);
  if (Stockage.ajoutLivreLocalStorage(b)) {
    interfaceU.ajouterLivre(b);
    interfaceU.afficherToast("Livre ajouté", "alert-success");
    interfaceU.reinitialiserChamps();
  } else interfaceU.afficherToast("Livre existant avec cet ISBN", "alert-dark");
});

document.getElementById("book-list").addEventListener("click", (e) => {
  let interfaceU = new UI();

  if (e.target.className == "delete") {
    if (confirm("Etes-vous sûr de vouloir supprimer ce livre ?")) {
      interfaceU.supprimerLivre(e.target);
      Stockage.supprimerLivreLocalStorage(
        e.target.parentElement.previousElementSibling.textContent
      );
      interfaceU.afficherToast("Livre supprimé", "alert-danger");
    }
  } else {
    interfaceU.afficherToast("Pour supprimer, cliquez sur X", "alert-info");
  }
});
