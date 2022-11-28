import express from 'express';
import RPS from '../src/RPS.js';

export const router = express.Router();

router.post('/', (req, res) => {
    const rps = new RPS();
    const name = req.body.player1;
    req.app.locals.name = name;
    rps.setupPlayer(name);
    req.app.locals.rps = rps;

    res.redirect('/game');
})

router.get('/', (req, res) => {
    const player = req.app.locals.name;

    res.render('game', {
        name: player
    })
})


