// Main control flow of app

var Found = angular.module('Found', [
  'ngRoute',
  'AddItemController',
  'ItemController'
  ])
  .config(['$routeProvider'], function($routeProvider) {
    $routeProvider
      .when('/addItem', {
      templateUrl: 'addItems/addItem.html',
      controller: 'addItemController'
    })
      .when('/found', {
      templateUrl: '../index.html',
      controller: 'itemController'
      })
      .otherwise({
        redirectTo: '/found'
      });
  })

