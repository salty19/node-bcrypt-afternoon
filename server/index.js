require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authController = require('./controllers/authController')


const app = express()
const PORT = 4000

const { CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
    })
)

app.post('/auth/register', authController.register)
app.post('/auth/login', authController.login)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('This is the DB and it is set up')
    app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}!!!`))
})
