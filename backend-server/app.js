require('./database/init');
const { app } = require('./configs/env.config');
const server = require('./configs/express.config');

server.use(require('./routes'))

server.listen(app.port, () => console.log(`Example app listening on port ${app.port}!`));