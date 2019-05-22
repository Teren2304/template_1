$('.menu__item .link').click(function(){
	event.preventDefault();
	var active = $(this).attr('href');

	$('.section').removeClass('active');
	if ($(this).hasClass('active')) {
		$(active).removeClass('active');
		$('.footer').hide();
		$('.close').hide();
	}
	else{
		$(active).addClass('active');
		$('.footer').show();
		$('.close').show();
	}
});

$('.close').click(function(){
	$('.section').removeClass('active');
	$('.footer').hide();
	$('.close').hide();
});