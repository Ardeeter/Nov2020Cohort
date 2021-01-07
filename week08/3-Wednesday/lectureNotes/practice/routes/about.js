
const express = require('express');
const router = express.Router()

router.get('/about', (req, res) => {

    res.send(`
    
    <link rel="stylesheet" href="css/global.css" >
    <h1>About Us Page</h1>
    
    <script></script>

    `)
})

module.exports = router