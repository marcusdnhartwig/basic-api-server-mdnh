'use strict';

const express = require('express');
const { clothesModel } = require('../models/clothes');

const router = express.Router();


router.post('/clothes', async (req, res, next) => {
  let clothes = req.body;
  console.log(req.body);

  //query to the database
  let response = await clothesModel.create(clothes);
  res.status(200).send(response);
});

module.exports = router;
