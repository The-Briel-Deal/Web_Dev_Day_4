var buttons = document.querySelectorAll("button");
for (index = 0; index < buttons.length; index++){
    buttons[index].addEventListener("click", play1);
}
function play1(){
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
}