const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const helmet = require('helmet');
const catRouter = require('./cat/catRouter');
const dogRouter = require('./dog/dogRouter');

const { NODE_ENV, CLIENT_ORIGIN } = require('./config');
const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

  
const app = express();
app.use(morgan(morganOption))
app.use(cors({ origin: CLIENT_ORIGIN }));

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.use('/api/cats',catRouter)
// app.use('/api/dogs',dogRouter)

app.get('/', (req, res) => {
  res.send('Hello Express!');
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

app.listen(8000,()=>{
  console.log('Serving on 8000');
});