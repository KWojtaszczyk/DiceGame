var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

var image1src = "images/dice" + randomNumber1 + ".png";
var image2src = "images/dice" + randomNumber2 + ".png";

image1.setAttribute("src", image1src);

image2.setAttribute("src", image2src);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
