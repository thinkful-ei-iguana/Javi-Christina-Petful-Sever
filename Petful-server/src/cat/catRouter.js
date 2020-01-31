const express = require('express');
const catRouter = express.Router();
const CatsService = require('./CatsService');

catRouter
.route('/')
  .get((req, res) => {
    const cats = CatsService.getCats();
    res.json(cats);
  })
  .delete((req, res) => {
    res.status(200).send(CatsService.adoptCat());
  });

module.exports = catRouter;