const Pool = require('pg').Pool
require('dotenv').config()


const pool = new Pool({
    user: 'may',
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORTY,
    database:'todoapp'
})

module.exports = pool