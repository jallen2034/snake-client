// modules needed to import into play file to get everything we need
const connect = require('./client.js');
const setupInput = require('./input.js');

// call our connect function we exported from client.js as connect
console.log('Connecting ...');

// call our setupInput() function and pass in the connect() function, which can give setupInput() access to the
// conn object to update keystrokes to
setupInput(connect());