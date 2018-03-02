( function(){
	'use strict';

	angular.module('app', [])
	.controller('controllerName1', functionCtrl1)
	.controller('ShoppingListController2', ShoppingListController2)
	.factory('factoryName', functionFactory)
	.factory('ShoppingListFactory', ShoppingListFactory);

	functionCtrl1.$inject = ['factoryName'];
	function functionCtrl1(factoryName){
		var lingkupCtrl1 = this;
		var panggilFactory = factoryName(3);
		console.log(panggilFactory);
		lingkupCtrl1.dataArray = panggilFactory.propDataArray();

		lingkupCtrl1.input1 = "";
		lingkupCtrl1.input2 = "";

		lingkupCtrl1.eventTambah = function(){

			try {
			panggilFactory.propEventTambah(lingkupCtrl1.input1, lingkupCtrl1.input2);
			} catch (error) {
				lingkupCtrl1.pesanError = error.message;
			}
		};

		lingkupCtrl1.eventDelete = function (index){

			panggilFactory.propEventDelete(index);
		}




	}


	function service(maxArray){
		console.log('maksimum : ' + maxArray);
		var lingkupService = this;
		var dataArray = [];

		lingkupService.propEventTambah = function (input1, input2){
			console.log(input1);
			console.log(input2);
			if((maxArray === undefined) || (maxArray !== undefined) && (dataArray.length < maxArray)) {
			var array = {
				prop1 : input1,
				prop2 : input2
			};
			dataArray.push(array);
			}
			else {
				throw new Error ("Max array ("+ maxArray +") maksimal");
			}
		}

		lingkupService.propEventDelete = function (index){

			dataArray.splice(index, 1);
		}

		lingkupService.propDataArray = function(){
			return dataArray;
		}



	}

	function functionFactory(){
		var factory = function (maxArray){
			return new service(maxArray);
		};

		return factory;
	}



// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list2 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list2.items = shoppingList.getItems();

  list2.itemName = "";
  list2.itemQuantity = "";

  list2.addItem = function () {
    try {
      shoppingList.addItem(list2.itemName, list2.itemQuantity);
    } catch (error) {
      list2.errorMessage = error.message;
    }

  }

  list2.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {


  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  console.log()
  return factory;
}





})();