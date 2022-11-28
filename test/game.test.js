import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

chai.use(chaiHttp);

describe('Game router test', () => {

    it('/POST should successfully make a request', async () => {

        const res = await chai.request(server).post('/game').send({ name: 'mockName' });

        expect(res).to.have.status(200);
    })

    it('/GET should successfully make a request', async () => {
        const res = await chai.request(server).get('/game').send();

        expect(res).to.be.html;
        expect(res).to.have.status(200);
    })

    it('should contain choose your move! text', async () => {
        const res = await chai.request(server).get('/game').send();

        expect(res.text).to.include('choose your move!');
    })

    it('should include rock paper scissors', async () => {
        const res = await chai.request(server).get('/game').send();

        expect(res.text).to.include("rock");
        expect(res.text).to.include("paper");
        expect(res.text).to.include("scissors");
    })

})