const express = require('express')
const app = express()
const port = process.env.port || 5000

require('./db')

var cors = require('cors')
app.use(cors())
app.use(express.json())

const temperatureRoute = require("./routes/temperatures");

app.use("/api/arduinoData/temperatures", temperatureRoute)

app.get('/api/arduinoData', (req, res) => {
  res.send('Welcome Arduino measure data API')
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})