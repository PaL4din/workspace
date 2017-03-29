var http = require('http');

var server = http.createServer();
server.listen(8078,function(){
    console.log('Server Start');
});

server.on('connection', function(){
    console.log('Client Connection');
});

server.on('close', function(){
    console.log('Server close');
});