var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    ejs = require('ejs');

const port = 8080;

var app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + "/public")));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(port);
