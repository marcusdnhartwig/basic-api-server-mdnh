'use strict';

const express = require('express');
const { foodModel } = require('../models/food');

const router = express.Router();


router.post('/food', async (req, res, next) => {
  let person = req.body;
  console.log(req.body);

  //query to the database
  let response = await foodModel.create(person);
  res.status(200).send(response);
});

module.exports = router;
