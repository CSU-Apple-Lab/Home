'use strict';

const fs = require('fs');
const path = require('path');
const supertest = require('supertest');
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();

describe('Config Files', () => {
    const mongoose = require('mongoose');

    const initConfigPath = path.resolve(__dirname, '../init/config.js');
    const initMongoosePath = path.resolve(__dirname, '../init/mongoose.js');

    it('should have config files', () => {
        fs.accessSync(initConfigPath);
        fs.accessSync(initMongoosePath);
    });

    it('should have valid config files', () => {
        const config = require(initConfigPath).init();

        config.should.have.property('system');
        config.system.host.should.not.be.empty;
        config.system.port.should.be.below(65536).and.be.above(0);

        config.should.have.property('mongo');
        global.config = config;
        return require(initMongoosePath).init().should.be.fulfilled;
    });

    after((done) => {
        delete global.config;
        mongoose.connection.close(done);
    });
});

describe('Services', () => {
    let request;
    before(() => {
        const app = require('..');
        request = supertest(app.listen());
    });

    describe('Static Resources', () => {
        it('should respond with code 200 if the file exsists', (done) => {
            request
                .get('/member.html')
                .expect(200, done);
        });

        it('should have a favicon', (done) => {
            request
                .get('/favicon.ico')
                .expect(200, done);
        });

        it('should respond with an etag header', (done) => {
            request
                .get('/')
                .expect(200)
                .expect('etag', /^.+$/, done);
        });
    });

    describe('APIs', () => {
        it('should respond with code 200 if the request is valid');
        it('should respond with code 400 if the request itself is malformed');
        it('should respond with code 400 if the same record already exsists');
    });
});
