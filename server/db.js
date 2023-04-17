// Connecting database to server

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "mishoOSGZ@1614",
    host: "localhost",
    port: 5432,
    database: "taskitdb"
});

module.exports = pool;