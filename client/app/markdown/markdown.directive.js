'use strict';

angular.module('yeoMeanApp')
    .directive('markdown', function ($http, $timeout) {
        var converter = new Showdown.converter();
        return {
            restrict: 'A',
            scope: { link: '@' },
            link: function (scope, element, attrs) {
                $timeout(function() {
                    attrs.$observe('link', function (link) {
                        $http.get('/assets/posts/files/' + link).success(function (response) {
                            var htmlText = converter.makeHtml(response);
                            element.html(htmlText);
                        });
                    });
                });
            }
        };
    });
