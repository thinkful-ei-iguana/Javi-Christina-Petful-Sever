'use strict';
const {PORT} = require('./src/config');
const app = require('./src/app');
const  dogQueueBuilder  = require('./src/dog-queue-builder');
const catQueueBuilder = require('./src/cat-queue-builder');


const dogs = dogQueueBuilder();
const cats = catQueueBuilder();

app.set('dogs', dogs);
app.set('cats', cats);

app.listen(PORT,()=>{
  console.log('Serving on 8000');
});