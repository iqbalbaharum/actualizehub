var express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs');

const port = 3000;

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(port);
