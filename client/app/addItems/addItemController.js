var AddItemController = angular.module('Found.AddItem', [])
.controller('AddItemController', function($scope, $http) {
  $http.post('test.json').success(function() {
    console.log('POSTED!')
  })
});