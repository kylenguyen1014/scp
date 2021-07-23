const axios = require('axios')
const {getMean, getMedian, getMode } = require('./utils')
const express = require('express')

const app = express()
app.use(express.json())

const port = 8080

const apiKey = process.env.APIKEY
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast'

app.post('/', async (req, res) => {
    try {
        const {zipCode} = req.body
        const resp = await axios.get(`${weatherUrl}?zip=${zipCode},us&appid=${apiKey}`)
        const temps = resp.data.list.map(day => day.main.temp)
        res.json({mean: getMean(temps), median: getMedian(temps), mode: getMode(temps)})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

app.listen(port, () => console.log(`App is running on port ${port}`))