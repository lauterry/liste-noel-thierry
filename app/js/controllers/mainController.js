angular.module('liste-noel').controller('mainController', function ($scope, giftService) {
    "use strict";

	$scope.gifts = giftService.fetch();

});
