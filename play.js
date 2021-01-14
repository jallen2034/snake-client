const connect = require('./client.js');
const setupInput = require('./input.js');

// call our connect function we exported from client.js as connect
console.log('Connecting ...');
connect();

// call our setupInput() function and pass in handleUserInput() functiont to be used inside as a callback
setupInput();