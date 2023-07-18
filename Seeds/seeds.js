const sequelize = require('../config/connection');
const { Player } = require('../models');

const playerData = require('./players.json');

const seedDatabase = async () => {
  //await sequelize.sync({ force: true });

  await Player.bulkCreate(playerData);

  process.exit(0);
};

seedDatabase();
