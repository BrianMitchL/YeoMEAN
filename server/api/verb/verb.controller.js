'use strict';

var _ = require('lodash');
var Verb = require('./verb.model');

// Get list of verbs
exports.index = function(req, res) {
  Verb.find(function (err, verbs) {
    if(err) { return handleError(res, err); }
    return res.json(200, verbs);
  });
};

// Get a single verb
exports.show = function(req, res) {
  Verb.findById(req.params.id, function (err, verb) {
    if(err) { return handleError(res, err); }
    if(!verb) { return res.send(404); }
    return res.json(verb);
  });
};

// Creates a new verb in the DB.
exports.create = function(req, res) {
  Verb.create(req.body, function(err, verb) {
    if(err) { return handleError(res, err); }
    return res.json(201, verb);
  });
};

// Updates an existing verb in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Verb.findById(req.params.id, function (err, verb) {
    if (err) { return handleError(res, err); }
    if(!verb) { return res.send(404); }
    var updated = _.merge(verb, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, verb);
    });
  });
};

// Deletes a verb from the DB.
exports.destroy = function(req, res) {
  Verb.findById(req.params.id, function (err, verb) {
    if(err) { return handleError(res, err); }
    if(!verb) { return res.send(404); }
    verb.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}