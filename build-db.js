'use strict';

const models = require('./models');
const { beaches } = require('./seeders/data/beaches');
const { lifeguards } = require('./seeders/data/lifeguards');
const { castles } = require('./seeders/data/castles');
const { tools } = require('./seeders/data/tools');


models.sequelize.sync({force: true})
  .then ( () => {
    return models.Beach.bulkCreate(beaches)
  })
  .then ( () => {
    return models.Tool.bulkCreate(tools)
  })
  .then ( () => {
    return models.Lifeguard.bulkCreate(lifeguards)
  })
  .then ( () => {
    return models.Castle.bulkCreate(castles)
  })
  .then ( () => {
    return models.beachGuards
  })
  .then ( () => {
    process.exit();
  });