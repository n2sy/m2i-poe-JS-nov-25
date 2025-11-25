async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users"); // GET
    let data = await res.json();

    for (const user of data) {
      let newLi = document.createElement("li");
      newLi.textContent = `${user.name} -- ${user.email}`;
      document.getElementById("list").appendChild(newLi);
    }
  } catch (err) {
    let newDiv = document.createElement("div");
    newDiv.textContent = "Impossible de se connecter à l'API !!!!";
    document.body.appendChild(newDiv);
  }
}
fetchData();

document.getElementById("add-user").addEventListener("click", async () => {
  let newUser = {
    email: "nidhal@gmail.com",
    password: "qwerty",
    role: "user",
    username: "n2sy",
  };
  try {
    let response = await fetch(
      "https://filmstore-409b9-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log("DATA", data);

    alert("Utilisateur bien ajouté");
  } catch (err) {
    alert("Impossible d'ajouter cet utilisateur");
  }
});

// fetch("https://jsonplaceholder.typicode.com/users") // GET
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
