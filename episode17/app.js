(function(){
	'use strict';

	var array1 = [0, 1, 2, 3, 4, 5];
	var array2 = [
		{
			prop1 : 'val 1',
			prop2 : 1
		},
		{
			prop1 : 'val 2',
			prop2 : 2
		}
	];

	angular.module('app', [])
	.controller('ctrl1', ctrl1Function);

	ctrl1Function.$inject = ['$scope'];
	function ctrl1Function($scope){
		$scope.array1 = array1;
		$scope.array2 = array2;

		$scope.tambahkearray = function() {
			var itembaru = {
			prop1 : $scope.newprop1,
			prop2 : $scope.newprop2
		};
		$scope.array2.push(itembaru);
		};
	}

})();