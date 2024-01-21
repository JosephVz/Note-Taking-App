
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', "utf8"));
    res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', "utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    data.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(data));
    res.json(data);
});

// router.delete('/api/note/:id', (req, res) => {
//     let data = fs.readFileSync('db/db.json', "utf8")
//     const dataJSON = JSON.parse(data);
//     const newNotes = dataJSON.filter((note) => {
//         return note.id !== req.params.id;
//     });

//     fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
//     res.json("Deleted Note.")
// });

module.exports = router;