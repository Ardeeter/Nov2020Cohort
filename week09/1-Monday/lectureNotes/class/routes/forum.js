const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get('/forum', (req, res) => {
    
    res.render('forum')
})

router.post('/forum', (req, res) => {

    // let name = req.body.name;
    // let message = req.body.message;

    // res.send('data')

    res.status(200).json({name: req.body.name, message: req.body.message})
    
})

module.exports = router