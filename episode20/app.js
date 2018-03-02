(function(){
	'use strict';

	angular.module('app', [])
	.controller('controller1', function1)
	.controller('controller2', function2)
	.service('service1Service', functionservice);

	function1.$inject = ['service1Service'];

	function function1(service1Service){

		var var1 = this;

		var1.itemName = "";
		var1.itemQuantity = "";
		
		var1.addItem = function (){
			service1Service.addItem(var1.itemName, var1.itemQuantity);
		}
	}

	function2.$inject = ['service1Service'];
	function function2(service1Service){
		var dataList = this;
		dataList.array1 = service1Service.getItems();

		dataList.removeItem = function(itemIndex){
			service1Service.removeItem(itemIndex);
		};
	}


	function functionservice(){
		var service = this;

		// list dari shopping item
		var items = [];

		service.addItem = function (itemName, quantity){
			var item = {
				name: itemName,
				quantity : quantity
			};
			items.push(item);
		};

		service.removeItem = function (itemIdex){
			items.splice(itemIdex, 1);
		}

		service.getItems = function(){
			return items;
		};
	}

})();

// (function () {
// 'use strict';

// angular.module('App', [])
// .controller('Controller1', Controller1)
// .controller('Controller2', Controller2)
// .service('Service3', Service3);

// Controller1.$inject = ['Service3'];
// function Controller(Service3) {
//   var itemAdder = this;

//   itemAdder.itemName = "";
//   itemAdder.itemQuantity = "";

//   itemAdder.addItem = function () {
//     Service3.addItem(itemAdder.itemName, itemAdder.itemQuantity);
//   }
// }


// Controller2.$inject = ['Service3'];
// function Controller2(Service3) {
//   var showList = this;

//   showList.items = Service3.getItems();

//   showList.removeItem = function (itemIndex) {
//     Service3.removeItem(itemIndex);
//   };
// }


// function Service3() {
//   var service = this;

//   // List of shopping items
//   var items = [];

//   service.addItem = function (itemName, quantity) {
//     var item = {
//       name: itemName,
//       quantity: quantity
//     };
//     items.push(item);
//   };

//   service.removeItem = function (itemIndex) {
//     items.splice(itemIndex, 1);
//   };

//   service.getItems = function () {
//     return items;
//   };
// }

// })();