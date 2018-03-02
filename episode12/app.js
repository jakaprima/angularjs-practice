(function(){
	angular.module('appeps8', [])
	.controller('controllereps8', FunctionControllereps8);

	FunctionControllereps8.$inject = ['$scope'];
	function FunctionControllereps8($scope){
		
		$scope.name = "jaka";
		$scope.a = 0;
		$scope.imageFileName = "1.png";
		$scope.harga = .23;

		$scope.ubahgambarMsg = function(){
			return "jaka lagi laper dan suka makan"
		}

		$scope.ubahgambar = function(){
			$a = 1;
			$scope.imageFileName = "2.jpg";
		}

	}

})();