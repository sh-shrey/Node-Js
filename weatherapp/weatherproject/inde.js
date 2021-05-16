const getWeather = require('current-weather-data')
 const location = {
    lat: 57.123456,
    lon: 11.543212
}
getWeather(location)
    .then(weather => {
        console.log('The temperature here is ${weather.temperature.value} celsius')
    })