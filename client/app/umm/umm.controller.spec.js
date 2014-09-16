'use strict';

describe('Controller: UmmCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var UmmCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UmmCtrl = $controller('UmmCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
