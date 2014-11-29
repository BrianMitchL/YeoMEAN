'use strict';

angular.module('yeoMeanApp')
  .controller('MainCtrl', function ($rootScope, $scope, Posts) {
    $rootScope.header = "Brian Mitchell | Home";
    Posts.getPosts(function(data){
      $scope.posts = data;
    });
  });
