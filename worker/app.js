const redis = require("redis");
const EnvConfig = require('./configs/env.config')

const client = redis.createClient({
    host: EnvConfig.redis.host,
    port: EnvConfig.redis.port,
    retry_strategy: () => 1000
});

const sub = client.duplicate();

const fib = (index) => {
    if (index <= 1) {
        return 1;
    }

    return parseInt(fib(index - 1), 10) + parseInt(fib(index - 2), 10);
}

sub.on('message', (channel, message) => {
    client.hset('values', message, fib(parseInt(message), 10))
})

sub.subscribe('insert');