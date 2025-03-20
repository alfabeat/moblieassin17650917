import * as loginController from "../Controllers/UnitsControllers.js"
//import app from "../app.js"
import Bcr from 'bcryptjs';
import ass from 'assert';
import {use, expect, should} from "chai";

//const execute = chai.execute;
import  chaiHttp from 'chai-http';
import { assert } from "console";
const chai = use(chaiHttp);
/*
* We use BCrypt compare to check that this hash matches the generated one
*/
describe('Api connect', () =>{


    it('Api is connecting', (done)=>{
        chai.request.execute('localhost:3000')
        .get('/api/status')
        .end((err, res)=>{
            expect(res.status).to.be.equal(200);
            
        });
        done();
    })
})
describe('Login API', () => {
    it('should login successfully with valid credentials', (don) => {
        chai.request.execute('localhost:3000')
            .post('/api/login')
            .send({ username: 'test', password: 'test' })
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                //expect(res.body).to.have.property('accessToken');
                
            });
            don();
    })
});
 //  "test": "set NODE_ENV=test&& mocha --exit"