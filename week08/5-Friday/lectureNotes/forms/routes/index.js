const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended: false}));
router.use(express.json())

router.get('/', (req, res) => {
    
    res.render('index')
})

router.post('/', (req, res) =>{

    let firstName = req.body.fName;
    let lastName = req.body.lName;

    console.log(firstName, lastName);
    res.send(`${firstName} ${lastName}`)
})

module.exports = router