$(document).ready(function() {
	init();
	name = "";
	lastName = "";
	uppercase = false;
	lowercase = false;
	
	data = {};
	
	$.getJSON( "json/mayusculas.json", function(res) {
		mayusculas = res;
	});
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

	$('.btn-nav').click(function(event) {
		/* Act on the event */
		$('.btn-nav').removeClass("active");
		$(this).addClass('active');
	});
}

function fbLogout() {
	FB.logout(function(response) 
	{
		checkLoginState();
  		Materialize.toast('Ha salido de Facebook', 4000, 'rounded');
	});
}




