var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);

console.log('server running on port 3000');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});