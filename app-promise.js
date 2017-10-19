const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.option({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

if (argv.address === "") {
    // default address
    argv.address = '119, Xinxing St., Yancheng Dist., Kaohsiung City 803, Taiwan'; 
    console.log('Default address.');
} 

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    console.log(`Location: lat: ${lat}, lng: ${lng}`);
    var weatherUrl = `https://api.darksky.net/forecast/1a5e6c07f1fb77d34bdae5ba084e3168/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    
    return axios.get(weatherUrl);
    
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var summary = response.data.currently.summary;
    console.log(`It's ${summary.toLowerCase()}. It's currently ${temperature} F. It feels like ${apparentTemperature} F.`);
}).catch((error) => {
    // handles all error above
    if (error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(error.message); // for 'ZERO_RESULTS'
    }
});