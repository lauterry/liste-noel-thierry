angular.module('liste-noel').controller('mainController', function ($scope, giftService, logService) {
    "use strict";

	this.showMaxError = false;

	this.gifts = giftService.fetch();

	this.confirmParticipation = function () {
		this.showMaxError = false;

		var gift = giftService.getByRecordKey(this.gift.$id);

		if (this.participation > gift.remaining) {
			this.showMaxError = true;
		} else {
			gift.remaining = gift.remaining - this.participation;
			if (gift.remaining <= 0) {
				gift.bought = true;
			}

			giftService.save(gift).then(angular.bind(this, function () {

				$('#thank-you-modal').openModal();

				var today = new Date();
				logService.add({
					"date" : today.getTime(),
					"name" : gift.name,
					"type" : "contribute",
					"amount" : this.participation
				});
				this.participation = undefined;

			}));

			$scope.contributeForm.$setPristine();
		}
	};

	this.confirmBuy = function () {
		var gift = giftService.getByRecordKey(this.gift.$id);
		gift.bought = true;
		gift.remaining = 0;
		giftService.save(gift).then(function () {

			$('#thank-you-modal').openModal();

			var today = new Date();
			logService.add({
				"date" : today.getTime(),
				"name" : gift.name,
				"type" : "buy"
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
		};
	};

});
