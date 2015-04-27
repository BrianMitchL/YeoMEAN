'use strict';

angular.module('yeoMeanApp')
  .controller('MoviesCtrl', function ($rootScope, $scope, $http, $filter, ngTableParams) {
    $rootScope.metaTitle = "Movies | Brian Mitchell";
    $rootScope.metaDescription = "A movie ratings page";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    var data = [];
    $scope.movie = {};
    $scope.submitted = false;

    $http.get('/api/movies').success(function(movieList) {
      data = movieList;
      $scope.movieParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
          name: 'asc'     // initial sorting (ascending)
        }
      }, {
        total: data.length, // length of data
        getData: function($defer, params) {
          // use build-in angular filter
          var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data; //ordered array of objects based on filter

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });
    }).error(function(data, status) {
      console.log(status + ': ' + data);
    });

    $scope.addMovie = function(isValid) {
      if (isValid) {
        $http.post('/api/movies', $scope.movie).success(function () {
          $scope.reset();
          $scope.submitted = true;
          getMovies();
        }).error(function(data, status) {
          console.log(status + ': ' + data);
        });
      }
    };

    $scope.deleteMovie = function(movie) {
      $http.delete('/api/movies/' + movie._id).success(function(){
        getMovies();
      }).error(function(data, status) {
        console.log(status + ': ' + data);
      });
    };

    $scope.updateMovie = function(movie) {
      $http.put('/api/movies/' + movie._id, movie).success(function(){
        getMovies();
      }).error(function(data, status) {
        console.log(status + ': ' + data);
      });
    };

    function getMovies() {
      $http.get('/api/movies').success(function(movieList) {
        data = movieList;
        $scope.movieParams.reload();
      }).error(function(data, status) {
        console.log(status + ': ' + data);
      });
    }

    $scope.reloadMovies = function() {
      getMovies();
    };

    $scope.reset = function() {
      $scope.movie = {};
      $scope.newMovieForm.$setPristine();
    };
  });
