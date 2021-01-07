

const express = require('express');
const app = express();

app.use(express.static('public'))

//subroutes

app.use(require('./routes/index'))

app.use(require('./routes/about'))

app.use(require('./routes/cats'))

app.use(require('./routes/dogs'))

app.use(require('./routes/batman'))

app.use(require('./routes/superman'))

app.use(require('./routes/contact'))

app.use(require('./routes/dogData'))

app.use(require('./routes/dogAPI'))

app.use(require('./routes/flights'))

app.use(require('./routes/calc'))

app.listen(3000, () => {
    console.log("'Running on port 3000");
})



