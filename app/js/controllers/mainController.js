angular.module('liste-noel').controller('mainController', function ($scope, giftService, logService) {
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
			var today = new Date();
			logService.add({
				"date" : today.getTime(),
				"name" : gift.name,
				"type" : "contribute"
			});
		}));
	};

	this.confirmBuy = function () {
		var gift = giftService.getByRecordKey(this.gift.$id);
		gift.bought = true;
		gift.remaining = 0;
		giftService.save(gift).then(function () {
			var today = new Date();
			logService.add({
				"date" : today.getTime(),
				"name" : gift.name,
				"type" : "contribute"
			});
		});
	};

	this.filterByBoughtOrNot = function (filterByNotBought) {
		return function (gift) {
			if (filterByNotBought) {
				return gift.bought === false;
			} else {
				return gift;
			}
		}
	}

});
