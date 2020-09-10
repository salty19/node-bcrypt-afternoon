require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()
const PORT = 4000

app.use(express.json())

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}!!!`))