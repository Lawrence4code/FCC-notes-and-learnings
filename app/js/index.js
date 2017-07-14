$(document).ready(function(){
	$('.site-header__menu-icon').click(function(){
		$(this).toggleClass('open');
    $(".site-header__menu-content").toggleClass('open')
	});
  $('site-logo').click(function() {
    alert("clicked");
  });
});
