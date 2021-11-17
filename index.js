function randomDice(){

  var randomNumber = Math.random() * 6;
         randomNumber =  Math.floor(randomNumber) + 1;
         randomNumber = "images/dice"+ randomNumber+".png";
        return randomNumber;
}

var player1 = randomDice();
var player2 = randomDice();

        //document.querySelector("img").setAttribute("src", player1);

        //  document.querySelectorAll("img")[0].src = player1;
        document.querySelectorAll("img")[0].setAttribute("src", player1);
        document.querySelectorAll("img")[1].setAttribute("src", player2);


  function declareWinner(){


    if (player1 > player2){
         document.querySelector("h1").innerHTML = "Player1 Wins!";
    }

    else if(player2 > player1){
        document.querySelector("h1").innerHTML = "Player2 Wins!";
    }

    else{
        document.querySelector("h1").innerHTML = "Oh no!, Draw!";
    }

//    return;
  }

declareWinner();
