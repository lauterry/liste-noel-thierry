angular.module('liste-noel', ['firebase', 'ngRoute']);

angular.module('liste-noel').config(function ($routeProvider) {
	"use strict";

	$routeProvider
		.when('/list', {
			templateUrl : '/partials/list.html',
			controller : "mainController",
			controllerAs : "main"
		})
		.when('/admin', {
			templateUrl : '/partials/admin.html',
			controller : "adminController",
			controllerAs : "adminCtrl"
		})
		.otherwise({
			redirectTo: '/list'
		})
});


angular.module('liste-noel').run(function () {
	"use strict";

	$('.parallax').parallax();
	$('.materialboxed').materialbox();
});


angular.module('liste-noel').constant('firebaseRootUrl', 'https://listenoelthierry.firebaseio.com/');

