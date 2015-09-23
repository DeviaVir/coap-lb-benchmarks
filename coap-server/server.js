'use strict';

var coap        = require('coap'),
    server      = coap.createServer();

server.on('request', function(req, res) {
  res.end('Hello ' + req.url.split('/')[1] + '\n');
});

server.listen(function() {
	console.log('Listening on port 5683');
});