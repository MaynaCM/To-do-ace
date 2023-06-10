const Pool = require('pg').Pool


const pool = new Pool({
    user: 'maycm',
    password: 'May06',
    host: 'localhost',
    port: 5432,
    database:'todoapp'
})

module.exports = pool