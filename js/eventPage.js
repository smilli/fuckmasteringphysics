chrome.tabs.onUpdated.addlistener(
	function(id, info, tab){
		if (info.url.indexOf('masteringphyiscs')!=-1){
			chrome.pageAction.show(tab.id);
		}
	}
)


chrome.runtime.onMessage.addListener(
	function (request){
		if (request == 'correct answer'){
			play('../audio/positive.mp3')
		} else if (request == 'incorrect answer'){
			play('../audio/negative.mp3')
		}
	}
);


function play(url){
	var audio = new Audio(url);
	audio.load();
	audio.play();
}