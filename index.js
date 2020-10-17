var audio = new Audio('song.mp3');
// better song: http://www.universal-soundbank.com/sounds/742.mp3

var count = [0,0,0];

// The code below can be replaced with a for, by changing the call string of the function whoHaveBuzz with the corresponding numbers and in HTML by changing the text of the first three buttons with the same numbers, don't forget to change the name in the scoreboard

document.getElementById("1").addEventListener("click", function(){whoHaveBuzz("Mamie")});
document.getElementById("2").addEventListener("click", function() {whoHaveBuzz("Florian")});
document.getElementById("3").addEventListener("click",function(){whoHaveBuzz("Maman")});
document.getElementById("resetButton").addEventListener("click", function(){document.getElementById("buzzResult").innerHTML=""});

for (let i = 1; i <= 3; i++) 
{
  document.getElementById(i + "-more").addEventListener("click", function(){countMore(i)});
  document.getElementById(i + "-less").addEventListener("click", function(){countLess(i)});
}

function whoHaveBuzz(name)
{
  clearTimeout(audioSetPause);
  audio.currentTime = 0;
  audio.play();
  var result = document.getElementById("buzzResult");
  result.innerHTML += " " + name;
  var audioSetPause = setTimeout(function(){ audio.pause(); }, 500);
}
function countLess(id)
{
  var element = document.getElementById(id + "-score");
  if (count[id-1] > 0)
  {
    count[id-1] = count[id-1] - 1;
    element.innerHTML = ": " + count[id-1];
  }
}
function countMore(id)
{
  var element = document.getElementById(id + "-score");
  count[id-1] += 1;
  element.innerHTML = ": " + count[id-1];
}