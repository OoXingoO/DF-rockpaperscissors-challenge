import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';
chai.use(chaiHttp);

describe('Result router test', () => {
    it('should successfully make a POST request', async () => {
        const res = await chai.request(server).post('/result').send();

        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include("Result");
    })
})