'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VerbSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Verb', VerbSchema);