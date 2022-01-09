var buttons = document.querySelectorAll("button");

function play0(){
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
}

function play1(){
    var kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
}

function play2(){
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
}

function play3(){
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
}

function play4(){
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
}

function play5(){
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
}

function play6(){
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
}
var play = [play0, play1, play2, play3, play4, play5, play6];

for (index = 0; index < buttons.length; index++){
    buttons[index].addEventListener("click", play[index]);
}