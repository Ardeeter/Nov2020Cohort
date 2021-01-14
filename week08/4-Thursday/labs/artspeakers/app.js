const express = require('express');
const app = express();
const io = require('socket.io');


// ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'))

//route references
app.use(require('./routes/index'))

app.use(require('./routes/speakers'))

app.use(require('./routes/feedback'))

app.use(require('./routes/api'))

app.use(require('./routes/chat'))






let server = app.listen(3000, () => {

    console.log("Listening on port 3000");
});

let io = socket(server);

io.on('connection', (socket) => {

    console.log("Client Connected");

    socket.emit('postMessage', {msg: "Hello from our backend"})

    socket.on('msgFromClient', (msgClient) => {

        io.emit('updateMessages', msg)
    })
})

