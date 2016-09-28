angular.module('membersApp').controller('allMemebers', [ '$scope', '$http', function($scope,$http) {
    var sonam = $http.get("/app/data/employeeData.json")
        .then(function(response) {
            console.log(response, 'gibu')
            $scope.employeeRecords = response.data;
        });
}]);