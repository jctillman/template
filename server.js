var express = require('express');

var app = express();

app.use(express.static('../notepad'));

app.listen(3000);