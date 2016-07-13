// Main control flow of app

var Found = angular.module('Found', [
  'ngRoute',
  'Found.AddItem',
  'Found.Item'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/found', {
      templateUrl: 'partials/main.html',
      controller: 'ItemController'
      })
      .when('/addItem', {
      templateUrl: 'partials/addItem.html',
      controller: 'AddItemController'
    })
      .otherwise({
        redirectTo: '/found'
      });
  }])

