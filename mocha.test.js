let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./app.js').app;
let should = chai.should();

chai.use(chaiHttp);

describe('/POST book', () => {
      it('it should not POST a book without pages field', (done) => {
        let hello = {
            name:'sandesh'
        }
        chai.request(server)
            .post('/hello')
            .send(hello)
            .end((err, res) => {
                res.should.have.status(200);
                
              done();
            });
      });

  });
