// Зависимости
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/dima', express.static(__dirname + '/static'));

// Маршруты
app.get('/', function(request, response) {
    console.log('get request')
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
server.listen(5000, function() {
    console.log('Запускаю сервер на порте 5000');
});

// Обработчик веб-сокетов
io.on('connection', function(socket) {
    console.log('Client connected!')
});

setInterval(function() {
    io.sockets.emit('message', 'hi!');
}, 1000);