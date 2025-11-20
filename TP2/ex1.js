function convertFrancToEuro() {
  let resultat = document.getElementById("montantFranc").value / 6.5;
  console.log(resultat);
  document.getElementById("montantEuro").value = resultat.toFixed(2);
}

function convertEuroToFranc() {
  let resultat = document.getElementById("montantEuro").value * 6.5;
  console.log(resultat);
  document.getElementById("montantFranc").value = resultat.toFixed(2);
}
