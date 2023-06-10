const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()

// get table todos(to-do's)
app.get('/todos', (req, res) => {
    try{
        await
    } catch(err) {
        console.log(error)
    }
})

app.listen(PORT, ( ) => `Server running on PORT ${PORT}`)