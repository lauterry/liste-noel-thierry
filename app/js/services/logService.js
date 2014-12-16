angular.module('liste-noel').factory('logService', function ($firebase, firebaseRef) {
	"use strict";

	var sync = $firebase(firebaseRef.child('logs'));

	var logs = sync.$asArray();

	return {
		fetch : function () {
			return logs;
		},
		add : function (log) {
			return logs.$add(log);
		}
	};

});
