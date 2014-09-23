'use strict';

describe('Controller: GpacalcCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var GpacalcCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GpacalcCtrl = $controller('GpacalcCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
