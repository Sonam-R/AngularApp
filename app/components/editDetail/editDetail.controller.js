angular.module('membersApp')
    .controller('editDetail', [ '$rootScope','$scope', 'employeeDataService','$stateParams', function($rootScope,$scope,employeeDataService,$stateParams) {
            var targetElem = $stateParams.index;
            $scope.employeeDetail = $rootScope.employeeRecord[targetElem];
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
            $scope.changeValue = function() {
                console.log($scope, 'ko')
                // debugger
                $rootScope.changeUser = $scope.employeeDetail;
                $scope.employeeDetail = {}
            };

}]);
