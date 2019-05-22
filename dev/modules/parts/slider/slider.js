$('.slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	arrows: false,
	responsive: [
	{
		breakpoint: 567,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}]
});