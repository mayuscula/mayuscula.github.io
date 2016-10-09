var app = angular.module("App", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        controller : "main-controller"
    })
    .when("/preguntas", {
        templateUrl : "views/preguntas.html",
        controller : "preguntas-controller"
    })
    .when("/corrector", {
        templateUrl : "views/corrector.html",
        controller : "corrector-controller"
    })
    .when("/definiciones", {
        templateUrl : "views/definiciones.html",
        controller : "definiciones-controller"
    })
    .when("/licencia", {
        templateUrl : "views/licencia.html"
    })
    .otherwise({
        templateUrl : "views/404.html"
    });
});