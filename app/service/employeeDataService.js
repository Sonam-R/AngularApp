angular.module('membersApp')
    .factory('employeeDataService',function($http) {

        var data = null;

        return {
            list: function(employeeRecord) {
                $http.get('/app/data/employeeData.json').success(employeeRecord);
            },
            setData : function(payload){
                data = payload;
                return data;
            },
            getMemData : function(index){
                return data[index];
            },
            getAllData: function(){
                return data;
            }
        }
});