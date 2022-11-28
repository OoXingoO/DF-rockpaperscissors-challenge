import express from 'express';

export const router = express.Router();

router.post('/', (req, res) => {
    const rps = req.app.locals.rps;
    const name = req.app.locals.name;
    const choice = req.body.choice;

    const player = rps.setupPlayer(name, choice);
    rps.computerMove();
    const RPSresults = rps.getResult();

    res.render('result', {
        name: player.name,
        playerChoice: player.choice,
        compChoice: rps.compChoice,
        results: RPSresults,
    })

})