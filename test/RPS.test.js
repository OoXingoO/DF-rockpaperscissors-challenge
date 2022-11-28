import { expect } from 'chai';
import RPS from '../src/RPS.js'

describe('Rock Paper Scissors tests', () => {

    const rps = new RPS();

    it('should set up a player name & return correct choice', () => {
        const testPlayer = rps.setupPlayer("mockName", "rock");

        expect(testPlayer.name).to.be.eql("mockName");
        expect(testPlayer.choice).to.be.eql("rock");
    })

    it('computerMove should return either rock, paper, scissors', () => {
        const computerChoice = rps.computerMove();

        expect(computerChoice).to.be.a('string');
        expect(computerChoice).to.be.oneOf(["rock", "paper", "scissors"]);
    })

    it('getResult should return result as expected', () => {
        rps.player.choice = "paper"
        rps.compChoice = "rock"

        const result = rps.getResult()

        expect(result).to.be.eql("Player Wins!")
        expect(result).to.be.a('string')
    })
})