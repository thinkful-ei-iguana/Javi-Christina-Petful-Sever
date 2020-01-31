'use strict';

const store = require('./store');
const queue = require('./queue');


function dogQueueBuilder(){
  const dogsQueue = new queue();
  // const catssQueue = new queue();
  // const usersQueue = new queue();

  store['dogs'].forEach(dog => {
    dogsQueue.enqueue(dog);
  });

  return dogsQueue;
}

module.exports = dogQueueBuilder;