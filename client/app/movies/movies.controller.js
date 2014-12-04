'use strict';

angular.module('yeoMeanApp')
  .controller('MoviesCtrl', function ($rootScope, $scope, $http) {
    $rootScope.metaTitle = "Movies | Brian Mitchell";
    $rootScope.metaDescription = "A movie ratings page";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    $scope.movieList = [];

    //Update movieList to have the same data that's in the database on the sever
    $http.get('/api/movies').success(function(movieList) {
        $scope.movieList = movieList;
    });

    $scope.addMovie = function() {
        if($scope.newMovie === ''  || $scope.newRating === '') {
            return;
        }
        $http.post('/api/movies', { name: $scope.newMovie, rating: $scope.newRating }).success(function(){
            //Update movieList to have the same data that's in the database on the sever
            $http.get('/api/movies').success(function(movieList) {
                $scope.movieList = movieList;
            });
            $scope.newMovie = '';
            $scope.newRating = '';
        });
    };

    $scope.deleteMovie = function(movie) {
        $http.delete('/api/movies/' + movie._id).success(function(){
            //Update movieList to have the same data that's in the database on the sever
            $http.get('/api/movies').success(function(movieList) {
                $scope.movieList = movieList;
            });
        });
    };

    $scope.updateMovie = function(movie) {
        $scope.isEditing = false;
        $http.put('/api/movies/' + movie._id, movie).success(function(){
            //Update movieList to have the same data that's in the database on the sever
            $http.get('/api/movies').success(function(movieList) {
                $scope.movieList = movieList;
            });
        });
    };

    $scope.editMovie = function(movie) {
        movie.isEditing = true;
    };
  });
