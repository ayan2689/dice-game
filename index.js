function rollDice(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
  document.querySelector(".left img").setAttribute("src", randomDiceImage1);

  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelector(".right img").setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
       document.querySelector(".player1").style.visibility = "visible";
  } else if (randomNumber1 < randomNumber2) {
      document.querySelector(".player2").style.visibility = "visible";
    } else {
        document.querySelector("h1").innerHTML = "You Got A Draw!";
        document.querySelector("h1").style.color = "purple";
      }

  document.querySelector(".btn").style.visibility = "hidden";   
  document.querySelector(".image").style.visibility = "visible";
 
}

function rePlay() {
  document.querySelector(".btn").style.visibility = "visible";
  document.querySelector(".image").style.visibility = "hidden";
  document.querySelector(".player1").style.visibility = "hidden";
  document.querySelector(".player2").style.visibility = "hidden";
  document.querySelector(".left img").setAttribute("src", "./images/dice6.png");
  document.querySelector(".right img").setAttribute("src", "./images/dice6.png");
  document.querySelector("h1").innerHTML = "Dice Game!";
  document.querySelector("h1").style.color = "black";
}