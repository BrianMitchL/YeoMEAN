'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdjectiveSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Adjective', AdjectiveSchema);