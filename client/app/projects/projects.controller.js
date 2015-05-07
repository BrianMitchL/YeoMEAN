'use strict';

angular.module('yeoMeanApp')
  .controller('ProjectsCtrl', function ($rootScope, $scope) {
    $rootScope.metaTitle = "Projects | Brian Mitchell";
    $rootScope.metaDescription = "Brian Mitchell's Projects";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
  });
