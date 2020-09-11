require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authController = require('./controllers/authController')
const treasureController = require('./controllers/treasureController')
const auth = require('./middleware/authMiddleware')


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
app.get('/auth/logout', authController.logout)

app.get('/api/treasure/dragon', treasureController.dragonTreasure)
app.get('/api/treasure/user', auth.usersOnly, treasureController.getUserTreasure)


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
