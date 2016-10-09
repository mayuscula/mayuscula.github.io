app.controller('preguntas-controller', function($scope, facebookService, $route){

	$scope.data 		= [];
	$scope.selected 	= "sin datos";
	$scope.puntuacion 	= 0;
	// $scope.used 		= [];
	// var firts_time 		= true;
	var data_length		= 0;
	$scope.$route = $route;


	///////////////////////////////////////

	$scope.btnComenzarJuego = function(type){
		$scope.data = mayusculas;
		$scope.mostrarContenedorJuego(type);
		$scope.cargar_datos();
	}


	$scope.mostrarContenedorJuego = function(type){
		if(type == 1){
			name = $("#name").val();
			lastName = $("#lastName").val();
			$(".fb-user-preguntas").html('<div class="chip"><img src="" class="profilePic" alt="Contact Person">' + name+ " " +lastName+ '</div>');
			$(".profilePic").attr('src', "img/abstract-user-flat-4.png");
			$(".fb-user-preguntas").removeClass('hide');
			$(".fb-user-preguntas").fadeIn(400);
		}

		$(".formulario").fadeOut(400);
		setTimeout(function(){
			$(".juego").hide();
			$(".juego").removeClass('hide');
			$(".juego").fadeIn(800);

		},400);
	}

	$scope.cargar_datos = function() {
		console.log("cargar datos")
		$scope.final_juego();
		var data_length = Object.keys($scope.data).length;
		var random = Math.floor((Math.random() * data_length - 1 ) + 1);


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
	///////////////////////////////////////////////////
	// $scope.getFbData = function() {
	// 	$scope.data = mayusculas;
	// 	FB.getLoginStatus(function(response) {
	// 		if (response.status === 'connected') {
	// 	      // Logged into your app and Facebook.
	// 	      FB.api(
	// 	      	'/me',
	// 	      	'GET',
	// 	      	{"fields":"picture,name"},
	// 	      	function(response) {
	// 	      		var profilePic = response.picture.data.url;
	// 	      		$(".chipNombre").html('<img src="" id="profilePic" alt="Contact Person">' + response.name + '');
	// 	      		$("#profilePic").attr('src', ""+profilePic+"");
	// 	      	}
	// 	      	);
	// 	      $scope.mostrarContenedorJuego(2);
	// 	      $scope.siguiente();
	// 	  } else if (response.status === 'not_authorized') {
	// 	      // The person is logged into Facebook, but not your app.
	// 	  } else {
	// 	      // The person is not logged into Facebook, so we're not sure if
	// 	      // they are logged into this app or not.
	// 	  }
	// 	});
	// };

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

function check(){
	setTimeout(function(){
		// var test = angular.element($('#preguntas-controller')).scope().btnComenzarJuego();
		// var test = angular.element($('#preguntas-controller')).scope().getFbData();
		// angular.element($('#preguntas-controller')).scope().siguiente();
	},500);
}