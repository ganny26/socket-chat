var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var connections = [];
var users = [];


server.listen(process.env.PORT || 3000);

console.log('server running on port 3000');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('send message', function(data) {
        io.sockets.emit('new message', { msg: data });
    });
});