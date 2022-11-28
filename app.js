import express from 'express';
import dotenv from 'dotenv';

import { router as indexRouter } from './routes/index.js';
import { router as gameRouter } from './routes/game.js';
import { router as resultRouter } from './routes/result.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/result', resultRouter);

const server = app.listen(port, () => {
    const SERVERPORT = server.address().port;
    console.log(`App is running on http://localhost:${SERVERPORT}`);
})

export default server;