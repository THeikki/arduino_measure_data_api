const express = require('express')
const bodyParser = require('body-parser')
const Temperature = require('../models/temperature')
const router = express.Router();
router.use(bodyParser.json());

/*
    Get temperatures
*/

router.get("/", (req, res) => {
    Temperature.find()
    .then(temperatures => res.status(200).json(temperatures))
    .catch(error => res.status(400).json({message: error}))
})

/*
    Send temperature
*/

router.post("/saveTemperature", (req, res) => {
    const {timestamp, value} = req.body

    const temp = new Temperature({
        timestamp,
        value
    })
    temp.save()
    .then(() => res.status(200).json({message: "New temperature value added"}))
    .catch(error => res.status(400).json({message: error}))

})

/*
    Delete temperature value
*/

router.delete("/:id", (req, res) => {
    Temperature.findByIdAndDelete(req.params.id, (error, result) => {
        if(result) {
            return res.status(200).json({message: "Temperature value deleted!"})

        }
        else {
            return res.status(400).json({message: error})
        }
    })
})

/*
    Delete ALL temperature valuee
*/

router.delete("/", (req, res) => {
    Temperature.deleteMany() 
    .then(res.status(200).json({message: "Temperatures deleted!"}))
    .catch(error => res.status(400).json({message: error}))
      
})

module.exports = router