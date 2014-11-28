'use strict';

angular.module('yeoMeanApp')
  .controller('PostCtrl', function ($scope, $routeParams, $filter, Posts) {
    Posts.getPosts(function(data){
      $scope.post = $filter('filter')(data, {slug: $routeParams.id})[0];
    });
  });
