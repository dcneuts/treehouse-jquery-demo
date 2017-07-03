/**
 * Created by derek on 7/2/17.
 */
// Must use jQuery versus vanilla JS per plugin docs
$('.animsition').animsition({
	inClass: 'fade-in-right-lg',
	outClass: 'fade-out-right-lg',
	linkElement: 'header a',
	inDuration: 1000,
	outDuration: 500
});

// Customization for StickyJS plugin
$('.header').sticky();

$('.header').on('sticky-start', function() {
	$('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function() {
	$('.description').html('We build apps');
});