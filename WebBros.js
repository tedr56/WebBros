var express = require('express');

var app = express()

app.get('/', function(req, res) {
    res.setHeader('Content-type', 'text/html');
    res.end('Vous êtes à l\'accueil');
});

app.get('/:num', function(req, res) {
    //res.setHeader('Content-type', 'text/html');
    res.render('num.ejs', {numpage: req.params.num});
});

app.listen(8080);
