const express = require('express');
const app = express();

const path = require('path')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rentMate');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("hello")
})

const port = 3000;
app.listen(port, () => {
    console.log(`Kia Kaha, listening on port ${port}`)
});