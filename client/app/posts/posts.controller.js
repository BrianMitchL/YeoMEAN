'use strict';

angular.module('yeoMeanApp')
  .controller('PostsCtrl', function ($rootScope, $scope, Posts) {
    $rootScope.metaTitle = "Blog Posts | Brian Mitchell";
    $rootScope.metaDescription = "Blog posts written by Brian Mitchell";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    Posts.getPosts(function(data){
      $scope.posts = data;
    });
  });
