const pgp = require('pg-promise')();


const farmacia = pgp({

    user: "postgres",
    host: "127.0.0.1",
    database: "farmacia",
    password: "cursodeti27!",
    port: 5432
})

module.exports = farmacia;