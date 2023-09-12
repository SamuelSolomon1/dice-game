let player1 = "Player 1";
let player2 = "Player 2";

// Function to roll the dice
function rollTheDice() {
        //
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        //rolls the dice
        document.querySelector(".img1").setAttribute("src",
            "Images/dice" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src",
            "Images/dice" + randomNumber2 + ".png");
        //condition statement
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").textContent = "Draw!";
        }
        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").textContent
                            = (player2 + " WINS!");
        }
        else {
            document.querySelector("h1").textContent
                            = (player1 + " WINS!");
        } 
}