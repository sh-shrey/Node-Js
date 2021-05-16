# current-weather-data

npm module to get current weather at a given location, using the API from yr.no.

## Install

> $ npm install current-weather-data

## Usage

```js
const getWeather = require('current-weather-data')

const location = {
    lat: 57.123456,
    lon: 11.543212
}

getWeather(location)
    .then(weather => {
        console.log(`The temperature here is ${weather.temperature.value}`)
    })
```

## Weather data

The returned weather data looks something like this, and is a direct translation from the yr.no XML response.

```json
{
  "altitude": 131,
  "latitude": 58,
  "longitude": 12,
  "temperature": {
    "id": "TTT",
    "unit": "celsius",
    "value": -2.2
  },
  "windDirection": {
    "id": "dd",
    "deg": 11.5,
    "name": "N"
  },
  "windSpeed": {
    "id": "ff",
    "mps": 2.1,
    "beaufort": 2,
    "name": "Svak vind"
  },
  "windGust": {
    "id": "ff_gust",
    "mps": 4.1
  },
  "humidity": {
    "unit": "percent",
    "value": 69.9
  },
  "pressure": {
    "id": "pr",
    "unit": "hPa",
    "value": 996.6
  },
  "cloudiness": {
    "id": "NN",
    "percent": 5.8
  },
  "fog": {
    "id": "FOG",
    "percent": 0
  },
  "lowClouds": {
    "id": "LOW",
    "percent": 0.3
  },
  "mediumClouds": {
    "id": "MEDIUM",
    "percent": 0
  },
  "highClouds": {
    "id": "HIGH",
    "percent": 5.5
  },
  "temperatureProbability": {
    "unit": "probabilitycode",
    "value": 0
  },
  "windProbability": {
    "unit": "probabilitycode",
    "value": 0
  },
  "dewpointTemperature": {
    "id": "TD",
    "unit": "celsius",
    "value": -7.2
  }
}```
