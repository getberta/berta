var express = require('express'),
    app = express(),
    port = 1010,
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
        extended: false
}));

app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('view cache', true);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.pug');
});

app.listen(port, () => {
    console.log('berta config running on port ', port)
})