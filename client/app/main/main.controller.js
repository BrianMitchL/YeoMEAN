'use strict';

angular.module('yeoMeanApp')
  .controller('MainCtrl', function ($scope, Posts) {
    Posts.getPosts(function(data){
      $scope.posts = data;
    });
  });
