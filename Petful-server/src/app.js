'use strict';

const express = require('express');
const cors = require('cors');
const catRouter = require('./cat/catRouter');
const dogRouter = require('./dog/dogRouter');
// const queueBuilder = require('./queue-builder');

const app = express();
app.use(cors());
// app.use(queueBuilder);

app.use('/api/cat', catRouter);
app.use('/api/dog', dogRouter);


// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


module.exports = app;