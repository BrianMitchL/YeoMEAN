'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NounSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Noun', NounSchema);