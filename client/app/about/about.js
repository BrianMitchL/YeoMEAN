'use strict';

angular.module('yeoMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  });
