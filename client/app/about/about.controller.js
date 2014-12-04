'use strict';

angular.module('yeoMeanApp')
  .controller('AboutCtrl', function ($rootScope, $scope) {
    $rootScope.metaTitle = "About | Brian Mitchell";
    $rootScope.metaDescription = "About Brian Mitchell";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
  });
