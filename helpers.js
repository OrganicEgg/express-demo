const mysql = require("mysql")
const mysqlConnectionOptions = {
    host: '127.0.0.1',
    database: 'test',
    user: 'root',
    password: '',
    port: '3307'
}

const mysqlConnection = mysql.createConnection(mysqlConnectionOptions)
mysqlConnection.connect()

module.exports = {
    mysqlConnection
}