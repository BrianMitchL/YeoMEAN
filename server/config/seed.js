/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Movie = require('../api/movie/movie.model');

Movie.find({}).remove(function() {
    Movie.create({
        name : 'Tron: Legacy',
        rating : 10
    }, {
        name : 'Batman',
        rating : 7
    }, {
        name : 'The Lego Movie',
        rating : 10
    }, {
        name : 'Elmo in Grouchland',
        rating : 2
    }, {
      name : 'Snakes on a Plane',
      rating : 6
    }, {
      name : 'Flight Plan',
      rating : 8
    }, {
      name : 'Doctor Who',
      rating : 2
    }, {
      name : 'Angular Tutorials',
      rating : 10
    }, {
      name : 'A Sweet Movie',
      rating : 7
    }, {
      name : 'Wubwub',
      rating : 9
    }, {
      name : 'Distractions',
      rating : 1
    }, {
      name : 'Words',
      rating : 5
    }, {
      name : 'Peanuts: A Documentary',
      rating : 8
    }, {
      name : 'How to Computer',
      rating : 2
    });
});
