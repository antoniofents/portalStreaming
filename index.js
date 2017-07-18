
// Create Express webapp
var express = require('express');
var app = express();
require('dotenv').load();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(request,res){   
    res.redirect ('index.html');
});

io.on('connection', function(socket){
	socket.on('stream', function(image){
		socket.broadcast.emit('stream', image);
	});
});




var port = process.env.PORT || 443 ;
http.listen(port, "0.0.0.0", function() {
    console.log('Express server running on 0.0.0.0:' + port);
});
