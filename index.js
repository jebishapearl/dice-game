var randomNumber1= Math.floor((Math.random()*6)+1);
var randomNumber2= Math.floor((Math.random()*6)+1);

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
 
document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+randomNumber1+".png");


var resultText = "";

if (randomNumber1 > randomNumber2) {
  resultText = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  resultText = "Player 2 Wins! 🚩";
} else {
  resultText = "Draw!";
}

// Update h2 and make it visible
var resultElement = document.getElementById("result");
resultElement.innerHTML = resultText;
resultElement.style.display = "block";

/*
shorter way

if (randomNumber1 > randomNumber2) {
    document.getElementById("result").innerHTML= "🚩 Player 1 Wins!";
  } */