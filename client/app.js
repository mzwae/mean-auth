
  angular.module('meanAuth', ['ngRoute']);

  function config($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html'
      })
      .when('/signup', {
        templateUrl: '/views/signup.html'
      })
      .when('/login', {
        templateUrl: '/views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      }) 
      .when('/connect/local', {
        templateUrl: '/views/connect-local.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      }) 
     
      .otherwise({
        redirectTo: '/'
      });

  /*  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });*/
  }


  angular
    .module('meanAuth')
    .config(['$routeProvider', '$locationProvider', config]);
