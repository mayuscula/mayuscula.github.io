$(document).ready(function() {
	init();
	escucharBotonFormulario();
	name = "";
	lastName = "";
	score = 0;
	uppercase = false;
	lowercase = false;
	
	data = {};

});

function init(){
	$(window).load(function() {
		$('.progress').hide(1000);
	});

	$(".button-collapse").sideNav();
	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
  }
  );
}

$.getJSON( "json/mayusculas.json", function(res) {
	mayusculas = res;
});
// $.getJSON( "json/minuscular.json", function(res) {
// 	minuscular = res;
// });
function escucharBotonFormulario(){
	// VALIDA EL FORMULARIO
	$('.botonMayusculas').click(function(event) {
		if(validarFormulario()){
			uppercase = true;
			lowercase = false;
			mostrarContenedorJuego();
		}
	});
	$('.botonMinuscular').click(function(event) {
		if(validarFormulario()){
			lowercase = true;
			uppercase = false;
			mostrarContenedorJuego();
		}
	});
}

function validarFormulario(){
	if ($('#name').hasClass('valid') == false){
		Materialize.toast('Debe ingresar su nombre', 4000, 'rounded');
	}
	if ($('#lastName').hasClass('valid') == false){
		Materialize.toast('Debe ingresar su apellido', 4000, 'rounded')
	}
	if($('#lastName').hasClass('valid') && $('#name').hasClass('valid')){
		name = $('#name').val();
		lastName = $('#lastName').val();
		return true;
	}
	return false;
}

function mostrarContenedorJuego(){
	$(".formulario").fadeOut(400);
	setTimeout(function(){
		$(".juego").hide();
		$(".juego").removeClass('hide');
		$(".juego").fadeIn(800);
		$(".chipNombre").html('<img src="img/abstract-user-flat-4.png" alt="Contact Person">'+name+' '+lastName+'');
		$(".chipScore").html('Puntuación: '+score);
		if(uppercase){
			$(".mainTitle").text('Uso de la mayúscula');
		} else {
			$(".mainTitle").text('Uso de la minúscula');
		}
	},400);
}