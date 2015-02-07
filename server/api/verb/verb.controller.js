'use strict';

var _ = require('lodash');
var Verb = require('./verb.model');

// Get list of verbs
exports.index = function(req, res) {
  Verb.find(function (err, verbs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(verbs);
  });
};

// Get a single verb
exports.show = function(req, res) {
  Verb.findById(req.params.id, function (err, verb) {
    if(err) { return handleError(res, err); }
    if(!verb) { return res.status(404).send('Not Found'); }
    return res.json(verb);
  });
};

// Creates a new verb in the DB.
exports.create = function(req, res) {
  Verb.create(req.body, function(err, verb) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(verb);
  });
};

// Updates an existing verb in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Verb.findById(req.params.id, function (err, verb) {
    if (err) { return handleError(res, err); }
    if(!verb) { return res.status(404).send('Not Found'); }
    var updated = _.merge(verb, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(verb);
    });
  });
};

// Deletes a verb from the DB.
exports.destroy = function(req, res) {
  Verb.findById(req.params.id, function (err, verb) {
    if(err) { return handleError(res, err); }
    if(!verb) { return res.status(404).send('Not Found'); }
    verb.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
