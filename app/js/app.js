var membersApp = angular.module('membersApp', ['ui.router']);

membersApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('Members', {
            url: '/',
            templateUrl: '/app/components/allMembers/allMembers.html'
        })

        .state('membersList', {
            url: '/membersList',
            templateUrl: '/app/components/memberList/memberList.html'

        });

});