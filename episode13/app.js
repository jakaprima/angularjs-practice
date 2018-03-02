(function(){
	'use strict';
	/**
	* model13 Module
	*
	* Description
	*/
	angular.module('module13', [])
	.controller('controller13', Function13)
	.filter('loves', FactoryFilter)
	.filter('filter2', Factory2Filter);

	Function13.$inject =['$scope', '$filter', 'lovesFilter', 'filter2Filter']; // lovefilter ini dari filter name

	function Function13($scope, $filter, lovesFilter, filter2Filter){
		$scope.name = "jaka";
		$scope.function1 = function(){
			var msg = "saya suka angular";
			return msg;
		};
		$scope.function2 = function(){
			var msg = "saya suka angular";
			msg = lovesFilter(msg);
			return msg;
		};
		


	}

			function FactoryFilter(){
			return function(input){
				input = input || "";
				input = input.replace("suka", "cinta");
				return input;
			};
			}

			function Factory2Filter(){
			return function(input, target, replace){
				input = input || "";
				input = input.replace(target, replace);
				return input;
			};
			}


})();