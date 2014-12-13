angular.module('liste-noel').factory('giftService', function ($firebase) {

	"use strict";

	var ref = new Firebase("https://listenoelthierry.firebaseio.com/");

	// create an AngularFire reference to the data
	var sync = $firebase(ref);

	var array = sync.$asArray();

	return {
		fetch : function () {
			return array;
		},
		getByRecordKey: function (recordKey) {
			return array.$getRecord(recordKey);
		},
		save : function (gift) {
			return array.$save(gift);
		}
	};

});
