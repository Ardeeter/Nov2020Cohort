const express = require('express');
const app = express();

// public
app.use(express.static('public'))

// views
app.set('view engine', 'ejs')

//  routes (index & aboutus)
app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))



app.listen(3000, () => {

    console.log('listening on port 3000');
})