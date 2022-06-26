'use strict';

const express = require('express');
const { ClothesModel } = require('../models');

const router = express.Router();

// post
router.post('/clothes', async (req, res, next) => {
  let clothes = req.body;
  console.log(req.body);

  //query to the database
  let response = await ClothesModel.create(clothes);
  res.status(200).send(response);
});

// get
router.get('/clothes', async (req, res, next) => {
  let allClothes = await ClothesModel.findAll();
  res.status(200).send(allClothes);
});

// get one
router.get('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneClothes = await ClothesModel.findOne({where: { id }});
  res.status(200).send(oneClothes);
});

// put
router.put('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;

  await ClothesModel.update(req.body, {where: { id }});
  let updatedClothes = await ClothesModel.findOne({where: { id }});
  res.status(200).send(updatedClothes);
});

// delete
router.delete('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedClothes = await ClothesModel.findOne({where: { id }});

  await ClothesModel.destroy({where: { id }});
  res.status(200).send(deletedClothes);
});

module.exports = router;








// 'use strict';

// const express = require('express');
// const { ClothesModel } = require('../models');

// const router = express.Router();

// router.get('/clothes', async (req, res, next) => {
//   try {
//     const allRecords = await ClothesModel.findAll({});
//     res.status(200).send(allRecords);
//   } catch (e) {
//     res.status(404).send('Not found');
//   }
// });

// router.get('/clothes/:id', async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const selectedRecord = await ClothesModel.findOne({where: { id }});
//     res.status(200).send(selectedRecord);
//   } catch (e) {
//     res.status(404).send('Not found');
//   }
// });

// router.post('/clothes', async (req, res, next) => {
//   const clothes = req.body;
//   try {
//     let response = await ClothesModel.select(clothes);
//     console.log('response: ', response);
//     res.status(200).send(response);
//   } catch (e) {
//     res.status(404).send('Cannot perform this method');
//   }
// });

// router.put('/clothes/:id', async (req, res, next) => {
//   const { id } = req.params;
//   const updatedRecord = req.body;
//   try {
//     const selectedRecord = await ClothesModel.findOne({where: { id }});
//     await selectedRecord.update(updatedRecord);
//     await selectedRecord.save();
//     res.status(200).send(selectedRecord);
//   } catch (e) {
//     res.status(404).send('Cannot perform this method');
//   }
// });

// router.delete('/clothes/:id', async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const recordToDelete = await ClothesModel.findOne({where: { id }});
//     await recordToDelete.destroy();
//     res.status(200).send(recordToDelete);
//   } catch (e) {
//     res.status(404).send('Cannot perform this method');
//   }
// });

// module.exports = router;
