angular.module('membersApp').controller('allMemebers', [ '$rootScope','$scope','employeeDataService','$state', function($rootScope,$scope,employeeDataService,$state) {
    $scope.viewEmployeeInfo = function(index) {
        $state.go('detail', {'index' : index});
    };

    $scope.editEmployeeInfo = function(index) {
        $state.go('edit', {'index' : index});
    };

    employeeDataService.list(function(employeeRecord) {
        $scope.employeeRecord =  employeeDataService.setData(employeeRecord);
    });
}]);