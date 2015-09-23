'use strict';

var coap        = require('coap');

// config
var amountOfTests  = 1,
    //totalSeconds   = 0,
    totalTestsDone = 0;

(() => {
  for (var i = 0; i <= amountOfTests; i++) {
    pingPong();
  }
})();

function pingPong() {
  var req = coap.request({
    'host': '192.168.99.100',
    'port': 5684,
    'pathname': '/Pebble'
  });
      //start = new Date();

  req.on('response', function(res) {
    res.on('data', function(data) {
      //console.log('received data:', data.toString());
    });

    res.on('end', function(res) {
      // Disregard this test, the start is all static and the seconds per request flow up
      //var end = new Date();
      //totalSeconds += Math.abs((end.getTime() - start.getTime()) / 1000);
      totalTestsDone++;

      if(totalTestsDone === amountOfTests) {
        console.log('Total amount of tests', totalTestsDone);
        console.log('Total duration:', process.uptime() + 's');
        console.log('Average time per request', (process.uptime() / totalTestsDone) + 's');
        //console.log('Average time per request', (totalTestsDone / totalSeconds), 's');
        console.log('Requests ', (totalTestsDone / process.uptime()) + '/s');
        process.exit(0);
      }
    });
  });
  req.end();
}