'use strict';

angular.module('yeoMeanApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': ' Home',
      'link': '/'
    },
    {'title': 'About',
      'link': '/about',},
    {'title': 'Contact',
      'link': '/contact',},
    {'title': 'Blog Posts',
      'link': '/posts',},
    {'title': 'Movies',
      'link': '/movies',},
    {'title': 'Words',
      'link': '/words',},
    {'title': 'Weather Bot',
      'link': '/weatherBot',},
  {'title': 'Hey, Get Back To Work',
      'link': 'http://heygetbackto.work'}];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
