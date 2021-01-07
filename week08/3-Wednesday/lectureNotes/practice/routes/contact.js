const express = require('express');
const router = express.Router()

router.get('/contact/:name', (req, res) => {

    let userName = req.params.name

    console.log(userName);
    res.send(`<h1>Hello there ${userName}</h1>`)
})

module.exports = router

