const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4c256810cda5b432ee678e3fe40c6ea5&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      const forecastInfo = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%.`;

      callback(undefined, forecastInfo);
    }
  });
};


module.exports = forecast;

