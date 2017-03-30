'use strict';

const supertest = require('supertest');
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();

describe('Config Files', () => {
    const fs = require('fs');
    const path = require('path');
    const http = require('http');
    const mongoose = require('mongoose');

    const initConfigPath = path.resolve(__dirname, '../init/config.js');
    const initMongoosePath = path.resolve(__dirname, '../init/mongoose.js');

    it('should exsist and should be accessible', () => {
        fs.accessSync(initConfigPath);
        fs.accessSync(initMongoosePath);
    });

    it('should be valid', (done) => {
        const config = require(initConfigPath).init();

        // 测试 port 和 host 是否合法
        config.should.have.property('system');
        http.createServer().listen(config.system.port, config.system.host, function (err) {
            if (err) return done(err);
            this.close();

            // 测试 mongo 配置是否合法
            config.should.have.property('mongo');
            config.mongo.db.should.not.be.empty;
            global.config = config;
            require(initMongoosePath).init().should.be.fulfilled.and.notify(done);
        });
    });

    after((done) => {
        delete global.config;
        mongoose.connection.close(done);
    });
});

describe('Services', () => {
    // 因为上面那个单元会占用 mongo 的连接，而测试又是异步的
    // 如果不加 before 的话，异步导入 app 的时候 mongo 会拒绝连接
    let request;
    before(() => {
        const app = require('..');
        request = supertest(app.listen());
    });

    describe('static resources', () => {
        it('should respond with code 200 if the file exsists', (done) => {
            request
                .get('/member')
                .expect(200, done);
        });

        it('should serve a 404 page if the file does not exsist', (done) => {
            request
                .get('/nononoplsbakabakabaaaaka')
                .expect(404)
                .end((err, res) => {
                    if (err) return done(err);
                    res.headers['content-type'].should.match(/text\/html;/i);
                    done();
                });
        });

        it('should render correctly', (done) => {
            request
                .get('/')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.text.should.not.be.empty;
                    res.text.should.not.match(/<head>[\s]+<\/head>/i);
                    res.text.should.not.match(/<body>[\s]+<\/body>/i);
                    done();
                });
        });

        it('should serve a favicon', (done) => {
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
        const { Pmer } = require('../model');

        let randomID = Math.ceil((Math.random() * 8999999999999999 + 1000000000000000)).toString();

        it('should respond with code 200 if the request is valid', (done) => {
            request
                .post('/api/submit-pmer')
                .send({
                    "name": "萌萌的测试员",
                    "class": "计科1502",
                    "id": randomID,
                    "email": "sayaka@ekyu.moe",
                    "grade": "大三",
                    "gender": "女",
                    "phone": "15675884010",
                    "skill": "我会单元测试！",
                    "introduce": "然而只会单元测试qwq"
                })
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    JSON.parse(res.text).code.should.be.equal(0);
                    done();
                });
        });

        it('should respond with code 400 if the same record already exsists', (done) => {
            request
                .post('/api/submit-pmer')
                .send({
                    "name": "萌萌的测试员",
                    "class": "计科1502",
                    "id": randomID,
                    "email": "sayaka@ekyu.moe",
                    "grade": "大三",
                    "gender": "女",
                    "phone": "15675884010",
                    "skill": "我会单元测试！",
                    "introduce": "然而只会单元测试qwq"
                })
                .expect(400)
                .end((err, res) => {
                    if (err) return done(err);
                    JSON.parse(res.text).code.should.be.equal(2);
                    done();
                });
        });

        after((done) => {
            Pmer.findOneAndRemove(randomID, done);
        });
    });
});
