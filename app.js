const express = require('express')
require('dotenv').config({ path: '.env' });
const port = process.env.PORT
const userRouter = require('./routers/user')
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

//app.get('/', (req, res) => res.send('Hello World whats up!'))
app.get('/', (req, res) => res.send('Hello World!'))
