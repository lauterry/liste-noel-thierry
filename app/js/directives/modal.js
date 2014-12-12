angular.module('liste-noel').directive('modal', function () {
	"use strict";

	return {
		restrict: 'E',
		replace: true,
		templateUrl : 'partials/modal.html',
		link : function (scope, elem) {
			$(elem).leanModal();
		}
	}
});
