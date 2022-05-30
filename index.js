//creating a random throw no.for dice 1 between 1-6
var randomNo1 = Math.floor(Math.random() * 6) + 1; /*creating a random no. btw 1-6*/

//getting random diceImg no. by concatinatiing with randomNo.
var randomDiceImg1 = "dice" + randomNo1 + ".png"; //dice1img-dice6img

//concatinating with full source address of image
var randomImgSource1 = "images/" + randomDiceImg1;

//to change the dice image we will manipulate the attribute of the dice img for both dice img 1 & 2
var image1 = document.querySelectorAll("img")[0]; //to select the first img
image1.setAttribute("src", randomImgSource1); //setting src to random no. of dice obtained


//random no for dice2
var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNo2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);

//display msg in place of h1
//if player1 wins elseIf player2 else both wins 
if (randomNo1 > randomNo2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNo2 > randomNo1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw!!!";
}