import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../app.js';

chai.use(chaiHttp);

describe('App test', () => {
    it('should make request to /', async () => {
        const res = await chai.request(server).get('/').send()

        expect(res).to.have.status(200);
    })

    it('should make request to /game', async () => {
        const res = await chai.request(server).get('/game').send()

        expect(res).to.have.status(200);
    })
})