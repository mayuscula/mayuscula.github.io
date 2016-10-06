angular.module('App', []).controller('CtrlPreguntas', function($scope){

	$scope.data 		= data;
	$scope.selected 	= {};
	$scope.puntuacion 	= 0;
	// $scope.used 		= [];
	// var firts_time 		= true;
	var data_length		= 0;

	$scope.init = function() {
		$scope.data 	= data;
		$scope.cargar_datos();
	}

	$scope.cargar_datos = function() {
		$scope.final_juego();
		var data_length = Object.keys($scope.data).length;
		var random = Math.floor((Math.random() * data_length - 1 ) + 1);

		console.log(random)

		$scope.selected = $scope.data[random];
		delete $scope.data[random];

		$scope.resort_array(); 

		console.log($scope.data);
	}

	$scope.final_juego = function(){
		tamano = Object.keys($scope.data).length;
		if(tamano == 0){
			$('#btn_siguiente').remove();
			$('#modal_final').openModal();
		}
	}

	$scope.resort_array = function(){
		var new_array = [];
		$scope.data.forEach(function(_data){
			new_array.push(_data);
		},this);
		$scope.data = new_array;
	}

	$scope.comparar_respuesta = function(numero_respuesta){
		if (numero_respuesta == $scope.selected.respuesta) 
		{
			Materialize.toast('¡Respuesta correcta!', 4000, 'rounded');
			$scope.puntuacion ++;
		} else 
		{
			Materialize.toast('¡Incorrecto!', 4000, 'rounded');
		}

		if(numero_respuesta == 1)
		{
			$('#contenedor_texto_2').fadeOut(500);
		} else 
		{
			$('#contenedor_texto_1').fadeOut(500);
		}
	}

	$scope.siguiente = function(){
		$('#contenedor_texto_2').fadeIn(500);
		$('#contenedor_texto_1').fadeIn(500);
		$('.card-reveal').css("display", "none");
		$scope.cargar_datos();
	}


});