let sectionPlayer0 = document.querySelector(".player--0");
let sectionPlayer1 = document.querySelector(".player--1");
let scoreCourant0 = document.getElementById("current--0");
let scoreCourant1 = document.getElementById("current--1");
let scoreGlobal0 = document.getElementById("score--0");
let scoreGlobal1 = document.getElementById("score--1");
let dice = document.querySelector(".dice");

// let score0, score1, currentScore0, currentScore1, activePlayer, partieEnCours;
let scores, currentScore, activePlayer, partieEnCours;
let socreAAtteindre = 20;
function init() {
  //Initialisation des variables globales
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  partieEnCours = true;

  //Initialisation de l'affichage HTML
  scoreGlobal0.textContent = scores[0]; // ou 0
  scoreGlobal1.textContent = scores[0]; // ou 0
  scoreCourant0.textContent = 0; // ou 0
  scoreCourant1.textContent = 0; // ou 0
  dice.hidden = true;
  sectionPlayer0.classList.add("player--active");
  sectionPlayer1.classList.remove("player--active");
  sectionPlayer0.classList.remove("player--winner");
  sectionPlayer0.classList.remove("player--winner");
}

init();

function passerLaMain() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  sectionPlayer0.classList.toggle("player--active");
  sectionPlayer1.classList.toggle("player--active");
}

document.getElementById("btn-new-game").addEventListener("click", init);

document.getElementById("btn-roll-dice").addEventListener("click", () => {
  if (partieEnCours) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.hidden = false;
    dice.src = `dice-${diceNumber}.png`;
    if (diceNumber != 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //   if (activePlayer == 0) {
      //     scoreCourant0.textContent = currentScore;
      //   } else {
      //     scoreCourant1.textContent = currentScore;
      //   }
    } else {
      passerLaMain();
    }
  }
});

document.getElementById("btn-hold").addEventListener("click", () => {
  if (partieEnCours) {
    scores[activePlayer] += currentScore;
    if (activePlayer == 0) scoreGlobal0.textContent = scores[activePlayer];
    else scoreGlobal1.textContent = scores[activePlayer];
    console.log(scores[activePlayer]);

    if (scores[activePlayer] >= socreAAtteindre) {
      partieEnCours = false;
      dice.hidden = true;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else passerLaMain();
  }
});
