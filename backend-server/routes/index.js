const router = require('express').Router();

const dbClient = require('../configs/database.config')
const redis = require('../configs/redis.config')

router.get('/', (req, res) => {
    res.send("Hello");
});

router.get('/values/all', async (req, res) => {
    const values = await dbClient.query("SELECT * FROM values");

    res.send(values.rows);
});

router.get('/values/current', async (req, res) => {
    const values = await redis.client.hgetallAsync('values');

    res.send(values);
});

router.post('/values', async (req, res) => {
    const index = parseInt(req.body.index, 10);

    if (index > 40) {
        return res.status(422).send("Index too high");
    }

    redis.client.hset('values', index, "Nothing yet!");
    redis.publisher.publish('insert', index);
    dbClient.query("INSERT INTO values(number) VALUES($1)", [index]);

    res.send({ working: true })
})

module.exports = router;