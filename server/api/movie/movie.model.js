'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  rating: Number,
  active: Boolean
});

module.exports = mongoose.model('Movie', MovieSchema);