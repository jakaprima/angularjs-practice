(function (){
	'use strict';
	angular.module('appEvent', [])
	.controller('controllerEvent', controllerEvent)
	.factory('factoryEvent', factoryEvent)
	.service('serviceChecking', serviceChecking)
	.component('componentEvent', {
		templateUrl: 'datatable.html',
		controller: componentDataController,
		bindings: {
			data: "<",
			jumlahData: "@",
			eventDelete: "&",
		}
	})
	.component('componentLoading', {
		templateUrl: 'loading.html',
		controller: componentLoadingController,
	});

	componentDataController.$inject = ['$element', '$rootScope', 'serviceChecking'];
	function componentDataController($element, $rootScope, serviceChecking){

		var $ctrl = this;
		var totalData;

		$ctrl.$onInit = function(){
			totalData = 0;
		}

		$ctrl.$doCheck = function(){
			if($ctrl.data.length !== totalData){
				totalData = $ctrl.data.length;
				

				$rootScope.$broadcast('list data broadcast : ', {on:true});
				var promises = [];

				for(var i = 0; i < $ctrl.data.length; i++){
					promises.push(serviceChecking.checkProp1($ctrl.data[i].prop1));
				}

			}
		}

		$ctrl.delete = function(index){
			$ctrl.eventDelete({index:index});
		}

	}

	componentLoadingController.$inject = [];
	function componentLoadingController(){

	}

	controllerEvent.$inject = ['factoryEvent'];
	function controllerEvent(factoryEvent){
		var ctrlEvent = this;
		var factoryEvent = factoryEvent();
		ctrlEvent.input1 = "";
		ctrlEvent.input2 = "";

		ctrlEvent.add = function(){
			try{
				factoryEvent.add(ctrlEvent.input1, ctrlEvent.input2);
			} catch (error){
				ctrlEvent.error = error.message;
			}
		};

		ctrlEvent.delete = function(index){
			factoryEvent.delete(index);
		};

		ctrlEvent.data = factoryEvent.data();
	}

	
	serviceChecking.$inject = ['$q, $timeout'];
	function serviceChecking($q, $timeout){
		service = this;
		service.checkProp1 = function (prop1){
			console.log(prop1);
		}
	}


	function serviceInti(maxArray){
		console.log(maxArray);
		var serviceInti = this;
		var data = [];

		serviceInti.add = function(input1, input2){
			if((maxArray === undefined) ||
				(maxArray !== undefined) &&
				(data.length < maxArray)){
			var object = {
				prop1 : input1,
				prop2 : input2
			};
			data.push(object);
		}else{
			throw new Error('tidak boleh lebih dari : ' + maxArray); 
		}
		}
		serviceInti.delete = function(index){
			data.splice(index, 1);
		}

		serviceInti.data = function(){
			return data;
		}


	}




	function factoryEvent(){
		
		var factory = function(maxArray){
			var maxArray = 3;
			return new serviceInti(maxArray);
		};
		return factory;
	}



})();