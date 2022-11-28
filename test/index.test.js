import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';
chai.use(chaiHttp);

describe('Index router test', () => {
    it('should successfully make a request to /', async () => {
        const res = await chai.request(server).get('/').send();

        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include("Welcome to Rock Paper Scissors Game!")
        expect(res.text).to.include("Player")
        expect(res.text).to.include("Play!")
    })
})