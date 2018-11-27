$(document).ready(function() {
	$('.icon1').on('click', function() {
		var x = $(this);
		x.toggleClass('icon');

		x.find('.arrowUp').slideToggle();

		x.find('.arrowDown').slideToggle();
		x.find('.menu-toggle').slideToggle();
	});
	// .................
	$('.pageBtn').on('click', function() {
		event.preventDefault();
	});
	if (window.matchMedia('(min-width: 768px)').matches) {
	} else {
		/* the viewport is less than 400 pixels wide */
	}
	// ................
	$('.icon-top-left').on('click', function() {
		$('.body-left').css({ display: 'block', width: '35%' });
		console.log('a');
	});
	$('.close-left').on('click', function() {
		$('.body-left').css({ width: '0' });
	});
});
