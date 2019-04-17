const expect = require('expect');
const request = require('supertest');
const server = require('../server/server')();


server.create();
server.start();


let port = process.env.PORT || 8081;
let hostName = process.env.SERVER_IP || '0.0.0.0';
let vehicle = {
    name: "AUDI",
    type: "Hybrid",
    last_successful_connection: 1555417999
    };


describe('POST /vehicles/', () => {
    it('Should save an vehicle object', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).post('/vehicles/')
        .send(vehicle)
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual(vehicle);
        }).end((err, res) => {
            if(err) {
                return done(err);
            }
            vehicle = res.body;
            done();
        });
    });
});

describe('GET /vehicles', () => {
    it('Should retrieve an all vehicle objects', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).get('/vehicles')
        .send()
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual(vehicle);
        }).end((err, res) => {
            if(err) {
                return done(err);
            }
            done();
        });
    });
});


describe('GET /vehicles/:id', () => {
    it('Should save an object with a name resource', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).get('/vehicles/' + vehicle._id)
        .send()
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual(vehicle);
        }).end((err, res) => {
            if(err) {
                return done(err);
            }
            done();
        });
    });
});



describe('PUT /vehicles/:id', () => {
    it('Should save an object with a name resource', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).put('/vehicles/' + vehicle._id)
        .send(vehicle)
        .expect(200)
        .end((err, res) => {
            if(err) {
                return done(err);
            }
            done();
        });
    });
});


describe('DELETE /vehicles/:id', () => {
    it('Should retrieve an object with a name resource', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).delete('/vehicles/' + vehicle._id)
        .send()
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual(vehicle);
        }).end((err, res) => {
            if(err) {
                return done(err);
            }
            done();
        });
    });
});
