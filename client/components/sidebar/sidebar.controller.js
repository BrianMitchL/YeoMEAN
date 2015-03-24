'use strict';

angular.module('yeoMeanApp')
  .controller('SidebarCtrl', function ($scope) {
    $scope.menu = [{
      'title': ' Home',
      'link': '/'
    },
    {'title': 'About',
      'link': '/about'},
    {'title': 'Contact',
      'link': '/contact'},
    {'title': 'Blog Posts',
      'link': '/posts'},
    {'title': 'Movies',
    'link': '/movies'},
    {'title': 'Words',
     'link': '/words'}];
  });
