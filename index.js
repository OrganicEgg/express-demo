const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const port = 3000
const app = express()
const { university } = require("./models/university.js")

// Cors Setup
const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

// Mysql Connection
const mysqlConnectionOptions = {
    host: '127.0.0.1',
    database: 'test',
    user: 'root',
    password: 'admin',
}
const mysqlConnection = mysql.createConnection(mysqlConnectionOptions)
mysqlConnection.connect()

// Mysql Queries
mysqlConnection.query('SELECT * from users', (err, rows, fields) => {
    if (err) throw err
    console.log('The solution is: ', rows)
})
mysqlConnection.end()


// Routes
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/university", (req, res) => {
    res.json(university)
})

app.listen(port, (error) => {
    if (error) console.log({ error })
    console.log("Server is listening! [Port: " + port + "]")
})  