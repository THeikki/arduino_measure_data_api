const mongoose = require('mongoose')
const Schema = mongoose.Schema

const arduinoDataSchema = new Schema({
    timestamp: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    gas: {
        type: Number,
        required: true
    }
})

const ArduinoData = mongoose.model("ArduinoData", arduinoDataSchema)
module.exports = ArduinoData

