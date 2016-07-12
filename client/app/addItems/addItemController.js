var AddItemController = angular.module('Found.AddItem', [])
.controller('AddItemController', function($scope, $http) {
  $.on('submit', function() {
    console.log($('.name').val());
  })

  $http.post('test.json').success(function() {
    console.log('POSTED!')
  })
});