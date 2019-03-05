const { Pool } = require('pg')
const { database } = require('./env.config');

const pgClient = new Pool({
    host: database.host,
    port: database.port,
    database: database.name,
    user: database.username,
    password: database.password
});

pgClient.on('error', () => {
    console.log("Postgres connection is lost.");
});

module.exports = pgClient;