const express = require('express');

const app = express();

app.get('/errorRoute', (req, res) => {
    res
    .status(500)
    .json({message: 'Error'});
});

app.get('/successRoute', (req, res) => {
    res.status(200)
    .status(200)
    .json({message: 'Success'});
});

app.get('/notFoundRoute', (req, res) => {
    res
    .status(404)
    .json({message: 'Notfound'});
});

app.listen(4000);