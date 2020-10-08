var express = require('express');
var app = express();
var fs = require('fs');
var port = 5000;
app.use(express.static('public'));

app.get('/home', (req, res, next) => {
    var fileStream = fs.createReadStream('index.html');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fileStream.pipe(res);
});
app.get('/article', (req, res, next) => {
    var fileStream = fs.createReadStream('article.html');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fileStream.pipe(res);
});
app.use('/', (req, res, next) => {
    res.redirect(301, '/home');
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});
app.use((err, req, res, next) => {
    console.log(`Error Occured ${err.message}`);
    res.status(500).send('Internal Server Error');
});

function serveFiles(req, res, next) {
    if (req.url == '/home' || req.url == '') {
        next();
    } else {
        app.use(serve(__dirname + '/public'));
    }
}
app.listen(port, () => console.log(`Server started at port ${port}`));