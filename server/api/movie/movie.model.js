'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Movie', MovieSchema);