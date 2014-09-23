'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Course', CourseSchema);