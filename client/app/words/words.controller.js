'use strict';

angular.module('yeoMeanApp')
  .controller('WordsCtrl', function ($scope, $http) {
        $scope.words = [];
        $scope.adjectives = [];
        $scope.verbs = [];
        $scope.nouns = [];

        //Update words to have the same data that's in the database on the sever
        $http.get('/api/words').success(function(words) {
            $scope.words = words;
            $scope.makeSentence();
        });

        $scope.makeSentence = function() {
            angular.forEach($scope.words, function(word) {
                if (word.type == "verb") {
                    $scope.verbs.push(word);
                } else if (word.type == "adjective") {
                    $scope.adjectives.push(word);
                } else if (word.type == "noun") {
                    $scope.nouns.push(word);
                }
            });
            $scope.verbIndex = getRandomInt(0, $scope.verbs.length);
            $scope.adjectiveIndex = getRandomInt(0, $scope.adjectives.length);
            $scope.nounIndex = getRandomInt(0, $scope.nouns.length);
            $scope.verb = $scope.verbs[$scope.verbIndex].name;
            $scope.adj = $scope.adjectives[$scope.adjectiveIndex].name;
            $scope.noun = $scope.nouns[$scope.nounIndex].name;
        };

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

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
