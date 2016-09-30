angular.module('membersApp')
    .controller('addMember', [ '$rootScope','$scope', function($rootScope,$scope) {
        $scope.user = {
            Name: '',
            lastName: '',
            gender: '',
            EmployeeId: '',
            designation: '',
            experience: '',
            technology: ''
        };
        $scope.CurrentData = $rootScope.employeeRecord;

        $scope.submitForm = function() {
            $rootScope.newUser = $scope.user;
            $scope.user = {}
        };
    }]);