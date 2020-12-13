const express = require('express')
const app =  express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT =process.env.PORT || 3006
// const mongoose = require('mongoose')
// const url ="mongodb://localhost/pizza";

// Database connection
// mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('Database connected...');
// }).catch(err => {
//     console.log('Connection failed...')
// });

// Assets

app.use(express.static('public'))

// set template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

 require('./routes/web')(app)


app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`)
})