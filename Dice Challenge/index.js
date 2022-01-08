function rollDice() {
    return "images/dice" + (Math.floor(Math.random()*6) + 1).toString() + ".png";
}

var player_one_roll = rollDice();
var player_two_roll = rollDice();

if (player_one_roll == player_two_roll) {
    var winText = "You tied! Refresh to play again!";
}
else if (player_one_roll > player_two_roll) {
    var winText = "Player one wins!";
}
else {
    var winText = "Player two wins!";
}
console.log(player_one_roll);
document.querySelector(".img1").src = player_one_roll;
document.querySelector(".img2").src = player_two_roll;
document.querySelector("h1").textContent = winText;