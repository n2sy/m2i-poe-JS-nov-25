let listeTaches = document.getElementById("listTasks");
let boutonAjouter = document.getElementById("btnAjouter");
let boutonAnnuler = document.getElementById("btnAnnuler");
let inpTask = document.getElementById("inpNewTask");

let tabTasks = [];
function getAllTasks() {
  listeTaches.innerHTML = "";
  fetch("http://localhost:3000/tasks")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      tabTasks = data;
      convertTaskToLi();
    });
}

getAllTasks();

function convertTaskToLi() {
  for (const task of tabTasks) {
    let newLi = document.createElement("li");
    newLi.className = "list-group-item";

    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.style.margin = "0 10px";
    newCheckbox.checked = task.checked;

    newCheckbox.addEventListener("click", () => {
      fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          checked: !task.checked,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          alert("Tâche modifiée avec succès");
          getAllTasks();
        })
        .catch((err) => {
          console.log(err);
        });
    });

    let newSpan = document.createElement("span");
    newSpan.textContent = task.text;
    newSpan.style.textDecoration = task.checked ? "line-through" : "null";

    let newBadge = document.createElement("span");
    newBadge.className = "badge text-bg-secondary";
    newBadge.style.margin = "0 10px";
    newBadge.textContent = `${new Date(task.date_c).getHours()}H ${new Date(
      task.date_c
    ).getMinutes()}Mn`;

    newLi.appendChild(newCheckbox);
    newLi.appendChild(newSpan);
    newLi.appendChild(newBadge);

    newLi.addEventListener("dblclick", () => {
      if (confirm("Etes-vous sûr ?")) {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            alert("Tâche supprimée avec succès");
            getAllTasks();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });

    listeTaches.appendChild(newLi);
  }
}

function toggleElements() {
  inpTask.hidden = !inpTask.hidden;
  boutonAjouter.hidden = !boutonAjouter.hidden;
  boutonAnnuler.hidden = !boutonAnnuler.hidden;
}

inpTask.addEventListener("change", () => {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    body: JSON.stringify({
      checked: false,
      date_c: new Date(),
      text: inpTask.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      alert("Tâche ajoutée avec succès");
      getAllTasks();
    })
    .catch((err) => {
      console.log(err);
    });
  toggleElements();
});

boutonAjouter.addEventListener("click", toggleElements);
boutonAnnuler.addEventListener("click", toggleElements);
