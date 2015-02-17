'use strict';

angular.module('yeoMeanApp')
  .controller('MoviesCtrl', function ($rootScope, $scope, $http, $log) {
    $rootScope.metaTitle = "Movies | Brian Mitchell";
    $rootScope.metaDescription = "A movie ratings page";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    $scope.movieList = [];
    $scope.displayList = [];
    $scope.totalItems = 0;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    getMovies();

    $scope.pageChanged = function() {
      var index = ($scope.currentPage - 1) * $scope.itemsPerPage;
      var numOnPage = $scope.itemsPerPage;
      if ($scope.totalItems - index < $scope.itemsPerPage) {
          numOnPage = $scope.totalItems - index;
      }
      $scope.displayList = [];
      for (var i = 0; i < numOnPage; i++) {
          $scope.displayList[i] = $scope.movieList[index + i];
      }
      //Show a full table on the last page if it's not full
      //if (numOnPage != $scope.itemsPerPage) {
      //    for (var i = numOnPage; i < $scope.itemsPerPage; i++) {
      //      $scope.displayList[i] = {};
      //    }
      //}
      //$log.log('Page changed to: ' + $scope.currentPage);
    };

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
        $scope.totalItems = $scope.movieList.length;
        $scope.pageChanged();
      });
    }
  });
