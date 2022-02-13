const express = require('express');
const app = express();

app.use(logger); //Everything after this will use the logger.

const practicingStatusRouter = require('./routes/practicingStatusRouter');
const usersRoter = require('./routes/users');

app.use('/status', practicingStatusRouter);
app.use('/users', usersRoter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(4000);