'use strict';

angular.module('yeoMeanApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {'title': 'Movies',
    'link': '/movies',},
    {'title': 'Words',
     'link': '/words',}];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });