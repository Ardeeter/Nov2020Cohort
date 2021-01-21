const express = require('express');
const app = express();
var cookieSession = require('cookie-session');
const helmet = require('helmet');

app.use(cookieSession({
    name: 'session',
    keys: ['lsdjfs;ldjs;lkjdl;skdjf;lsdkjf'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

// views
app.set('view engine', 'ejs');

// public folder
app.use(express.static('public'));
app.use(helmet());


// sub-routes
app.use(require('./routes'));

app.use(require('./routes/login'));

app.use(require('./routes/registration'));



app.listen(3000, () => {
    console.log('Listening on 3000');
})