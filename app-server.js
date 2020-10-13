const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

const server = app.listen(3000);
const io = require('socket.io').listen(server);

// When new socket connects
io.sockets.on('connection', (socket) => {
    console.log('Connected: %s', socket.id);
});

console.log('Polling Server is running port 3000');