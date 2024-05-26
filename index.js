var express = require('express');
var app = express();
var router = require('./router');
var booksRouter = require('./books');

app.use(express.json());
app.use(express.static('public'))
app.use('/router',router);
app.use('/books',booksRouter);

app.listen(3000,function () {
    console.log('3000port web server');
});