const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get('/login', (req, res) => {

    res.render('login')
    
})

module.exports = router