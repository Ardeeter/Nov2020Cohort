const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

router.get('/', (req, res) => {

    let pageSpeakers = dataFile.speakers;
    let pagePhotos = [];

    pageSpeakers.forEach(speakerObj => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })

    console.log(pagePhotos);

    res.render('index', {
        artwork: pagePhotos,
        pageTitle: "Rouw Meetups",
        pageID: 'home'
    });
    
})

module.exports = router