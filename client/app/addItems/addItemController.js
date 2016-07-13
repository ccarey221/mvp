var AddItemController = angular.module('Found.AddItem', [])
.controller('AddItemController', function($scope, $http) {

    $scope.postData = function() {
      var newItem = {};

      newItem.name = $scope.name;
      newItem.description = $scope.description;
      newItem.reward = $scope.reward;
      newItem.location = $scope.location;

      $http.post('/addItem', newItem)

      $scope.name = '';
      $scope.description = '';
      $scope.reward = '';
      $scope.location = '';

    }
});