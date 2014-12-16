angular.module('liste-noel').factory('giftService', function ($firebase, firebaseRef) {

	"use strict";

	var sync = $firebase(firebaseRef.child('gifts'));

	var gifts = sync.$asArray();

	return {
		fetch : function () {
			return gifts;
		},
		getByRecordKey: function (recordKey) {
			return gifts.$getRecord(recordKey);
		},
		save : function (gift) {
			return gifts.$save(gift);
		}
	};

});
