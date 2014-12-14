angular.module('liste-noel').controller('mainController', function ($scope, giftService, $log) {
    "use strict";

	this.gifts = giftService.fetch();

	this.confirmParticipation = function () {

		var gift = giftService.getByRecordKey(this.gift.$id);
		gift.remaining = gift.remaining - this.participation;

		if (gift.remaining <= 0) {
			gift.bought = true;
		}

		giftService.save(gift).then(angular.bind(this, function () {
			this.participation = undefined;
			$log.log('Gift saved !');
		}));
	};

	this.confirmBuy = function () {
		var gift = giftService.getByRecordKey(this.gift.$id);
		gift.bought = true;
		gift.remaining = 0;
		giftService.save(gift).then(function () {
			$log.log('Gift saved !');
		});
	};

});
