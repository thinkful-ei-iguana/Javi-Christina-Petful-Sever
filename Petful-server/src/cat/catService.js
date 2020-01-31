'use strict';
const catService = {
  // get next cat: store.dequeue;
  // if user clicks adopt, dequeue. 
  adoptCat(req){
    let catsQueue = req.app.get('cats');
    return catsQueue.dequeue();
  },
  // get all cats: generate an array of objects, return that.
  getAllCats(req) {
    const cats = [];
    const catsQueue = req.app.get('cats');

    if(catsQueue.first === null){
      return [];
    }

    let curr = catsQueue.first;
    while(curr !== null){
      cats.push(curr.value);
      curr = curr.next;
    }
    
    return cats;
  }
  // insert cat: store.enqueue

};

module.exports = catService;