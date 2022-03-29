$(document).ready(function () {
	$(".btn-navbar").click(function () {
		$("body").toggleClass("is-menu-open");
	});
	if ($(".popup-gallery").length > 0) {
		$(".popup-gallery").magnificPopup({
			delegate: "a",
			type: "image",
			tLoading: "Loading image #%curr%...",
			mainClass: "mfp-img-mobile",
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
	$(".gallery .slick").slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
	});
	$(".testimonials .slick").slick({
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
});
