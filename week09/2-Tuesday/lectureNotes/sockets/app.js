const express = require('express');
const app = express();
const socket = require('socket.io');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('index')
})

let server = app.listen(3000, () => {

    console.log("listening on Port 3000");
})

let io = socket(server);


io.on('connection', (socket) => {
    
    // this msg will broadcast out to each connected client

    console.log('Client connected');
    socket.emit('chatMessage', {msg: "Hello from our backend"})

    socket.on('msgFromClient', (msgClient) =>{

        // broadcasting out to all connected clients
        io.emit('msgFromServer', msgClient)
    })
})