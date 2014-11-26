'use strict';

angular.module('yeoMeanApp')
  .factory('Posts', function($http) {
    return{
      getPosts: function(callback){
        $http.get('/assets/posts/posts.json').success(callback);
      }
    }
  });
