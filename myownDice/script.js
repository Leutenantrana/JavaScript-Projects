function playDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;


    var y = document.getElementById("img1");
    y.setAttribute("src", "dice3.png");

    if (randomNumber1 === 1) {
        y.setAttribute("src", "dice1.png");
    } else if (randomNumber1 === 2) {
        y.setAttribute("src", "dice2.png");
    } else if (randomNumber1 === 3) {
        y.setAttribute("src", "dice3.png");
    } else if (randomNumber1 === 4) {
        y.setAttribute("src", "dice4.png");
    } else if (randomNumber1 === 5) {
        y.setAttribute("src", "dice5.png");
    } else if (randomNumber1 === 6) {
        y.setAttribute("src", "dice6.png");
    }


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var z = document.getElementById("img2");
    if (randomNumber2 === 1) {
        z.setAttribute("src", "dice1.png");
    } else if (randomNumber2 === 2) {
        z.setAttribute("src", "dice2.png");
    } else if (randomNumber2 === 3) {
        z.setAttribute("src", "dice3.png");
    } else if (randomNumber2 === 4) {
        z.setAttribute("src", "dice4.png");
    } else if (randomNumber2 === 5) {
        z.setAttribute("src", "dice5.png");
    } else if (randomNumber2 === 6) {
        z.setAttribute("src", "dice6.png");
    }

    var a = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        a.innerHTML = "player 1 won the match";

    } else if (randomNumber2 > randomNumber1) {
        a.innerHTML = "player 2 won the match";
    } else if (randomNumber1 = randomNumber2) {
        a.innerHTML = " match draw";
    }

}