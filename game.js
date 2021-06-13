var gamePattern =[];
var userClickedPattern =[];
var isStarted = false;
var level = 0;

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4) + 1;
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $(randomChosenColour).fadeOut(100).fadeIn(100);
    new Audio("sounds/"+randomChosenColour+".mp3").play();
    level++;
    $("h1").text("level "+level);
}

$(".btn").on("click" , function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function playSound(name){
    new Audio("sounds/"+name+".mp3").play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

$(document).on("click", function(){
    if(!isStarted){
        nextSequence();
        isStarted = true;
        $("h1").text("level "+level);
    }
})