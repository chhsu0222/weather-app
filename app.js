const request = require('request');
const yargs = require('yargs');

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

console.log(argv);

var encodedAddress = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    //url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true 
    /* 
    tells request that the data coming back is going to be JSON data
    and it should go ahead and take that JSON string and convert it
    to an object for us
    */
}, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    /*
    The body is an object because we set the json property "true"
    The 3rd argument is the indentation
    */
    
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});