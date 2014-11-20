'use strict';

angular.module('yeoMeanApp')
  .controller('WordsCtrl', function ($scope, $http) {
        $scope.verbs = [];
        $scope.adjectives = [];
        $scope.nouns = [];
        $scope.isCollapsed = true;

        //Update words to have the same data that's in the database on the sever
        $http.get('/api/verbs').success(function(verbs) {
            $scope.verbs = verbs;
        });
        $http.get('/api/adjectives').success(function(adjectives) {
            $scope.adjectives = adjectives;
        });
        $http.get('/api/nouns').success(function(nouns) {
            $scope.nouns = nouns;
        });

        $scope.makeSentence = function() {
            $scope.verb = $scope.verbs[getRandomInt(0, $scope.verbs.length - 1)].name;
            $scope.adjective = $scope.adjectives[getRandomInt(0, $scope.adjectives.length - 1)].name;
            $scope.noun = $scope.nouns[getRandomInt(0, $scope.nouns.length - 1)].name;
        };

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        $scope.addVerb = function() {
            if($scope.newVerb === '') {
                return;
            }
            $http.post('/api/verbs', { name: $scope.newVerb }).success(function(){
                $http.get('/api/verbs').success(function(verbs) {
                    $scope.verbs = verbs;
                });
                $scope.newVerb = '';
            });
        };

        $scope.addAdjective = function() {
            if($scope.newAdjective === '') {
                return;
            }
            $http.post('/api/adjectives', { name: $scope.newAdjective }).success(function(){
                $http.get('/api/adjectives').success(function(adjectives) {
                    $scope.adjectives = adjectives;
                });
                $scope.newAdjective = '';
            });
        };

        $scope.addNoun = function() {
            if($scope.newNoun === '') {
                return;
            }
            $http.post('/api/nouns', { name: $scope.newNoun }).success(function(){
                $http.get('/api/nouns').success(function(nouns) {
                    $scope.nouns = nouns;
                });
                $scope.newNoun = '';
            });
        };

        $scope.deleteVerb = function(verb) {
            $http.delete('/api/verbs/' + verb._id).success(function(){
                $http.get('/api/verbs').success(function(verbs) {
                    $scope.verbs = verbs;
                });
            });
        };

        $scope.deleteAdjective = function(adjective) {
            $http.delete('/api/adjectives/' + adjective._id).success(function(){
                $http.get('/api/adjectives').success(function(adjectives) {
                    $scope.adjectives = adjectives;
                });
            });
        };

        $scope.deleteNoun = function(noun) {
            $http.delete('/api/nouns/' + noun._id).success(function(){
                $http.get('/api/nouns').success(function(nouns) {
                    $scope.nouns = nouns;
                });
            });
        };
  });
