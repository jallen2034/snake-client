// file which will handle all of the user input
const setupInput = function() {
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
};

// export setupInput() function from this module to be used elsewhere when needed
// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = setupInput;