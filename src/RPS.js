import Player from './Player.js';

class RPS {

    player = null;
    compChoice = this.computerMove();
    result = "";

    setupPlayer(name, choice) {
        return this.player = new Player(name, choice);
    }

    computerMove() {
        const choices = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * choices.length);
        return choices[random];
    }

    getResult() {
        if (this.player.choice === "rock" && this.compChoice === "scissors" || this.player.choice === "paper" && this.compChoice === "rock" || this.player.choice === "scissors" && this.compChoice === "paper") {
            return this.result = "Player Wins!";
        }
        else if (this.player.choice === "rock" && this.compChoice === "paper" || this.player.choice === "scissors" && this.compChoice === "rock" || this.player.choice === "paper" && this.compChoice === "scissors") {
            return this.result = "Computer wins!";
        }
        else if (this.player.choice === this.compChoice) {
            return this.result = "It's a Draw!";
        }
    }
}

export default RPS;