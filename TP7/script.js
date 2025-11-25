// let addUser = async () => {
//   let newUser = {
//     email: "nidhal@gmail.com",
//     password: "qwerty",
//     role: "user",
//     username: "n2sy",
//   };
//   try {
//     let response = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     let data = await response.json();
//     console.log("DATA", data);

//     alert("Utilisateur bien ajouté");
//   } catch (err) {
//     alert("Impossible d'ajouter cet utilisateur");
//   }
// };

// addUser();

// AJAX
function fetchUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/users");
  //request.responseType = "json";
  request.send();

  //Méthode 1
  //   request.onreadystatechange = function () {
  //     if (request.readyState == 4 && request.status == 200) {
  //       //let data = JSON.parse(request.responseText);
  //       //   console.log(data);
  //       console.log(request.response);
  //     }
  //   };

  //Méthode 2
  request.addEventListener("load", () => {
    console.log(JSON.parse(request.responseText));
  });
}

function addUser() {
  let request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/users");
  request.send(
    JSON.stringify({
      username: "marilou",
      email: "marie@gmail.com",
      role: "admin",
    })
  );
  request.addEventListener("load", () => {
    console.log("User added");

    console.log(JSON.parse(request.responseText));
  });
}
addUser();
console.log("*********");

fetchUsers();
