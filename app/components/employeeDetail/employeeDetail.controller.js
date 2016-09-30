angular.module('membersApp')
    .controller('empDetail', [ '$rootScope','$scope', 'employeeDataService','$stateParams', function($rootScope,$scope,employeeDataService,$stateParams) {
        var targetElem = $stateParams.index;
            console.log($stateParams);
        $scope.employeeDetail = employeeDataService.getMemData(targetElem);
}]);
