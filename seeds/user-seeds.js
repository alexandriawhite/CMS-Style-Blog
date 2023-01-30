const { User } = require('../models');
const userData =
[
    {
      username: "Sal",
      twitter: "Sal",
      github: "Sal",
      email: "sal@hotmail.com",
      password: "password12345"
    },
    {
      username: "Lernantino",
      twitter: "Lernantino",
      github: "Lernantino",
      email: "lernantino@gmail.com",
      password: "password12345"
    },
    {
      name: "Amiko",
      twitter: "Amiko",
      github: "Amiko",
      email: "amiko2k20@aol.com",
      password: "password12345"
    },
    {
      name: "Jordan",
      twitter: "Jordan",
      github: "Jordan",
      email: "jordan99@msn.com",
      password: "password12345"
    },
    {
      name: "Blake",
      twitter: "Blake",
      github: "Blake",
      email: "the_blake@yahoo.com",
      password: "password12345"
    }
  ]
  

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;