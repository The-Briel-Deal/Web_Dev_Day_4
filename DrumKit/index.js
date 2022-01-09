var buttons = document.querySelectorAll(".drum");

function play0() {
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
}

function play1() {
    var kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
}

function play2() {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
}

function play3() {
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
}

function play4() {
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
}

function play5() {
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
}

function play6() {
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
}
var play = [play0, play1, play2, play3, play4, play5, play6];

for (index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", play[index]);
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "w":
            {
                play0();
                buttonAnimation("w")
                break;
            }
        case "a":
            {
                play1();
                buttonAnimation("a")
                break;
            }
        case "s":
            {
                play2();
                buttonAnimation("s")
                break;
            }
        case "d":
            {
                play3();
                buttonAnimation("d")
                break;
            }
        case "j":
            {
                play4();
                buttonAnimation("j")
                break;
            }
        case "k":
            {
                play5();
                buttonAnimation("k")
                break;
            }
        case "l":
            {
                play6();
                buttonAnimation("l")
                break;
            }
    }
});
document.addEventListener('keyup', function(event) {
    switch (event.key) {
        case "w":
            {
                play0();
                buttonAnimationEnd("w")
                break;
            }
        case "a":
            {
                play1();
                buttonAnimationEnd("a")
                break;
            }
        case "s":
            {
                play2();
                buttonAnimationEnd("s")
                break;
            }
        case "d":
            {
                play3();
                buttonAnimationEnd("d")
                break;
            }
        case "j":
            {
                play4();
                buttonAnimationEnd("j")
                break;
            }
        case "k":
            {
                play5();
                buttonAnimationEnd("k")
                break;
            }
        case "l":
            {
                play6();
                buttonAnimationEnd("l")
                break;
            }
    }
});

document.addEventListener('mouseover', function(event) {

    switch (event.target.innerText) {
        case "w":
            {
                buttonAnimation("w")
                break;
            }
        case "a":
            {
                buttonAnimation("a")
                break;
            }
        case "s":
            {
                buttonAnimation("s")
                break;
            }
        case "d":
            {
                buttonAnimation("d")
                break;
            }
        case "j":
            {
                buttonAnimation("j")
                break;
            }
        case "k":
            {
                buttonAnimation("k")
                break;
            }
        case "l":
            {
                buttonAnimation("l")
                break;
            }
    }
});

document.addEventListener('mouseout', function(event) {

    switch (event.target.innerText) {
        case "w":
            {
                buttonAnimationEnd("w")
                break;
            }
        case "a":
            {
                buttonAnimationEnd("a")
                break;
            }
        case "s":
            {
                buttonAnimationEnd("s")
                break;
            }
        case "d":
            {
                buttonAnimationEnd("d")
                break;
            }
        case "j":
            {
                buttonAnimationEnd("j")
                break;
            }
        case "k":
            {
                buttonAnimationEnd("k")
                break;
            }
        case "l":
            {
                buttonAnimationEnd("l")
                break;
            }
    }
});

function buttonAnimation(currentKeyPress) {
    document.querySelector("." + currentKeyPress).classList.add("pressed");
}

function buttonAnimationEnd(currentKeyPress) {
    document.querySelector("." + currentKeyPress).classList.remove("pressed");
}
