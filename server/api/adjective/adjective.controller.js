'use strict';

var _ = require('lodash');
var Adjective = require('./adjective.model');

// Get list of adjectives
exports.index = function(req, res) {
  Adjective.find(function (err, adjectives) {
    if(err) { return handleError(res, err); }
    return res.json(200, adjectives);
  });
};

// Get a single adjective
exports.show = function(req, res) {
  Adjective.findById(req.params.id, function (err, adjective) {
    if(err) { return handleError(res, err); }
    if(!adjective) { return res.send(404); }
    return res.json(adjective);
  });
};

// Creates a new adjective in the DB.
exports.create = function(req, res) {
  Adjective.create(req.body, function(err, adjective) {
    if(err) { return handleError(res, err); }
    return res.json(201, adjective);
  });
};

// Updates an existing adjective in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Adjective.findById(req.params.id, function (err, adjective) {
    if (err) { return handleError(res, err); }
    if(!adjective) { return res.send(404); }
    var updated = _.merge(adjective, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, adjective);
    });
  });
};

// Deletes a adjective from the DB.
exports.destroy = function(req, res) {
  Adjective.findById(req.params.id, function (err, adjective) {
    if(err) { return handleError(res, err); }
    if(!adjective) { return res.send(404); }
    adjective.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}