'use strict';

describe('Service: Posts', function () {

  // load the service's module
  beforeEach(module('yeoMeanApp'));

  // instantiate service
  var Posts;
  beforeEach(inject(function (_Posts_) {
    Posts = _Posts_;
  }));

  it('should do something', function () {
    expect(!!Posts).toBe(true);
  });

});
