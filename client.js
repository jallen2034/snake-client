// lib we import which allows us to
const net = require('net');
const {IP, PORT} = require('./constants.js')

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // event handler/listener which listens for connection events from the server
  // this allows us to ssend a reply to our server containing our snake name we want to attach to our snake
  // add name to snake inside this event after it fires off
  conn.on('connect', () => {
    conn.write('Name: Yee');
    console.log('Connected to the server!');
  });

  // // event handler/listener which listens for connection events from the server
  // // if it sends back a connect event, we can then write out commands back to the server to move our snake
  // conn.on('connect', () => {

  //   // have an array of all our pssible snake moves
  //   const snakeMoves = ["Move: up", "Move: left", "Move: left", "Move: up", "Move: up", "Move: up", "Move: up", 
  //   "Move: left", "Move: left", "Move: left", "Move: left", "Move: left", "Move: left", "Move: left"];

  //   // have a timer we will add each time we loop through
  //   let timerBetweenMoves = 0;

  //   // loop through array of potential moves to add to our snake
  //   // write our moves to "throw down" our pipe to our server with the current snakemove[i]
  //   // then do this at an incresing increment of time of whatever timerBetweenMoves is
  //   // increment timerBetweenMoves by 20ms everytime we loop through an index of the array
  //   for (let i = 0; i < snakeMoves.length; i++) {
  //     setTimeout(() => {
  //       conn.write(snakeMoves[i]);
  //     }, timerBetweenMoves);

  //     timerBetweenMoves += 350;
  //   }
  // });

  // event handler for any incoming communication from the server, error, score update etc...
  // interpereter knows .on() is async code and this will wait on the backburner until the main thread finishes
  // this is performed async and is added to the backburner
  // first paramater is a string which specifies the type of event we care about, we only want ot wake up and react when the type of this event is 'data'
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // return the conn object to where it is called from this function/needed
  return conn;
}

// export connect function from this module to be used elsewhere when needed
// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = connect;