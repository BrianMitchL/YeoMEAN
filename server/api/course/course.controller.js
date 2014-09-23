'use strict';

var _ = require('lodash');
var Course = require('./course.model');

// Get list of courses
exports.index = function(req, res) {
  Course.find(function (err, courses) {
    if(err) { return handleError(res, err); }
    return res.json(200, courses);
  });
};

// Get a single course
exports.show = function(req, res) {
  Course.findById(req.params.id, function (err, course) {
    if(err) { return handleError(res, err); }
    if(!course) { return res.send(404); }
    return res.json(course);
  });
};

// Creates a new course in the DB.
exports.create = function(req, res) {
  Course.create(req.body, function(err, course) {
    if(err) { return handleError(res, err); }
    return res.json(201, course);
  });
};

// Updates an existing course in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Course.findById(req.params.id, function (err, course) {
    if (err) { return handleError(res, err); }
    if(!course) { return res.send(404); }
    var updated = _.merge(course, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, course);
    });
  });
};

// Deletes a course from the DB.
exports.destroy = function(req, res) {
  Course.findById(req.params.id, function (err, course) {
    if(err) { return handleError(res, err); }
    if(!course) { return res.send(404); }
    course.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}