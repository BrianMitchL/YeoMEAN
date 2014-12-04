'use strict';

angular.module('yeoMeanApp')
  .controller('MainCtrl', function ($rootScope, $scope, Posts) {
    $rootScope.metaTitle = "Home | Brian Mitchell";
    $rootScope.metaDescription = "brianm.me homepage";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    Posts.getPosts(function(data){
      $scope.posts = data;
    });
  });
