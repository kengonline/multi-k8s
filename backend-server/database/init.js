const dbClient = require('../configs/database.config');

dbClient.query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.log(err))