'use strict';

const { Designer, Coder, Pmer } = require('../model');

exports.designer = async (ctx) => {
  try {
    const form = ctx.request.body;
    const findOnePromise = Designer.findOne({ studentId: form.id }).exec();

    const newDesigner = {
      name: form.name,
      class: form.class,
      studentId: form.id,
      email: form.email,
      grade: form.grade,
      gender: form.gender,
      qq: 'PENDING',
      phone: form.phone,
      dsgnExperience: {
        general: form.designExp,
        ui: form.uiExp,
        haveWorks: form.zcoolExp,
        knowSpec: form.mdExp,
      },
      skill: form.skill,
      selfIntro: form.introduce,
    };

        // 已存在相同学号的记录
    if (await findOnePromise) {
      const err = {
        code: 2,
        message: 'A record with the same student ID already exists',
      };
      throw err;
    }
    await Designer.create(newDesigner);
    ctx.body = {
      code: 0,
      message: 'Success',
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      code: err.code || 1,
      message: 'Error: ' + err.message,
    };
  }
};

exports.coder = async (ctx) => {
  try {
    const form = ctx.request.body;
    const findOnePromise = Coder.findOne({ studentId: form.id }).exec();

    const newCoder = {
      name: form.name,
      class: form.class,
      studentId: form.id,
      email: form.email,
      grade: form.grade,
      gender: form.gender,
      qq: 'PENDING',
      preferenceGroup: form.part,
      phone: form.phone,
      devExperience: {
        software: form.softwareExp,
        mobile: form.mobileExp,
        web: form.webExp,
        acm: form.otherExp,
      },
      skill: form.skill,
      selfIntro: form.introduce,
    };

    if (await findOnePromise) {
      const err = {
        code: 2,
        message: 'A record with the same student ID already exists',
      };
      throw err;
    }
    await Coder.create(newCoder);
    ctx.body = {
      code: 0,
      message: 'Success',
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      code: err.code || 1,
      message: 'Error: ' + err.message,
    };
  }
};

exports.pmer = async (ctx) => {
  try {
    const form = ctx.request.body;
    const findOnePromise = Pmer.findOne({ studentId: form.id }).exec();

    const newPmer = {
      name: form.name,
      class: form.class,
      studentId: form.id,
      email: form.email,
      grade: form.grade,
      gender: form.gender,
      qq: 'PENDING',
      phone: form.phone,
      skill: form.skill,
      selfIntro: form.introduce,
    };

    if (await findOnePromise) {
      const err = {
        code: 2,
        message: 'A record with the same student ID already exists',
      };
      throw err;
    }
    await Pmer.create(newPmer);
    ctx.body = {
      code: 0,
      message: 'Success',
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      code: err.code || 1,
      message: 'Error: ' + err.message,
    };
  }
};
