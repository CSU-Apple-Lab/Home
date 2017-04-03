'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesignerSchema = new Schema({
  name: String,
  class: String,
  studentId: String,
  email: String,
  grade: String,
  gender: String,
  qq: String,
  phone: String,
  dsgnExperience: {
    general: String,
    ui: Boolean,
    haveWorks: Boolean,
    knowSpec: Boolean,
  },
  skill: String,
  selfIntro: String,
});

module.exports = mongoose.model('Designer', DesignerSchema);
