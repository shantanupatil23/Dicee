function changeImageOfDice(index) {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector(".img" + index)
    .setAttribute("src", "images/dice" + randomNumber + ".png");
  return randomNumber;
}

var valueDice1 = changeImageOfDice(1);
var valueDice2 = changeImageOfDice(2);

if (valueDice1 > valueDice2) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
} else if (valueDice1 < valueDice2) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".container h1").innerHTML = "Draw!";
}
