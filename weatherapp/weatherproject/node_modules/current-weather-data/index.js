const axios = require('axios')
const parser = require('fast-xml-parser')

const xmlOptions = {
    attributeNamePrefix : "",
    ignoreAttributes : false,
    parseAttributeValue: true
}

const getWeather = ({ lat, lon }) =>
    axios.get(`https://api.met.no/weatherapi/locationforecast/1.9/?lat=${lat}&lon=${lon}`)
        .then(response => response.data)
        .then(xmlData => parser.parse(xmlData, xmlOptions))
        .then(json => json.weatherdata.product.time[0].location)

module.exports = getWeather
