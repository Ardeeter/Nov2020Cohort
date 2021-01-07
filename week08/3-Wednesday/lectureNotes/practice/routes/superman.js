const express = require('express');
const router = express.Router()

router.get('/super(wo)*man', (req, res) => {

    res.send('<h1>Superwoman > Superman</h1>')
    
})

module.exports = router
