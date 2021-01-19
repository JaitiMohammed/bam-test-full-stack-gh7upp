// Import stylesheets
import "./helpers/style.css";
import * as helper from "./helpers/helpers.js";

// VOTRE NOM ET PRENOM ICI !
function rangerTest(N) {
  var prevDigit = N % 10;
  var clone = Math.floor(N / 10);
  while (clone > 0) {
    var currentDigit = clone % 10;
    if (currentDigit > prevDigit) {
      return false;
    }
    prevDigit = currentDigit;
    clone = Math.floor(clone / 10);
  }
  return true;
}
function solutionExercice1(N) {
  for (var i = N; i > 0; i--) {
    if (rangerTest(i)) {
      return i;
    }
  }
}

function solutionExercice2(L) {
  //  On peut prendre n'importe quelle liste en paramétre
  var res;
  if (!L.includes(1)) return 1;
  res = L.reduce((accumulator, current) => {
    if (current <= 0) return accumulator;
    const min = current + 1;
    return !L.includes(min) && accumulator > min ? min : accumulator;
  }, 1000000);
  return res;
}
console.log(solutionExercice2([1, 4, 7, 5, 3, 6, 3]));

function solutionExercice3(L) {
  var ans = L[0];
  for (var i = 1; i < L.length; i++) {
    ans ^= L[i];
  }
  return ans;
}

helper.displayOnHtml(solutionExercice1(1000), "1");
helper.displayOnHtml(solutionExercice2([1, 4, 7, 5, 3, 6, 3]), "2");
helper.displayOnHtml(solutionExercice3([1, 5, 3, 6, 4, 3, 1, 5, 4]), "3");
