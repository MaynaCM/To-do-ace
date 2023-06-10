const PORT = process.env.PORT ?? 8080
const express = require('express')
const app = express()
const pool = require('./db')

// get table todos(to-do's)
app.get('/todos', async (req, res) => {
    const userEmail = "a@test.com"
    
    try{
      const todos =  await pool.query('SELECT * FROM todos WHERE user_emai; = $1', [userEmail])
      res.json(todos.rows)
    } catch(err) {
        console.log(err)
    }
})

app.listen(PORT, ( ) => console.log(`Server running on PORT ${PORT}`))