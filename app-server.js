const express = require('express');
const app = express();

let connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

const server = app.listen(3000);
const io = require('socket.io').listen(server);

// When new socket connects
io.sockets.on('connection', (socket) => {
    // Diconnect happens only once
    socket.once('disconnect', () => {
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log('Disconnected: %s sockets remaining', connections.length);
    });
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);
});

console.log('Polling Server is running port 3000');