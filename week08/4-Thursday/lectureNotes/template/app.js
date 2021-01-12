const express = require('express');
const app = express();

app.set('view engine', 'ejs')

// app.set('views', 'v') if you named views folder something else

app.use(express.static('public'));

app.use(require('./routes/index'))

app.use(require('./routes/about'))



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})