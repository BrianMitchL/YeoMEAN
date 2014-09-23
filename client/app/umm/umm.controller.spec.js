'use strict';

describe('Controller: UmmCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var UmmCtrl, scope, httpBackend, movieList;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    UmmCtrl = $controller('UmmCtrl', {
      $scope: scope
    });
    movieList = [];
    httpBackend.when('POST', '/api/movies').respond(function(method, url, data, headers) {
        movieList.push(JSON.parse(data));
        return [200, {}, {}];
    });
    httpBackend.when('GET', '/api/movies').respond(movieList);
      //The 1 is for identifying the _id on the movie in the "database"
    httpBackend.when('DELETE', '/api/movies/1').respond(function() {
        movieList.splice(movieList.indexOf({name:"Batman", rating:9}),1);
        return [200, {}, {}];
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });

  describe('testing add and delete from the database', function() {
      it('should add a new movie "Batman" with a rating of 9 and return it', function() {
          scope.newMovie = "Batman";
          scope.newRating = 9;
          scope.addMovie();
          httpBackend.flush();
          expect(movieList[0]).toEqual({name:"Batman", rating:9});
      });

      it('should return empty object', function() {
          scope.newMovie = "Batman";
          scope.newRating = 9;
          scope.addMovie();
          //The _id is used so the correct movie is deleted from the "database"
          scope.deleteMovie({name:"Batman", rating:9, _id:1});
          httpBackend.flush();
          expect(movieList[0]).toEqual(undefined);
      });
  });
});
