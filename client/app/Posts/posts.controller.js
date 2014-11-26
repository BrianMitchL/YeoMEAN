'use strict';

angular.module('yeoMeanApp')
  .controller('PostsCtrl', function ($scope, Posts) {
    Posts.getPosts(function(data){
      $scope.posts = data;
    });
  });
