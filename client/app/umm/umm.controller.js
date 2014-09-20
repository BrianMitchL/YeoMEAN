'use strict';

angular.module('yeoMeanApp')
  .controller('UmmCtrl', function ($scope, $http) {
    $scope.movieList = [];

    $http.get('/api/movies').success(function(movieList) {
        $scope.movieList = movieList;
    });

    $scope.addMovie = function() {
        if($scope.newMovie === '') {
            return;
        }
        $http.post('/api/movies', { name: $scope.newMovie, rating: $scope.newRating });
        $scope.newMovie = '';
        $scope.newRating = '';
    };

    $scope.deleteMovie = function(movie) {
        $http.delete('/api/movies/' + movie._id);
    };
  });
