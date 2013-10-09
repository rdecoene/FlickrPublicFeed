define(['modules/app' , 'controllers/mainCtrl', 'controllers/detailedCtrl'] , function (app) {
  return app.config(['$routeProvider' , function ($routeProvider) {
    $routeProvider.when('/' , {controller: 'MainCtrl' , templateUrl: 'js/templates/list.html'})
    .when('/detailed/:itemId', {controller: 'DetailedCtrl' , templateUrl: 'js/templates/detailed.html'})
    .otherwise({redirectTo: '/'});
  }]);

});