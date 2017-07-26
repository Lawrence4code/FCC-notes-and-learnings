$(document).ready(function(){
	$('.foundation-section').waypoint(function (direction) {
			if (direction === 'down') {
					$('nav').addClass('sticky-navbar');
			} else {
					$('nav').removeClass('sticky-navbar');
			}
	}, {
			offset: '80px;'
	});

	if(window.innerWidth <= 480) {
		$('.site-header__menu-icon').click(function(){
			$(this).toggleClass('open');
	    $('.site-header__menu-content').toggleClass('open')
		});

		$('.btn-hero').click(function(){
			$('html, body').animate({scrollTop: $('.form-section').offset().top + 30},1000)
		});
		$('.home').click(function(){
			$('html, body').animate({scrollTop: $('.site-header').offset().top},1000)
		});
		$('.foundation-link').click(function(){
			$('html, body').animate({scrollTop: $('.foundation-section').offset().top + 5},1000)
		});
		$('.services-link').click(function(){
			$('html, body').animate({scrollTop: $('.services-section').offset().top},1000)
		});
		$('.projects-link').click(function(){
			$('html, body').animate({scrollTop: $('.projects-section').offset().top + 14},1000)
		});

	} else {
		$('.btn-hero').click(function(){
			$('html, body').animate({scrollTop: $('.form-section').offset().top + 30},1000)
		});
		$('.home').click(function(){
			$('html, body').animate({scrollTop: $('.site-header').offset().top},1000)
		});
		$('.foundation-link').click(function(){
			$('html, body').animate({scrollTop: $('.foundation-section').offset().top - 80},1000)
		});
		$('.services-link').click(function(){
			$('html, body').animate({scrollTop: $('.services-section').offset().top - 60},1000)
		});
		$('.projects-link').click(function(){
			$('html, body').animate({scrollTop: $('.projects-section').offset().top - 65},1000)
		});
	};

});
