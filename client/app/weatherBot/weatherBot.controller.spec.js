'use strict';

describe('Controller: WeatherBotCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var WeatherBotCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeatherBotCtrl = $controller('WeatherBotCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
