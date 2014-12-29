'use strict';

angular.module('yeoMeanApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.year = new Date().getFullYear();
  });
