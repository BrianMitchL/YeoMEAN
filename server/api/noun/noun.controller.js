'use strict';

var _ = require('lodash');
var Noun = require('./noun.model');

// Get list of nouns
exports.index = function(req, res) {
  Noun.find(function (err, nouns) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(nouns);
  });
};

// Get a single noun
exports.show = function(req, res) {
  Noun.findById(req.params.id, function (err, noun) {
    if(err) { return handleError(res, err); }
    if(!noun) { return res.status(404).send('Not Found'); }
    return res.json(noun);
  });
};

// Creates a new noun in the DB.
exports.create = function(req, res) {
  Noun.create(req.body, function(err, noun) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(noun);
  });
};

// Updates an existing noun in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Noun.findById(req.params.id, function (err, noun) {
    if (err) { return handleError(res, err); }
    if(!noun) { return res.status(404).send('Not Found'); }
    var updated = _.merge(noun, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(noun);
    });
  });
};

// Deletes a noun from the DB.
exports.destroy = function(req, res) {
  Noun.findById(req.params.id, function (err, noun) {
    if(err) { return handleError(res, err); }
    if(!noun) { return res.status(404).send('Not Found'); }
    noun.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
