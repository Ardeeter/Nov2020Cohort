const express = require('express');
const router = express.Router()

router.get('/cats?', (req, res) => {

    res.send('<h1>Cats are cool</h1>')
    
})

module.exports = router