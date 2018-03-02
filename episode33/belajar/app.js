(function(){
	'use strict';
	angular.module('app33', [])
	.controller('controller33', controller33)
	.factory('factory33', factory33)
	.component('componentCoba', {
		templateUrl: 'listdata.html',
		controller: componentController,
		bindings: {
			getBarang : '<',
			judul: '@',
			saatDelete: '&',

		},

	});


	componentController.$inject = ['$element'];
	function componentController($element){

  var $ctrl = this;
  var totalData;

	$ctrl.$onInit = function(){
		totalData = 0;

	};



$ctrl.cookiesInList = function(){

	for (var i = 0; i < $ctrl.getBarang.length; i++){
		var name = $ctrl.getBarang[i].prop1;
		if (name.toLowerCase().indexOf("indonesia") !== -1){
			return true;
		}
	}
	return false;
};

$ctrl.delete = function(index){

	console.log('saat delete di component (index) : ' + index);
	$ctrl.saatDelete({index: index});


};

$ctrl.$onChanges = function(changeObj){
	console.log('ada perubahan : ', changeObj);

};

$ctrl.$doCheck = function(){
	if ($ctrl.getBarang.length !== totalData ){
		console.log("item berubah cek cookies");
		totalData = $ctrl.getBarang.length;
		if ($ctrl.cookiesInList()){
			console.log("yAAA ini Indonesia");
			var warningElem = $element.find('div.error');
			warningElem.slideDown(900);
		}else{
			console.log("tidak ada tulisan indonesia disini, lanjutkan");
			var warningElem = $element.find('div.error');
			warningElem.slideUp(900);
		}
	}
};





	}

	controller33.$inject = ["factory33"];
	function controller33(factory33){
		var ctrl33 = this;
		var factory33 = factory33();
		ctrl33.getBarang = factory33.getBarang();

		var origTitle = "List #1";
		ctrl33.judul = origTitle + " (" + ctrl33.getBarang.length + " items )";

  		
		ctrl33.input1 = "";
		ctrl33.input2 = "";


		ctrl33.add = function(){


			factory33.add(ctrl33.input1, ctrl33.input2);
			ctrl33.judul = origTitle + " (" + ctrl33.getBarang.length + " items )";
		};
		ctrl33.delete = function(index){
			this.lastRemoved = "Last item removed was " + this.getBarang[index].prop1;
				console.log(this.getBarang[index].prop1);
			// console.log('index : ' + index);
			factory33.delete(index);


	
this.judul = origTitle + " (" + ctrl33.getBarang.length + " items )";
		};




		  


	}


	function aService(maxArray){
		var aService = this;
		var data = [];

		
		aService.add = function(input1, input2){
		if ((maxArray === undefined) ||
        (maxArray !== undefined) && (data.length < maxArray)) {
			var isidata = {
				prop1 : input1,
				prop2 : input2
			};
			data.push(isidata);
			console.log(data);
		}else{
			throw new Error("Maksimal masukin hanya " + maxArray);
		}

		}

		aService.delete = function(index){

			data.splice(index, 1);
		};

		aService.getBarang = function(){

			return data;
		};


	}

	function factory33(){
		var factory = function(maxArray){
			return new aService(maxArray);
		};
		return factory;
	}



})();