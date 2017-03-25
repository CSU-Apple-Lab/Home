'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PmerSchema = new Schema({
    name: String,
    class: String,
    studentId: String,
    email: String,
    grade: String,
    gender: String,
    qq: String,
    phone: String,
    skill: String,
    selfIntro: String
});

module.exports = mongoose.model('Pmer', PmerSchema);
