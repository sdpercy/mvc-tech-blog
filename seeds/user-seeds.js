const { User } = require('../models');

const userData = [
    {
        username: "scott_percy",
        email: "scottdpercy@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Roberta_Newton",
        email: "robertanewton@gmail.com",
        password: "p@ssword2"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;