const mongoose = require('mongoose')
const Schema = mongoose.Schema

const temperatureSchema = new Schema({
    timestamp: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const Temperature = mongoose.model("Temperature", temperatureSchema)
module.exports = Temperature

