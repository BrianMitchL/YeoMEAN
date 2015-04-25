'use strict';

angular.module('yeoMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/weatherBot', {
        templateUrl: 'app/weatherBot/weatherBot.html',
        controller: 'WeatherBotCtrl'
      });
  });
