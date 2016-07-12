// Main control flow of app

angular.module('Found', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/addItem', {
      templateUrl: 'addItems/addItem.html',
      controller: 'addItemController'
    })
      .when('/found', {
      templateUrl: 'index.html',
      controller: 'itemController'
      })
      .otherwise({
        redirectTo: '/found'
      });
  })

