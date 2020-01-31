'use strict';

const express = require('express');
const catRouter = express.Router();
const catService = require('./catService');

catRouter
  .route('/')
  .get((req,res, next) => {
    // console.log(catService.getAllcats())
    res.json(catService.getAllCats(req));
  })
  .delete((req, res, next) => {
    res.json(catService.adoptCat(req));
  });


// dogRouter.get('/', (req, res, next) => {
//   console.log(dogService)
//   res.json(dogService.getAllDogs())
// })


module.exports = catRouter;