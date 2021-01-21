const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get('/registration', (req, res) => {

    res.send('Registration')
    
})

module.exports = router