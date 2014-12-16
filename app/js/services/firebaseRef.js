angular.module('liste-noel').factory('firebaseRef', function (firebaseRootUrl) {
	"use strict";

	var ref = new Firebase(firebaseRootUrl);

	return ref;
});
