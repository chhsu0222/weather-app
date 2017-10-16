/*
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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

//console.log(argv);

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else if (results) {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
*/
// 1a5e6c07f1fb77d34bdae5ba084e3168

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/1a5e6c07f1fb77d34bdae5ba084e3168/39.9396284,-75.18663959999999',
    json: true
    
}, (error, response, body) => {
    //console.log(JSON.stringify(response, undefined, 2));

    if (!error && response.statusCode === 200) {
        console.log(`Temperature: ${body.currently.temperature}`);
    } else {
        console.log('Unable to fetch weather.');
    }  
    
});

