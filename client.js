// lib we import which allows us to
const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // event handler/listener which listens for connection events from the server
  // this allows us to ssend a reply to our server containing our snake name we want to attach to our snake
  conn.on('connect', () => {
    // add name to snake inside this event after it fires off
    conn.write('Name: Yee');
    console.log('Connected to the server!');
  });

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