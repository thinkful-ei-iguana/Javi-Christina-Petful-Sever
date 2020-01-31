'use strict';

const store = require('./store');
const queue = require('./queue');


function catQueueBuilder(){
  const catsQueue = new queue();
  // const catssQueue = new queue();
  // const usersQueue = new queue();

  store['cats'].forEach(cat => {
    catsQueue.enqueue(cat);
  });

  return catsQueue;
}

module.exports = catQueueBuilder;