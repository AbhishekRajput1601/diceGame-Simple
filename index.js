                     // code for player 1

// random number from 1 to 6 on dice
var randomNumber1 = Math.floor(Math.random()*6)+1; 

// now generate random image from image 1 t0 6 ;
var randomDiceImg1 = "dice" + randomNumber1 + ".png"; // dicerandomNumber.png

// get random img from folder images
var randomImgsource1 = "images/"+ randomDiceImg1;

// set random img to player one img -> means change the default attribute
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImgsource1);

                // same code for player 2

// random number from 1 to 6 on dice for 2nd player
var randomNumber2 = Math.floor(Math.random()*6)+1; 

// now generate random image from image 1 t0 6 ;
var randomDiceImg2 = "dice" + randomNumber2 + ".png"; // dicerandomNumber.png

// get random img from folder images
var randomImgsource2 = "images/"+randomDiceImg2;

// set random img to player one img -> means change the default attribute
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImgsource2);

           // chack for winner


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!🚩"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="🚩 Match Draw 🚩!"
}


function refreshPage(){
    window.location.reload();
} 