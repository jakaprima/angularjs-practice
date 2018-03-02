(function (){
	angular.module('app', [])
	.controller('controllerName1', functionCtrl1)
	.controller('controllerName2', functionCtrl2)
	.service('serviceName', functionConstructor);

	functionCtrl1.$inject = ['serviceName'];

	function functionCtrl1(serviceName){
		var lingkupVarCtrl1 = this;
		lingkupVarCtrl1.input1 = "";
		lingkupVarCtrl1.input2 = "";

		lingkupVarCtrl1.eventTambah = function (){
			serviceName.propEventTambah(lingkupVarCtrl1.input1, lingkupVarCtrl1.input2);
		}


	}

	functionCtrl2.$inject = ['serviceName'];
	function functionCtrl2(serviceName){
		var lingkupVarCtrl2 = this;

		lingkupVarCtrl2.dataArray = serviceName.propArray();
		lingkupVarCtrl2.eventDelete = function (index){
			serviceName.propEventDelete(index);
		};

	}


	function functionConstructor(){
		var lingkupVarService = this;

		var array = [];

		lingkupVarService.propEventTambah = function (param1, param2){
			var isiArray = {
				propinput1 : param1,
				propinput2 : param2
			}
			array.push(isiArray);
		}

		lingkupVarService.propEventDelete = function (index){
			array.splice(index, 1);
		}

		lingkupVarService.propArray = function (){
			return array;
		};



	}



})();