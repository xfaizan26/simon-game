var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];

var level=0;
var started=false;
$(document).keypress(function()
{ 

  if(!started)
  {  
    $("#level-title").text("Level " + level);

  nextSequence();
  started=true;
  }
});
function nextSequence() {

  userClickedPattern = [];
  level++;


  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  setTimeout(function () {
    var audio = new Audio("D:\web develpoment\js\Simon Game Challenge Starting Files\sounds\technical_guruji.mp3");
    audio.play();
    
  }, 100000);
  playSound(randomChosenColour);
}
$(".btn").click(function handler()
{ 
    var userChoosenColor=$(this).attr("id");

    userClickedPattern.push(userChoosenColor);

    animatePress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1,userChoosenColor);
  
}

);
function checkAnswer(currentLevel,userChoosenColor)
{
   if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
   {      playSound(userChoosenColor);
   if(currentLevel+1==gamePattern.length)
   { 
    setTimeout(function () {
      nextSequence();
    }, 1000);
   }
  }
  else
  {  
    var audio = new Audio("sounds/wrong.mp3");
     audio.play();
     $("body").addClass("game-over");
     setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("game over press any key to restart");
    started=false;
    level=0;
    gamePattern=[];
  }
}
function playSound(name1)
{
  var audio = new Audio("sounds/" + name1 + ".mp3");
  audio.play();
  
}
function animatePress(currentColor)
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
},100);

}

