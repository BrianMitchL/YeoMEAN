'use strict';

angular.module('yeoMeanApp')
  .controller('WordsCtrl', function ($rootScope, $scope, $http, $timeout) {
        $rootScope.header = "Brian Mitchell | Words";
        $scope.verbs = [];
        $scope.adjectives = [];
        $scope.nouns = [];
        $scope.isCollapsed = true;
        $scope.sentence = "Click a button to generate a sentence.";

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

        $scope.$watch('isCollapsed', function(){
            $scope.toggleText = $scope.isCollapsed ? 'Show List of Words' : 'Hide List of Words';
        });

        $scope.makeInsult = function() {
            if($scope.verbs.length == 0 || $scope.adjectives.length == 0 || $scope.nouns.length == 0) {
              $scope.sentence = "Please add at least one word for each type.";
            } else {
              var verb = $scope.verbs[getRandomInt(0, $scope.verbs.length - 1)].name;
              var adjective = $scope.adjectives[getRandomInt(0, $scope.adjectives.length - 1)].name;
              var noun = $scope.nouns[getRandomInt(0, $scope.nouns.length - 1)].name;
              $scope.sentence = "You " + verb + " like " + AvsAnSimple.query(adjective) + " " + adjective + " " + noun + ".";
            }
        };

        $scope.makeGadget = function() {
          if($scope.nouns.length == 0) {
            $scope.sentence = "Please add at least one noun for.";
          } else {
            var noun = $scope.nouns[getRandomInt(0, $scope.nouns.length - 1)].name;
            $scope.sentence = "Go go gadget " + noun + "!";
          }
        };

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        $scope.addVerb = function() {
            if($scope.newVerb === '') {
                return;
            }
            $http.post('/api/verbs', { name: $scope.newVerb.toLowerCase() }).success(function(){
                $http.get('/api/verbs').success(function(verbs) {
                    $scope.verbs = verbs;
                });
                $scope.verbSuccess = true;
                $timeout(function() {
                  $scope.verbSuccess = false;
                }, 1500);
                $scope.newVerb = '';
            }).
              error(function(){
                  $scope.verbFailure = true;
                  $timeout(function() {
                    $scope.verbFailure = false;
                  }, 1500);
              });
        };

        $scope.addAdjective = function() {
            if($scope.newAdjective === '') {
                return;
            }
            $http.post('/api/adjectives', { name: $scope.newAdjective.toLowerCase() }).success(function(){
                $http.get('/api/adjectives').success(function(adjectives) {
                    $scope.adjectives = adjectives;
                });
                $scope.adjectiveSuccess = true;
                $timeout(function() {
                  $scope.adjectiveSuccess = false;
                }, 1500);
                $scope.newAdjective = '';
            }).
              error(function(){
                  $scope.adjectiveFailure = true;
                  $timeout(function() {
                    $scope.adjectiveFailure = false;
                  }, 1500);
              });
        };

        $scope.addNoun = function() {
            if($scope.newNoun === '') {
                return;
            }
            $http.post('/api/nouns', { name: inflection.singularize($scope.newNoun) }).success(function(){
                $http.get('/api/nouns').success(function(nouns) {
                    $scope.nouns = nouns;
                });
                $scope.nounSuccess = true;
                $timeout(function() {
                  $scope.nounSuccess = false;
                }, 1500);
                $scope.newNoun = '';
            }).
              error(function(){
                  $scope.nounFailure = true;
                  $timeout(function() {
                    $scope.nounFailure = false;
                  }, 1500);
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
