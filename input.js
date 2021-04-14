// global connection variable which stores the active TCP connection object.
let connection; 

/* handle all of the user input + connection global var gets set to the conn object which was passed in as a param, from client.js
 * check the input on stdin, first param is the data from stdin, and second param is the callback function we pass in to 
 * 'data' returned from server is passed in as a paramater to handleUserInput() function
 * check if they hit ctrl + c */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

/* function to handle a ctrl + c exit from stdin
 * if check to input "ctrl + c" to escape our terminal */
const handleUserInput = function(stdinInput) {
 
  if (stdinInput === '\u0003') {
    process.exit();
  }
  
  /* handle wasd key strokes to move snake here
   * if the stdinInput from the user is W, update global connection variable to write out the keystroke from the user to be sent to the server */
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

  // q keybind for snake to say AAAA
  if (stdinInput === 'q') {
    console.log("Pressed! Q");
    connection.write('Say: AAAAAA');
  }

   // q keybind for snake to say DIEE
   if (stdinInput === 'e') {
    console.log("Pressed! Q");
    connection.write('Say: DIEEEE');
  }
};

module.exports = setupInput;
