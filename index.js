const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
const helpers = require("./helpers.js")
const { getUniversity, showUniversity, updateUniversityName } = require("./services/services.js")
// const { university } = require("./models/university.js")

let university = []

// Cors Setup
const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Routes
app.get("/", (req, res) => {
    getUniversity(req, res)
})

// Show
app.get("/:id", async (req, res) => {
    await showUniversity(req, res, 'ID', parseInt(req.params.id))
})

// Update
app.get("/:id/update-name", async (req, res) => {
    await updateUniversityName(req, res, 'ID', parseInt(req.params.id), req.query.name)
})

app.listen(port, (error) => {
    if (error) console.log({ error })
    console.log("Server is listening! [Port: " + port + "]")
})  