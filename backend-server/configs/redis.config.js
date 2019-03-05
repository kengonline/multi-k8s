const redis = require('redis');
const bluebird = require('bluebird');

const EnvConfig = require('./env.config')
bluebird.promisifyAll(require("redis"));

const client = redis.createClient({
    host: EnvConfig.redis.host,
    port: EnvConfig.redis.port,
    retry_strategy: () => 1000
});

const publisher = client.duplicate();

module.exports = {
    client,
    publisher
};