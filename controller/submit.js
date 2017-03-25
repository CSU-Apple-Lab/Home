'use strict';

const Mongo = require('../model');

exports.designer = async (ctx) => {
    try {
        const form = ctx.request.body;
        const newDesigner = {
            name: 'PENDING',
            class: 'PENDING',
            studentId: 'PENDING',
            email: 'PENDING',
            grade: 'PENDING',
            gender: 'PENDING',
            qq: 'PENDING',
            phone: 'PENDING',
            dsgnExperience: {
                general: 'PENDING',
                ui: 'PENDING',
                haveWorks: 'PENDING',
                knowSpec: 'PENDING',
            },
            skill: 'PENDING',
            selfIntro: 'PENDING'
        };
        await Mongo.Designer.create(newDesigner);
        ctx.body = {
            code: 200,
            message: 'Success'
        }
    } catch (err) {
        ctx.body = {
            code: 1,
            message: 'Error: ' + err.message
        }
    }
};

exports.coder = async (ctx) => {
    try {
        const form = ctx.request.body;
        const newCoder = {
            name: 'PENDING',
            class: 'PENDING',
            studentId: 'PENDING',
            email: 'PENDING',
            grade: 'PENDING',
            gender: 'PENDING',
            qq: 'PENDING',
            preferenceGroup: 'PENDING',
            phone: 'PENDING',
            devExperience: {
                software: 'PENDING',
                mobile: 'PENDING',
                web: 'PENDING',
                acm: 'PENDING',
            },
            skill: 'PENDING',
            selfIntro: 'PENDING'
        };
        await Mongo.Coder.create(newCoder);
        ctx.body = {
            code: 200,
            message: 'Success'
        }
    } catch (err) {
        ctx.body = {
            code: 1,
            message: 'Error: ' + err.message
        }
    }
};

exports.pmer = async (ctx) => {
    try {
        const form = ctx.request.body;
        const newPmer = {
            name: 'PENDING',
            class: 'PENDING',
            studentId: 'PENDING',
            email: 'PENDING',
            grade: 'PENDING',
            gender: 'PENDING',
            qq: 'PENDING',
            phone: 'PENDING',
            skill: 'PENDING',
            selfIntro: 'PENDING'
        };
        await Mongo.Pmer.create(newPmer);
        ctx.body = {
            code: 200,
            message: 'Success'
        }
    } catch (err) {
        ctx.body = {
            code: 1,
            message: 'Error: ' + err.message
        }
    }
};
