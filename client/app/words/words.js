'use strict';

angular.module('yeoMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/words', {
        templateUrl: 'app/words/words.html',
        controller: 'WordsCtrl'
      });
  });
