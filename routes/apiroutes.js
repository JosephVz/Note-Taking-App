
const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
    const data = await JSON.parse(fs.readFileSync('db/db.json'));
    res.json(data);
});

router.post('/api/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync('db/db.json'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        // id:
    };

    data.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(data));
    res.json(data);
});