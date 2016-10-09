jQuery(document).ready(function($) {

	escucharBotonFormulario();

	$.getJSON( "json/mayusculas.json", function(res) {
		mayusculas = res;
	});
	
});
function initGame(type){
	data = mayusculas;
	mostrarContenedorJuego(type);
	// angular.element('#initFB').triggerHandler('click');

	console.log(angular.element('#initFB').triggerHandler('click'));
	// angular.element('.preguntas-controller').scope().$apply();
}


function escucharBotonFormulario(){
	// VALIDA EL FORMULARIO
	$('.botonMayusculas').click(function(event) {
		initGame(1);
	});
	$('.botonMinusculas').click(function(event) {
		initGame();
		data = minusculas;
	});
}


function mostrarContenedorJuego(type){
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