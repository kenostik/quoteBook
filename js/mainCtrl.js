var app = angular.module('quoteApp');

app.controller('quoteControl', function($scope, quoteService) {
	$scope.data = quoteService.getData();

	$scope.strInp;
	$scope.adder = function(){
		quoteService.addData($scope.strInp, $scope.auth);
		$scope.strInp="";
		$scope.auth="";
	}

	$scope.remover= function() {
		quoteService.removeData($scope.strInp);
		
	}

	$scope.filterer= function() {
		$scope.filtSwitch = !$scope.filtSwitch;
		$scope.addSwitch = false;
		$scope.removeSwitch= false;
		}
	$scope.addTog= function() {
		$scope.addSwitch = !$scope.addSwitch;
		$scope.filtSwitch = false;
		$scope.removeSwitch = false;
	}

	$scope.removeTog = function() {
		$scope.removeSwitch = !$scope.removeSwitch;
		$scope.filtSwitch = false;
		$scope.addSwitch = false;

	}
})