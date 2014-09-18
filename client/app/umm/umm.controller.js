'use strict';

angular.module('yeoMeanApp')
  .controller('UmmCtrl', function ($scope, $http) {
    $scope.message = 'Hello';

    $scope.movieList = [];

    $http.get('/api/movies').success(function(movieList) {
        $scope.movieList = movieList;
    });

    $scope.addMovie = function() {
        if($scope.newMovie === '') {
            return;
        }
        $http.post('/api/movies', { name: $scope.newMovie });
        $scope.newMovie = '';
    };

    $scope.deleteMovie = function(movie) {
        $http.delete('/api/movies/' + movie._id);
    };
  });
