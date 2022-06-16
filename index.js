'use strict';

const { sequelize, foodModel, clothesModel, indexModel } = require('./collections');
const server = require('./src/server');

// create all associated tables and make sure connection is good
sequelize.sync()
  .then(() => {
    console.log('Successful Connection!!!');
    // if you want to seed, be careful - this will happen every time you start your server
    // PeopleModel.create({name: 'Ryan'});
  })
  .catch(err => console.error(err));


server.start();
