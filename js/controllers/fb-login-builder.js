 // This is called with the results from from FB.getLoginStatus().
 function statusChangeCallback(response) {
   console.log('statusChangeCallback');
   if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      $('.fb-login-btn').removeClass('hide');
      $('.fb-login-btn').hide();
      $('.fb-login-btn').show(500);
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      $('.fb-login-btn').removeClass('hide');
      $('.fb-login-btn').hide();
      $('.fb-login-btn').show(500);
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
  	FB.getLoginStatus(function(response) {
  		statusChangeCallback(response);
  	});
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    if($("#initFB").attr('btn-active') == "true"){
      initGame()
    }
    FB.api(
      '/me',
      'GET',
      {"fields":"picture,name"},
      function(response) {
       var profilePic = response.picture.data.url;
       $(".fb-user").hide();
       $(".fb-user").html('<div class="chip"><img src="" class="profilePic" alt="Contact Person">' + response.name + '</div>');
       $(".profilePic").attr('src', ""+profilePic+"");
       $(".fb-user").fadeIn(400);

       $('.fb-login-btn').hide(400);
     }
     );
  }