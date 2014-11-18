'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WordSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Word', WordSchema);