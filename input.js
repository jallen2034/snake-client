// global connection variable which stores the active TCP connection object.
let connection; 

// file which will handle all of the user input
const setupInput = function(conn) {
  // connection global var gets set to the conn object which was passed in as a param, from client.js
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // here we're checking the input on stdin, first param is the data from stdin, and second param is the callback function we pass in to 
  // 'data' returned from server is passed in as a paramater to handleUserInput() function
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
  
  // handle wasd key strokes to move snake here
  // if the stdinInput from the user is W, update global connection variable to write out the keystroke from the user to be "piped out" to the server
  if (stdinInput === 'w') {
    console.log("Pressed! W");

    setTimeout(() => {
      connection.write('Move: up');
    }, 350);
  }

  if (stdinInput === 'a') {
    console.log("Pressed! A");

    setTimeout(() => {
      connection.write('Move: left');
    }, 350);
  }

  if (stdinInput === 's') {
    console.log("Pressed! S");

    setTimeout(() => {
      connection.write('Move: down');
    }, 350);
  }

  if (stdinInput === 'd') {
    console.log("Pressed! D");

    setTimeout(() => {
      connection.write('Move: right');
    }, 350);
  }
};

// export setupInput() function from this module to be used elsewhere when needed
// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = setupInput;