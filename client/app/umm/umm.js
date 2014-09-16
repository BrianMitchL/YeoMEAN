'use strict';

angular.module('yeoMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/umm', {
        templateUrl: 'app/umm/umm.html',
        controller: 'UmmCtrl'
      });
  });
