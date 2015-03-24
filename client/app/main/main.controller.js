'use strict';

angular.module('yeoMeanApp')
  .controller('MainCtrl', function ($rootScope, $scope, Posts, $mdSidenav, $log) {
    $rootScope.metaTitle = "Home | Brian Mitchell";
    $rootScope.metaDescription = "brianm.me homepage";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
    $scope.title = "Home";
    Posts.getPosts(function(data){
      $scope.posts = data;
    });

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    }
  });
