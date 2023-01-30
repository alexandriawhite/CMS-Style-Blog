const sequelize = require('../config/connection');
const { User } = require('../models');
const seedUsers = require('./userData.json');
const seedPost = require('./post-seeds');
const seedComments = require('./comment-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPost();
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedComments();
  console.log('\n----- DATABASE SYNCED -----\n')

  process.exit(0);
};

seedDatabase();
