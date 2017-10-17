const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/1a5e6c07f1fb77d34bdae5ba084e3168/${lat},${lng}`,
        json: true

    }, (error, response, body) => {
        //console.log(JSON.stringify(response, undefined, 2));

        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }  

    });
};



module.exports = {
    getWeather
};