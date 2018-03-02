(function(){
	'use strict';

	angular.module("modulCalculator", [])
	.controller("controllerCalculator", function($scope){
		$scope.data = "";
		$scope.totalValue = 0;

		$scope.displayNumeric = function(){
			var totalNameValue = calculateNumericForString($scope.data); //ambil total value
			$scope.totalValue = totalNameValue;
		};

		function calculateNumericForString(string){
			var totalStringValue = 0;
			for(var i = 0; i < string.length; i++){
				totalStringValue += string.charCodeAt(i);
			}

			return totalStringValue;
		}

	});
})();