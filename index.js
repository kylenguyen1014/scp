const axios = require('axios')
const {getMean, getMedian, getMode } = require('./utils')
var cors = require('cors')
const express = require('express')

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || "8080"

const apiKey = process.env.APIKEY
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast'

app.post('/', async (req, res) => {
    try {
        const {zipCode} = req.body
        const resp = await axios.get(`${weatherUrl}?zip=${zipCode},us&units=imperial&appid=${apiKey}`)
        const temps = resp.data.list.map(day => day.main.temp)
        res.json({mean: getMean(temps), median: getMedian(temps), mode: getMode(temps), city: resp.data.city.name})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

app.listen(port, process.env.IP, () => console.log(`App is running on port ${port}`))