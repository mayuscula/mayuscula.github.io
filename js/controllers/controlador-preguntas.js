angular.module('App', []).controller('CtrlPreguntas', function($scope){

	$scope.data 	= mayusculas;
	$scope.selected = {};

	$scope.initMayuscula = function() {
		var mayusculas_length = Object.keys(mayusculas).length;
		var random = Math.floor((Math.random() * mayusculas_length ) + 1);

		$scope.selected = $scope.data[random];

		
	}


});