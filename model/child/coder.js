'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoderSchema = new Schema({
  name: String,
  class: String,
  studentId: String,
  email: String,
  grade: String,
  gender: String,
  qq: String,
  preferenceGroup: String,
  phone: String,
  devExperience: {
    software: String,
    mobile: Boolean,
    web: Boolean,
    acm: Boolean,
  },
  skill: String,
  selfIntro: String,
});

module.exports = mongoose.model('Coder', CoderSchema);
