const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Auto1234",
    database: "usergen",
    host: "localhost",
    port: 5432

});

module.exports = pool;