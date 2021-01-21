const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get('/', (req, res) => {

    res.send('Login')
    
})

module.exports = router