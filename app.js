const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const { connectToDb, getDb } = require('./db');
var db;

connectToDb((e) => {
    if (e) {
        app.listen(PORT, () => {
            console.log('app listening on port', PORT);
        });
    };
});

app.get('/', (req, res) => {
    let folder = []
    db.collection('folder')
    .find()
    .sort({ name: 1 })
    .forEach(fold => folder.push(fold))
    .then(() => {
        res.status(200).json(folder);
    })
    .catch((e) => {
        res.status(500).json({ error: 'Could not fetch the document' });
    });
});