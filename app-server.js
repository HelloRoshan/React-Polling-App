const express = require('express');
const _ = require('underscore');
const app = express();

let connections = [];
let title = 'Untitled Presentation';
let audience = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

const server = app.listen(3000);
const io = require('socket.io').listen(server);

// When new socket connects
io.sockets.on('connection', (socket) => {
    // Diconnect happens only once
    socket.once('disconnect', () => {
        let member = _.findWhere(audience, { id: socket.id });
        if(member) {
            audience.splice(audience.indexOf(member), 1);
            io.sockets.emit('audience', audience);
            console.log('Left: %s', member.name, audience.length);
        }
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log('Disconnected: %s sockets remaining', connections.length);
    });

    socket.emit('welcome', {
        title
    });

    socket.on('join', (payload) => {
        console.log('Audience Joined: '+ payload.name)
        let newMember = {
            id: socket.id,
            name: payload.name
        };
        audience.push(newMember);
        // Broadcast to all
        io.sockets.emit('audience', audience);
        socket.emit('joined', newMember);
    });

    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);
});

console.log('Polling Server is running port 3000');