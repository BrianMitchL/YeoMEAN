'use strict';

angular.module('yeoMeanApp')
  .controller('PostCtrl', function ($rootScope, $scope, $routeParams, $filter, Posts) {
    Posts.getPosts(function(data){
      $scope.post = $filter('filter')(data, {slug: $routeParams.id})[0];
        if(($filter('filter')(data, {slug: $routeParams.id})[0]) == undefined) {
            $scope.post = {"title":"404", "date":"This page does not exist, please check your URL and try again"};
            $scope.error = true;
        }
      $rootScope.metaTitle = $scope.post.title + " | Brian Mitchell";
      $rootScope.metaDescription = $scope.post.description;
      $rootScope.metaType = "article";
      $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    });
  });
