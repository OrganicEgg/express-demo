const helpers = require('../helpers.js')

async function getUniversity(req, res) {
    await helpers.mysqlConnection.query('SELECT * from university', (err, rows, fields) => {
        if (err) throw err
        res.json(rows)
    })
}

async function showUniversity(req, res, columns, id) {
    await helpers.mysqlConnection.query('SELECT * from university WHERE ' + columns + ' = ' + id + ' LIMIT 1', (err, rows, fields) => {
        if (err) throw err.message
        res.json(rows)
    })
}

async function updateUniversityName(req, res, columns, id, name) {
    await helpers.mysqlConnection.query('UPDATE university SET name = "' + name + '" WHERE ' + columns + ' = ' + id, (err, rows, fields) => {
        if (err) throw err
        res.json(rows)
    })
}

module.exports = {
    getUniversity,
    showUniversity,
    updateUniversityName
}