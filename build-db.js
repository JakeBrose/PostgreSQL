'use strict';

const models = require('./models');
const { beaches } = require('./seeders/data/beaches');
// let {shows} = require('./seeders/data/shows');
// let {users} = require('./seeders/data/users');



models.sequelize.sync({force: true})
  .then ( () => {
    return models.Beach.bulkCreate(beaches)
  })
  // .then ( () => {
  //   return models.Show.bulkCreate(shows)
  // })
  // .then ( () => {
  //   return models.User.bulkCreate(users)
  // })
  .then ( () => {
    process.exit();
  });