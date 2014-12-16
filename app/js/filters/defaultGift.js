angular.module('liste-noel').filter('defaultGift', function () {

	"use strict";

	return function (value) {
		if (!value) {
			return 'ce cadeau';
		} else {
			return value;
		}
	};

});
