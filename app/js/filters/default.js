angular.module('liste-noel').filter('default', function () {

	"use strict";

	return function (value, defaultValue) {
		if (!value) {
			return defaultValue;
		} else {
			return value;
		}
	};

});
