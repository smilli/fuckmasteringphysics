$('.answer-button').click(function(){
	// Response is added as a child of an element added after div.buttons
	$response = $(this).parent().next().children('.responses')[0];
	if ($response.hasClass('correct')){
		// send message to play positive sound
		chrome.runtime.sendMessage('correct answer');

	} else {
		// send message to play negative sound
		chrome.runtime.sendMessage('incorrect answer');
		
	}
});