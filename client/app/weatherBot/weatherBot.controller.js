'use strict';

angular.module('yeoMeanApp')
  .controller('WeatherBotCtrl', function ($rootScope, $scope) {
    $rootScope.metaTitle = "Weather Bot | Brian Mitchell";
    $rootScope.metaDescription = "A Python based Twitter bot";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
  });
