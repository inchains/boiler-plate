const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key');

// application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(
    //'mongodb+srv://inchains:a6321913.@goool.qrgqh.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    //'mongodb+srv://inchains:a6321913.@cluster0.sen0y.mongodb.net/?retryWrites=true&w=majority', 
    config.mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true//, useCreateIndex: true, useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host : 'localhost', 
//     user: 'root',
//     password: '19131913',
//     daabase: 'node_react'
// });
// con.connect(function(err) {
//     if(err) throw err;
//     console.log('MYSQL Connected');
// })

app.get('/', (req, res) => res.send('Hello world! aaaaa1'))

app.post('/register', (req, res) => {

    // 회원가입 
    const user = new User(req.body)
    user.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))