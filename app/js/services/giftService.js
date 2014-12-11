angular.module('liste-noel').factory('giftService', function ($firebase) {

	var ref = new Firebase("https://listenoelthierry.firebaseio.com/");

	// create an AngularFire reference to the data
	var sync = $firebase(ref);

	return {
		fetch : function () {
			return sync.$asObject();
		}
	};

});
