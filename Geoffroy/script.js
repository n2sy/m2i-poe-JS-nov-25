let form = document.querySelector("#form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let booksBody = document.querySelector("#books");
let infos = document.querySelector("#infos");
let errors = document.querySelector("#error");
let create = document.querySelector("#create");
let booksArray = [];
let localStorageArray;

function renderBooks() {
  localStorageArray = JSON.parse(localStorage.getItem("Books"));
  if (!localStorageArray) booksArray = [];
  else booksArray = [...localStorageArray];
  if (localStorageArray == null) {
    return (booksBody.innerHTML = "<tr><td>liste vide</td></tr>");
  } else {
    booksBody.innerHTML = localStorageArray.map(
      (book, index) =>
        `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button id="delete-${index}" onClick="deleteBook(${index})"> X</button></td>
    </tr>`
    );
  }
}

function renderBooks() {
  if (localStorageArray == null) {
    return (booksBody.innerHTML = "<tr><td>liste vide</td></tr>");
  } else {
    booksBody.innerHTML = localStorageArray.map(
      (book, index) =>
        `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button id="delete-${index}" onClick="deleteBook(${index})"> X</button></td>
    </tr>`
    );
  }
}

renderBooks();

booksArray = JSON.parse(localStorage.getItem("Books"));
booksArray.splice(index, 1);

localStorage.setItem("Books", JSON.stringify(booksArray));
renderBooks();
infos.innerHTML = "Livre supprimé";
infos.style.backgroundColor = "blue";
infos.style.color = "white";
setTimeout(() => {
  infos.style.display = "none";
}, 2000);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formValid = true;

  infos.innerHTML = "";
  create.innerHTML = "";
  errors.innerHTML = "";

  if (title.value.trim() === "") {
    errors.textContent += "Le titre est obligatoire ";
    formValid = false;
  }

  if (author.value.trim() === "") {
    errors.textContent += "L'auteur est obligatoire ";
    formValid = false;
  }

  if (isbn.value.trim() === "") {
    errors.textContent += "L'isbn est obligatoire ";
    formValid = false;
  }

  if (formValid) {
    let dataObj = {
      title: title.value,
      author: author.value,
      isbn: isbn.value,
    };
    console.log(dataObj);

    booksArray.push(dataObj);
    console.log(booksArray);

    localStorage.setItem("Books", JSON.stringify(booksArray));
    renderBooks();
    create.textContent = "Livre Ajouté";
    create.style.backgroundColor = "green";
    create.style.color = "white";
    setTimeout(() => {
      create.style.display = "none";
    }, 2000);
  }

  errors.style.backgroundColor = "red";
  errors.style.color = "white";
  setTimeout(() => {
    errors.style.display = "none";
  }, 2000);

  setTimeout(() => {
    infos.style.display = "none";
  }, 2000);
  console.log("add");
});
