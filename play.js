const connect = require('./client.js');

// call our connect function we exported from client.js as connect
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // here we're checking the input on stdin, first param is the data from stdin, and second param is the callback function we pass in to 
  // check if they hit ctrl + c
  stdin.on('data', handleUserInput);
  return stdin;
};

// function to handle a ctrl + c exit from stdin
const handleUserInput = function(stdinInput) {
  // this check allows us to input "ctrl + c" to escape our terminal
  if (stdinInput === '\u0003') {
    process.exit();
  }
};

// call our setupInput() function and pass in handleUserInput() functiont to be used inside as a callback
setupInput();