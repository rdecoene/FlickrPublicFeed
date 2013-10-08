define(['modules/app' , 'controllers/mainCtrl'] , function (app) {
  return app.config(['$routeProvider' , function ($routeProvider) {
    $routeProvider.when('/' , {controller: 'MainCtrl' , templateUrl: 'js/templates/list.html'});
  }]);

});