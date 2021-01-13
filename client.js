// lib we import which allows us to
const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // event handler for any incoming communication from the server, error, score update etc...
  // this is performed async and is added to the backburner 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // return the conn object to where it is called from this function/needed
  return conn;
}

// export connect function from this module to be used elsewhere when needed
// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = connect;