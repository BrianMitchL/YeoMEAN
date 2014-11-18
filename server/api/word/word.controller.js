'use strict';

var _ = require('lodash');
var Word = require('./word.model');

// Get list of words
exports.index = function(req, res) {
  Word.find(function (err, words) {
    if(err) { return handleError(res, err); }
    return res.json(200, words);
  });
};

// Get a single word
exports.show = function(req, res) {
  Word.findById(req.params.id, function (err, word) {
    if(err) { return handleError(res, err); }
    if(!word) { return res.send(404); }
    return res.json(word);
  });
};

// Creates a new word in the DB.
exports.create = function(req, res) {
  Word.create(req.body, function(err, word) {
    if(err) { return handleError(res, err); }
    return res.json(201, word);
  });
};

// Updates an existing word in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Word.findById(req.params.id, function (err, word) {
    if (err) { return handleError(res, err); }
    if(!word) { return res.send(404); }
    var updated = _.merge(word, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, word);
    });
  });
};

// Deletes a word from the DB.
exports.destroy = function(req, res) {
  Word.findById(req.params.id, function (err, word) {
    if(err) { return handleError(res, err); }
    if(!word) { return res.send(404); }
    word.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}