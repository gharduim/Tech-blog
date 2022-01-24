const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'john'

    },
    {
        username: 'Jake',
        password: 'jake'
    },
    {
        username: 'gustavo',
        password: 'gustavo'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;