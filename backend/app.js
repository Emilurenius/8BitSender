// All external modules are loaded in:
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")
const cors = require("cors")
const gpio = require('onoff').Gpio


// Reading input from terminal start
const port = parseInt(process.argv[2] || 3000)
console.log(`${port} registered as server port`)
// Reading input from terminal end


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors()) // Making sure the browser can request more data after it is loaded on the client computer.


app.use(express.static(path.join(__dirname, 'index')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index', 'index.html'))
})

app.post("/setpins", async (req, res) => {
    const bits = { b0, b1, b2, b3, b4, b5, b6, b7 } = req.body
    console.log(bits)
    for (let i = 0; i < Object.keys(bits).length; i++) {
        console.log(bits[Object.keys(bits)[i]])
    }
    res.send(bits)
})


app.listen(port, () => console.log(`Listening on ${port}`))