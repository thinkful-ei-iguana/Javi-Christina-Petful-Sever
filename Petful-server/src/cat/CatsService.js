const {Queue} = require('../Queue');
const {displayQ} = require('../Queue');

let cats = new Queue();

let catStore = [

  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Fluffy the bengal.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://i.pinimg.com/originals/a8/89/48/a8894847467aadbf5511f4ba4c6fea9f.jpg', 
    imageDescription: 'Cedrick the British Short Hair.',
    name: 'Cedrick',
    sex: 'Male',
    age: 3,
    breed: 'British Short Hair',
    story: 'Thrown on the street',
    adopted: false
  },
  {
    imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/c759deb/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa8%2F0a%2Fec3909ff44aaaffa64bfc771d828%2FPersian-AP-YAIRFN-645sm3614.jpg', 
    imageDescription: ' Ruby the Persian cat.',
    name: 'Ruby',
    sex: 'Female',
    age: 8,
    breed: 'Persian',
    story: 'Thrown on the street',
    adopted: false
  },
]

catStore.forEach(eachCat => {
  cats.enqueue(eachCat)
});

const CatsService = {
  getCats() {
    const displayCats = displayQ(cats);
    return displayCats;
  },
  adoptCat() {
    const aC = cats.dequeue();
    aC.adoped = true;
    cats.enqueue(aC);
    return displayQ(cats);
  }
};

  
  module.exports = CatsService;
 