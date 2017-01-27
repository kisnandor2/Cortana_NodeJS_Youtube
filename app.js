const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
var globalWS = undefined;

wss.on('connection', function connection(ws) {
  if (globalWS == undefined){
  	globalWS = ws;
  	console.log("Connected");
  }
});

console.log("WebSocketServer running!");

const express = require('express');
let app = express();

app.use('/start', function(req, res){
	globalWS.send('start');
	console.log('start');
	res.send('ok')
})

app.use('/stop', function(req, res){
	globalWS.send('stop');
	console.log('stop');
	res.send('ok');
})

app.use('/pause', function(req, res){
	globalWS.send('pause');
	console.log('pause');
	res.send('ok');
})

app.use('/next', function(req, res){
	globalWS.send('next');
	console.log('next');
	res.send('ok');
})

app.use('/prev', function(req, res){
	globalWS.send('prev');
	console.log('prev');
	res.send('ok');
})

app.use('/up', function(req, res){
	globalWS.send('up');
	console.log('up');
	res.send('ok');
})

app.use('/down', function(req, res){
	globalWS.send('down');
	console.log('down');
	res.send('ok');
})

app.listen(8081)
