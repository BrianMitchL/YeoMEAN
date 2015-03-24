'use strict';

angular.module('yeoMeanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'mvd.comments',
  'simplePagination'
])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('blue');
  });
