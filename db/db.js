const mongoose = require('mongoose')

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
})