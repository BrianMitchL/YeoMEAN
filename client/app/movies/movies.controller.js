'use strict';

angular.module('yeoMeanApp')
  .controller('MoviesCtrl', function ($rootScope, $scope, $http, Pagination) {
    $rootScope.metaTitle = "Movies | Brian Mitchell";
    $rootScope.metaDescription = "A movie ratings page";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    $scope.title = "Movies";
    $scope.movieList = [];
    $scope.pagination = Pagination.getNew(10);

    getMovies();

    $scope.addMovie = function() {
        if($scope.newMovie === ''  || $scope.newRating === '') {
            return;
        }
        $http.post('/api/movies', { name: $scope.newMovie, rating: $scope.newRating }).success(function(){
            getMovies();
            $scope.newMovie = '';
            $scope.newRating = '';
        });
    };

    $scope.deleteMovie = function(movie) {
        $http.delete('/api/movies/' + movie._id).success(function(){
            getMovies();
        });
    };

    $scope.updateMovie = function(movie) {
        $scope.isEditing = false;
        $http.put('/api/movies/' + movie._id, movie).success(function(){
            getMovies();
        });
    };

    $scope.editMovie = function(movie) {
        movie.isEditing = true;
    };

    function getMovies() {
      $http.get('/api/movies').success(function(movieList) {
        $scope.movieList = movieList;
        $scope.pagination.numPages = Math.ceil($scope.movieList.length/$scope.pagination.perPage);
      });
    }
  });
