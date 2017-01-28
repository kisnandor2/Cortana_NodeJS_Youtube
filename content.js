var script = document.createElement('script');

var actualCode = '(' + function() { 
		const connection = new WebSocket('ws:localhost:8080');
		const player = document.getElementById('movie_player');
		connection.onmessage = function(message){
			switch (message.data){
				case 'start':
					player.playVideo();
					break;
				case 'stop':
					player.stopVideo();
					break;
				case 'pause':
					player.pauseVideo();
					break;
				case 'next':
					player.nextVideo();
					break;
				case 'prev':
					player.previousVideo()
					break;
				case 'up':
					player.setVolume(100);
					break
				case 'down':
					player.setVolume(0);
					break;
				default:
					console.log("No such operation found!", message);
			}
		}
	} + ')();'
;

script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);