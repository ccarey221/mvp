var ItemController = angular.module('Found.Item', [])
.controller('ItemController', function($scope, $http) {
    $scope.items = {};
    // grab the data from the database and 
    // set it in the scope variable 'scope.items'

    $http.get('/found').success(function(data) {
      console.log(data.rejectionReason, '*&(*&(&&')
      $scope.items = data.rejectionReason;
    });

});