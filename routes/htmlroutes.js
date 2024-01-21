
const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/assets/index.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/assets/notes.html'))
});

module.exports = router;
