'use strict';
// const  queueBuilder  = require('../dog-queue-builder');
// const queue = require('../../server');
// const app = require('../app');

// const dogService = {
//   // get next dog: store.dequeue;
//   // if user clicks adopt, dequeue. 
//   adoptDog(){
//     let dogsQueue = queueBuilder();
//     return dogsQueue.dequeue();
//   },
//   // get all dogs: generate an array of objects, return that.
//   getAllDogs() {
//     const dogs = [];
//     const dogsQueue = queueBuilder();

//     if(dogsQueue.first === null){
//       return [];
//     }

//     let curr = dogsQueue.first;
//     while(curr !== null){
//       dogs.push(curr.value)
//       curr = curr.next;
//     }
    
//     return dogs;
//   }
//   // insert dog: store.enqueue

// };

const dogService = {
  // get next dog: store.dequeue;
  // if user clicks adopt, dequeue. 
  adoptDog(req){
    let dogsQueue = req.app.get('dogs');
    return dogsQueue.dequeue();
  },
  // get all dogs: generate an array of objects, return that.
  getAllDogs(req) {
    const dogs = [];
    const dogsQueue = req.app.get('dogs');

    if(dogsQueue.first === null){
      return [];
    }

    let curr = dogsQueue.first;
    while(curr !== null){
      dogs.push(curr.value);
      curr = curr.next;
    }
    
    return dogs;
  }
  // insert dog: store.enqueue

};


module.exports = dogService;