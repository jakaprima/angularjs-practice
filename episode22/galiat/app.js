// (function () {
// 'use strict';

// angular.module('appName', [])
// .controller('ctrl1', ShoppingListController)
// .provider('ShoppingListService', ShoppingListServiceProvider)
// ;




// ShoppingListController.$inject = ['ShoppingListService'];
// function ShoppingListController(ShoppingListService) {

// }


// // If not specified, maxItems assumed unlimited
// function ShoppingListService(maxItems) {
  
// }


// function ShoppingListServiceProvider() {
//   var provider = this;

//   provider.defaults = {
//     maxItems: 10
//   };

//   provider.$get = function () {
//     var shoppingList = new ShoppingListService(provider.defaults.maxItems);

//     return shoppingList;
//   };
// }

// })();

(function(){
	'use strict';
	angular.module('appName', [])
	.controller('ctrl1', fCtrl1)
	.provider('providerName', fProvider1)
	
	// .config(Config); //boleh ada boleh ga

	// Config.$inject = ['fProvider1'];
	// function Config(fProvider1){
 //  		fProvider1.default.maxArray = 2;
	// }


fCtrl1.$inject = ['providerName'];
function fCtrl1(providerName){
	var envCtrl1 = this;

	envCtrl1.input1 = "";
	envCtrl1.input2 = "";

	envCtrl1.addBarang = function(){
			try{
				providerName.addBarang(envCtrl1.input1, envCtrl1.input2);
			} catch (error) {
				envCtrl1.pesanError = error.message;
			}
		};

	envCtrl1.deleteBarang = function(index){
		providerName.deleteBarang(index);

	}

	envCtrl1.dataArray = providerName.viewData();


}

function service1Service (maxArray){

	var envService1 = this;
	var dataArray = [];

	envService1.addBarang = function(input1, input2){
		if ((maxArray === undefined) ||
        (maxArray !== undefined) && (dataArray.length < maxArray)) {
		var barang = {
			prop1 : input1,
			prop2 : input2
		};
		dataArray.push(barang);
		}
	    else {
	      throw new Error("Max items (" + maxArray + ") reached.");
	    }

	}

	envService1.deleteBarang = function(index){
		dataArray.splice(index, 1);
	}

	envService1.viewData = function(){
		return dataArray;
	}

}

function fProvider1(){
	var envProvider1 = this;
		envProvider1.default = {
			maxArray : 3
		};

	envProvider1.$get = function(){
		var service1 = new service1Service(envProvider1.default.maxArray);
		return service1;
	};

}

})();