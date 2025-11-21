let nombreSecret = Math.trunc(Math.random() * 20) + 1;
console.log(nombreSecret);
let score = 20;
let highscore = 0;

function afficherMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".check").addEventListener("click", () => {
  let proposition = Number(document.querySelector(".guess").value);

  if (!proposition) {
    afficherMessage("❌ No Number");
  } else if (proposition == nombreSecret) {
    afficherMessage("🎉 Correct Number");
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = nombreSecret;
    document.querySelector(".number").style.width = "25rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (proposition != nombreSecret) {
    if (score > 1) {
      afficherMessage(proposition > nombreSecret ? "Too High" : "📈 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      afficherMessage("🥲 You lost...");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").disabled = true;
    }
  }
});

document.getElementById("btn-again").addEventListener("click", () => {
  score = 20;
  nombreSecret = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".check").removeAttribute("disabled");
  afficherMessage("Start guessing...");
});
