angular.module('liste-noel').controller('mainController', function ($scope, giftService, $log) {
    "use strict";

	this.gifts = giftService.fetch();

	this.confirmParticipation = function () {

		var gift = giftService.getByRecordKey(this.gift.$id);
		gift.remaining = this.gift.price  - this.participation;
		giftService.save(gift).then(function () {
			$log.log('Gift saved !');
		});
	};

	this.confirmBuy = function () {
		var gift = giftService.getByRecordKey(this.gift.$id);
		gift.bought = true;
		giftService.save(gift).then(function () {
			$log.log('Gift saved !');
		});
	};

});
