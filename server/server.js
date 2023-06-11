const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require ('cors')
const app = express()
const pool = require('./db')

app.use((cors))

// get table todos(to-do's)

app.get('/todos', async (req, res) => {
    try{
      const todos =  await pool.query('SELECT * FROM todos')
      res.json(todos.rows)
    } catch(err) {
        console.log(err)
    }
})

app.listen(PORT, ( ) => console.log(`Server running on PORT ${PORT}`))