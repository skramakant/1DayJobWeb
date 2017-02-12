'use strict';

/**
 * @ngdoc overview
 * @name 1dayjobwebApp
 * @description
 * # 1dayjobwebApp
 *
 * Main module of the application.
 */
angular
  .module('1dayjobwebApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    // 'ngTouch',
    'ngMaterial',
    'ngMdIcons'
  ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    //route for the home pageview
    $stateProvider
    .state('app',{
      url:'/',
      views:{
        'content':{
          templateUrl:'./views/home.html'
        },
        'footer':{
           templateUrl:'./views/footer.html',
        }
      }
    })
    .state('app.register',{
      url:'register',
      views:{
        'content@':{
          template:'<html>register here</html>'
        }
      }
    })
    .state('app.workers',{
      url:'workers',
      views:{
        'content@':{
          template:'<html>workers here</html>'
        }
      }
    })
    .state('app.works',{
      url:'works',
      views:{
        'content@':{
          template:'<html>works here</html>'
        }
      }
    })
    .state('app.aboutus',{
      url:'aboutus',
      views:{
        'content@':{
          template:'<html>aboutus here</html>'
        }
      }
    })
    .state('app.contactus',{
      url:'contactus',
      views:{
        'content@':{
          template:'<html>contactus here</html>'
        }
      }
    })
    ;
    $urlRouterProvider.otherwise('/');
  }])
  // .run(['$rootScope','$state',function($rootScope,$state){
  //
  // }])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('orange');
  })
;
