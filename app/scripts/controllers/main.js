'use strict';

/**
 * @ngdoc function
 * @name 1dayjobwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1dayjobwebApp
 */
angular.module('1dayjobwebApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('MainController',['$scope','$state','$mdSidenav',function($scope,$state,$mdSidenav){
    $scope.togglesidenav = buildToggler('sidenave');
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  }])
;
