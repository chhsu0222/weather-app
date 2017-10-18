var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};
/*
Anyone who happens to call AsyncAdd can add a 'then' call on to the 
return result to get that value.
*/

asyncAdd(5, '7').then((res) => {
    console.log('Result:', res);
    return asyncAdd(res, 33);
}).then((res) => {   // second 'then' is based of asyncAdd(res, 33);
    console.log('Should be 45', res);
}).catch((errorMessage) => {
    /* only one argument (error handler) for catch method and
    that's going to fire for all of our previous failures.
    */
    console.log(errorMessage);
});

//var somePromise = new Promise((resolve, reject) => {
//    setTimeout(() => {
        //resolve('Hey. It worked!');
//        reject('Unable to fulfill promise');
//    }, 2500);
    
//});

/* 
then lets us provide callback functions for both success cases and error cases
In the original callback function, we had one function that fired no matter what.
The arguments let us know whether or not things went well.
In promise we are going to have 2 functions and that is going to be what 
determines wether or not thing went as planned.

p.then(function(value) {
  // fulfillment (for resolve, success handling)
}, function(reason) {
  // rejection (for reject, error handling)
});

*/
//somePromise.then((message) => {
//    console.log('Sucess:', message);
//}, (errorMessage) => {
//    console.log('Error:', errorMessage);
//});