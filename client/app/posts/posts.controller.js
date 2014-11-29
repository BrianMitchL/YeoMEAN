'use strict';

angular.module('yeoMeanApp')
  .controller('PostsCtrl', function ($rootScope, $scope, Posts) {
    $rootScope.header = "Brian Mitchell | Blog Posts";
    Posts.getPosts(function(data){
      $scope.posts = data;
    });
  });
