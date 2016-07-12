// Main control flow of app

var Found = angular.module('Found', [
  'ngRoute',
  'Found.AddItem',
  'Found.Item'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/addItem', {
      templateUrl: 'addItems/addItem.html',
      controller: 'AddItemController'
    })
      .when('/found', {
      templateUrl: 'index.html',
      controller: 'ItemController'
      })
      .otherwise({
        redirectTo: '/found'
      });
  }])

