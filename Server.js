var express = require("express");
var path = require('path');

var app = express();
app.set('view engine', 'ejs');

var port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/:id', function(req, res) {
    res.render(req.params.id);
});

app.use(function(err, req, res, next) {
	res.status(404).render('404');
});

app.listen(port);