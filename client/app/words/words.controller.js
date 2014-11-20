'use strict';

angular.module('yeoMeanApp')
  .controller('WordsCtrl', function ($scope, $http) {
        $scope.words = [];

        //Update words to have the same data that's in the database on the sever
        $http.get('/api/words').success(function(words) {
            $scope.verbs = words;
        });

        $scope.makeSentence = function() {
            $scope.verb = "chuck";
            $scope.adj = "whiney";
            $scope.noun = "duck";
        };

        $scope.getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        $scope.addVerb = function() {
            if($scope.newVerb === '') {
                return;
            }
            $http.post('/api/words', { name: $scope.newVerb, type: "verb" }).success(function(){
                $http.get('/api/words').success(function(words) {
                    $scope.words = words;
                });
                $scope.newVerb = '';
            });
        };

        $scope.addAdjective = function() {
            if($scope.newAdjective === '') {
                return;
            }
            $http.post('/api/words', { name: $scope.newAdjective, type: "adjective" }).success(function(){
                $http.get('/api/words').success(function(words) {
                    $scope.words = words;
                });
                $scope.newAdjective = '';
            });
        };

        $scope.addNoun = function() {
            if($scope.newNoun === '') {
                return;
            }
            $http.post('/api/words', { name: $scope.newNoun, type: "noun" }).success(function(){
                $http.get('/api/words').success(function(words) {
                    $scope.words = words;
                });
                $scope.newNoun = '';
            });
        };

        $scope.deleteWord = function(word) {
            $http.delete('/api/words/' + word._id).success(function(){
                $http.get('/api/words').success(function(words) {
                    $scope.words = words;
                });
            });
        };
  });
