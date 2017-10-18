var somePromise = new Promise((resolve, reject) => {
    // resolve function is for fulfilled and reject is for rejected
    // only one argument for resolve and reject
    setTimeout(() => {
        /*
        You can only either resolve or reject a promise once.
        If you resolve a promise you can't reject it later.
        If you resolve that with one value you can't change your mind 
        at a later point in time.
        */
        //resolve('Hey. It worked!');
        reject('Unable to fulfill promise');
    }, 2500);
    
});

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
somePromise.then((message) => {
    console.log('Sucess:', message);
}, (errorMessage) => {
    console.log('Error:', errorMessage);
});