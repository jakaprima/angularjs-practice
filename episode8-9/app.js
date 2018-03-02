// (function(){
// 'use strict';
// 	angular.module('DIInjectModule', [])
// 	.controller('controllerName', ['$scope', '$filter', FunctionController]);



// 	function FunctionController($scope, $filter, $injector){
// 		$scope.name = "jaka";
// 		$scope.upper = function(){
// 			var upCase = $filter('uppercase');
// 			$scope.name = upCase($scope.name);
// 		};
// 		console.log($injector.annotate(FunctionController));
// 	}


// 	function AnnonateMe(name, job, blah){
// 		return "blah";
// 	}

// })();


// cara paling bagus untuk minify
(function(){
	'use strict';
	angular.module('DIInjectModule', [])
	.controller('controllerName',  FunctionController); 
	FunctionController.$inject = ['$scope', '$filter'];

	function FunctionController($scope, $filter){
		$scope.name = "jaka";
		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		};
	}
})();

// (function(){
// 	'use strict';
// 	angular.module('DIInjectModule', [])
// 	.controller('controllerName',  ['$scope', '$filter', FunctionController]); 

// 	function FunctionController($scope, $filter){
// 		$scope.name = "jaka";
// 		$scope.upper = function(){
// 			var upCase = $filter('uppercase');
// 			$scope.name = upCase($scope.name);
// 		};
// 	}
// })();


// hasil paling bagus
// !function(){"use strict";function e(e,n){e.name="jaka",e.upper=function(){var a=n("uppercase");e.name=a(e.name)}}angular.module("DIInjectModule",[]).controller("controllerName",e),e.$inject=["$scope","$filter"]}();

// !function(){"use strict";function e(e,n,a){e.name="jaka",e.upper=function(){var a=n("uppercase");e.name=a(e.name)}}angular.module("DIInjectModule",[]).controller("controllerName",["$scope","$filter",e])}();
