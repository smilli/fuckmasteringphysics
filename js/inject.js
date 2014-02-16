$('.answer-button').click(function(){
	// Response is added as a child of an element added after div.buttons
	$response = $(this).parent().next().children('.responses')[0];
	if ($response.hasClass('correct')){
		// play positive sound

	} else {
		// play negative sound
		
	}
});