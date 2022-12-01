$(document).ready(function () {
	$("a[href*=\\#]:not([href=\\#])").not('.j-modal').click(function (e) {
		e.preventDefault();
		var target = $(this.hash);
		target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
		$("html,body").animate(
			{
				scrollTop: target.offset().top,
			},
			1000
		);
		return false;
	});
	$('.btn-navbar').click(function () {
		$('body').toggleClass('is-menu-open');
	});
	if ($('.popup-gallery').length > 0) {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				// titleSrc: function (item) {
				// 	return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
				// },
			},
		});
	}
	$('.order-menu .slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplay: false,
		infinite: true,
		variableWidth: true,
	});
	$('.gallery .slick').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
	});
	$('.testimonials .slick').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	
	$('.j-heading').click(function (e) {
		$(this).toggleClass('is-open').next('.j-content').slideToggle();
	});
	$('.tabs li').click(function () {
		var num = $('.tabs li').index(this);
		$('.tab-content').hide();
		$('.tab-content').eq(num).show();
		$('.tabs li').removeClass('is-select');
		$(this).addClass('is-select');
	});
	if ($('.j-modal').length > 0) {
		$('.j-modal').magnificPopup({
			type: 'inline',
			closeOnBgClick: false,
			closeOnContentClick: false,
			closeBtnInside: true,
			showCloseBtn: true,
		});
	}
});
