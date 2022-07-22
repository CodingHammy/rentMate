const express = require('express');
const app = express();
const path = require('path')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rentMate');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("home");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Kia Kaha, listening on port ${port}`)
});