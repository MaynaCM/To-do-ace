const PORT = process.env.PORT ?? 8000
const express = require('express')
const {v4 : uuidv4} = require('uuid')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())
app.use(express.json())
// get table todos(to-do's)

app.get('/todos/:userEmail', async (req, res) => {
    const { userEmail } = req.params
    console.log(userEmail)
    try{
      const todos =  await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
      res.json(todos.rows)
    } catch(err) {
        console.log(err)
    }
})

//create a new to-do
app.post('/todos', async (req,res) => {
  const{user_email, title, tasktext , progress, date} =  req.body
  console.log(user_email, title, tasktext , progress, date)
  const id = uuidv4()
  try{
    const newToDo = await pool.query(`INSERT INTO todos(id, user_email, title, tasktext, progress, date) VALUES ($1, $2, $3, $4, $5, $6)`,
      [id, user_email, title, tasktext, progress, date]) 
    res.json(newToDo)   
  }catch(err){
    console.error(err)
  }
})

//edit to-do
app.put('/todos/:id', async(req, res) => {
  const{id} = req.params
  const{user_email, title, tasktext , progress, date} =  req.body
  try {
    const editToDo = await pool.query('UPDATE todos SET user_email = $1, title = $2, tasktext = $3, progress = $4, date = $5 WHERE id = $6',
      [user_email, title, tasktext, progress, date, id]) 
    res.json(editToDo)
  } catch (err) {
    console.error(err)
  }

})

//delete a task
app.delete('/todos/:id', async(req, res) =>{
  const { id } = req.params
  try{
    const deleteTodo = await pool.query('DELETE FROM todos WHERE id = $1', [id])
    res.json(deleteToDo)
  } catch (err){
    console.error(err)
  }
})

app.listen(PORT, ( ) => console.log(`Server running on PORT ${PORT}`))