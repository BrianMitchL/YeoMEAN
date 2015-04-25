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
        'link': '/weatherBot',}];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
