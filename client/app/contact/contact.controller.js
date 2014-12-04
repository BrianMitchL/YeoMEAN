'use strict';

angular.module('yeoMeanApp')
  .controller('ContactCtrl', function ($rootScope, $scope) {
    $rootScope.metaTitle = "Contact | Brian Mitchell";
    $rootScope.metaDescription = "Where to find Brian Mitchell";
    $rootScope.metaType = "website";
    $rootScope.metaImage = "/assets/images/BM-Logo-Large.png";
  });
