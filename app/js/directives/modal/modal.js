angular.module('liste-noel').directive('modal', function () {
	"use strict";

	return {
		restrict: 'E',
		replace: true,
		scope: {
			value: "@",
			href: "@"
		},
		templateUrl : 'js/directives/modal/modal.html',
		link : function (scope, elem) {
			$(elem).leanModal();
		}
	};
});
