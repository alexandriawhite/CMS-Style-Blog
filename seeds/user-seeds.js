const { User } = require('../models');
const userData =
[
    {
      username: "Hannah",
      password: "password12345"
    },
    {
      username: "Ryan",
      password: "password12345"
    },
    {
      username: "Jessica",
      password: "password12345"
    },
    {
      username: "Jordan",
      password: "password12345"
    },
    {
      username: "Blake",
      password: "password12345"
    }
  ]
  

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;