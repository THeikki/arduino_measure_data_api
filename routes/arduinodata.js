const express = require('express')
const bodyParser = require('body-parser')
const ArduinoData = require('../models/arduinoData')
const router = express.Router();
router.use(bodyParser.json());

/*
    Get Arduino data values
*/

router.get("/", (req, res) => {
    ArduinoData.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json({message: error}))
})

/*
    Send Arduino data values
*/

router.post("/saveArduinoData", (req, res) => {
    const {timestamp, temperature, gas} = req.body

    const data = new ArduinoData({
        timestamp,
        temperature,
        gas
    })
    data.save()
    .then(() => res.status(200).json({message: "New data values added"}))
    .catch(error => res.status(400).json({message: error}))

})

/*
    Delete data value
*/

router.delete("/delete/:id", (req, res) => {
    ArduinoData.findByIdAndDelete(req.params.id, (error, result) => {
        if(result) {
            return res.status(200).json({message: "data values deleted!"})

        }
        else {
            return res.status(400).json({message: error})
        }
    })
})

/*
    Delete ALL Arduino data values
*/

router.delete("/", (req, res) => {
    ArduinoData.deleteMany() 
    .then(res.status(200).json({message: "Arduino data deleted!"}))
    .catch(error => res.status(400).json({message: error}))
      
})

module.exports = router