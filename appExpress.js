const express = require('express');
const { route } = require('./routes/users');

const app = express();

const practicingStatusRouter = require('./routes/practicingStatusRouter');
const usersRoter = require('./routes/users');

app.use('/status', practicingStatusRouter);
app.use('/users', usersRoter);

app.listen(4000);