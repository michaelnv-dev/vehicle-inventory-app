const expect = require('expect');
const request = require('supertest');
const server = require('../server');



let port = process.env.PORT || 8081;
let hostName = process.env.SERVER_IP || '0.0.0.0';
let vehicle = {
    name: "AUDI",
    type: "Hybrid",
    last_successful_connection: 1555417999
    };


describe('POST /vehicles/', () => {
    it('Save new vehicle', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).post('/vehicles/')
        .send(vehicle)
        .expect(200)
        .expect((res) => {
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
    it('Should retrieve an all vehicles documents', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).get('/vehicles')
        .send()
        .expect(200)
        .expect((res) => {
        }).end((err, res) => {
            if(err) {
                return done(err);
            }
            done();
        });
    });
});


describe('GET /vehicles/:id', () => {
    it('Get vehicle  by id', (done) => {
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
    it('Update vehicles', (done) => {
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
    it('expect for delete text response', (done) => {
        let url = `http://${hostName}:${port}`;
        request(url).delete('/vehicles/' + vehicle._id)
        .send()
        .expect(200)
        .expect((res) => {
            expect(res.text).toEqual("Vehicle: "+ vehicle.name +" was deleted.");
        }).end((err, res) => {
            if(err) {
                return done(err);
            }
            done();
        });
    });
});
