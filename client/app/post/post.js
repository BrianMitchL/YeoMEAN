'use strict';

angular.module('yeoMeanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts/:id', {
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });
