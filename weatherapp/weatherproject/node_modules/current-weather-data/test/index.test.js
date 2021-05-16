const getWeather = require('../index')

test('Gets a temperature', () =>
    getWeather({ lat: 58, lon: 12 })
        .then(weather => {
            expect(weather).toHaveProperty('temperature.value')
        })
)
