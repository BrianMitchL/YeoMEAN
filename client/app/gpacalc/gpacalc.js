'use strict';

angular.module('yeoMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gpacalc', {
        templateUrl: 'app/gpacalc/gpacalc.html',
        controller: 'GpacalcCtrl'
      });
  });
