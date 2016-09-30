var membersApp = angular.module('membersApp', ['ui.router']);

membersApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('Members', {
            url: '/',
            templateUrl: '/app/components/allMembers/allMembers.html',
            controller: 'allMemebers'
        })

        .state('addMember', {
            url: '/addMember',
            templateUrl: '/app/components/addMember/addMember.html',
            controller: 'addMember'
        })

        .state('detail', {
            url: '/detail',
            templateUrl: 'app/components/employeeDetail/employeeDetail.html',
            controller: 'empDetail',
            params : {index : null}
        })

        .state('edit', {
            url: '/',
            templateUrl: 'app/components/editDetail/editDetail.html',
            controller: 'editDetail',
            params : {index : 2}
        });

});