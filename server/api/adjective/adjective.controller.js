'use strict';

var _ = require('lodash');
var Adjective = require('./adjective.model');

// Get list of adjectives
exports.index = function(req, res) {
  Adjective.find(function (err, adjectives) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(adjectives);
  });
};

// Get a single adjective
exports.show = function(req, res) {
  Adjective.findById(req.params.id, function (err, adjective) {
    if(err) { return handleError(res, err); }
    if(!adjective) { return res.status(404).send('Not Found'); }
    return res.json(adjective);
  });
};

// Creates a new adjective in the DB.
exports.create = function(req, res) {
  Adjective.create(req.body, function(err, adjective) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(adjective);
  });
};

// Updates an existing adjective in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Adjective.findById(req.params.id, function (err, adjective) {
    if (err) { return handleError(res, err); }
    if(!adjective) { return res.status(404).send('Not Found'); }
    var updated = _.merge(adjective, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(adjective);
    });
  });
};

// Deletes a adjective from the DB.
exports.destroy = function(req, res) {
  Adjective.findById(req.params.id, function (err, adjective) {
    if(err) { return handleError(res, err); }
    if(!adjective) { return res.status(404).send('Not Found'); }
    adjective.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
