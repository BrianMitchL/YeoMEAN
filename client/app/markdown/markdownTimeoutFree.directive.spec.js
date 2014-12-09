'use strict';

describe('Directive: markdowntf', function () {

    // load the directive's module
    beforeEach(module('yeoMeanApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));
    //Please excuse the horrible worthless test, I'll hopefully make it do something someday
    it('should pass', inject(function ($compile) {
        element = angular.element('');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
    }));
});
