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
    });
});