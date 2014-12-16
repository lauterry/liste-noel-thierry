angular.module('liste-noel', ['firebase']);


angular.module('liste-noel').run(function () {
	"use strict";

	$('.parallax').parallax();
	$('.materialboxed').materialbox();
});


angular.module('liste-noel').constant('firebaseRootUrl', 'https://listenoelthierry.firebaseio.com/');

