const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true 
    /* 
    tells request that the data coming back is going to be JSON data
    and it should go ahead and take that JSON string and convert it
    to an object for us
    */
}, (error, response, body) => {
    console.log(body);
});