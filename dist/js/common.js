;
$('document').ready(function() {

	// Top HEADER - Slider settings

	$(function(){	

		$('.header-slider').bxSlider({
			auto: true,
			mode: 'fade',
			captions: false,
			pause: 8000,
			infiniteLoop: true,			
		});

		$('.bx-wrapper').removeAttr("style");
		$('.bx-viewport').removeAttr("style");

	});

	// Top HEADER - Min Manu settings

	// <---- show manu ----> //

	$('.header-top-line__menu--btn').on('click', function(e) {

		e.preventDefault();
		$('.header-min-menu').toggleClass('header-min-menu-active');
		$('.bx-prev').css('z-index', '50').css('transition', '0.1s');
		$('.bx-next').css('z-index', '80').css('transition', '0.1s');

	});

	// <---- hide manu ----> //

	$('.header-min-menu__close').on('click', function(e) {
		e.preventDefault();
		$('.header-min-menu').removeClass('header-min-menu-active');
		$('.bx-prev').css('z-index', '80').css('transition', '2s');
		$('.bx-next').css('z-index', '80').css('transition', '2s');
	});

	// Top HEADER - Search form settings

	$('.header-top-line__second-line--search-button').on('click', function(e) {
		e.preventDefault();
		$('.header-top-line__second-line--search').toggleClass('header-top-line__second-line--search-active');
		$('.header-top-line__first-line--tel-number').toggleClass('header-top-line-opacity');
		$('.header-top-line__first-line--user-menu').toggleClass('header-top-line-opacity');
		$('.header-top-line__logo').toggleClass('header-top-line-opacity');
		$('.header-top-line__second-line--search-button').toggleClass('header-top-line__second-line--search-button-active');
	});

	// Top HEADER - Catalog settings

	// <---- content columns width if 2 item in 3 columns ----> //

	// if($(window).width() < 480) {

	// 	var catalogItem = $('.header-content__items--item').length;

	// 	for(var i = 0; i < catalogItem; i++) {

	// 		i++
	// 		i++

	// 		var res = i - catalogItem;

	// 		if (res == 0)

	// 			$('.header-content__items--item')
	// 			.last()
	// 				.css('width', '140px')
	// 				.css('margin-left', '50px')
			
	// 			.prev()
	// 				.css('width', '140px');

	// 	};		

	// };

});