
const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'))
});

module.exports = router;