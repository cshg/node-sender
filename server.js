var express = require('express');
var morgan = require('morgan');
var request = require('request');

var app = express();
var LISTEN_PORT = process.env.LISTEN_PORT;
var receiveCount = 0;

var sendUrl = process.env.SEND_IP;
var sendLoops = process.env.LOOPS;
var sendCount = 0;
var responseCount = 0;

app.use(morgan('dev'));

app.get('/', function(req, res) {
  receiveCount++;
  res.send('GET request received. Total number: ' + receiveCount);
});

app.listen(LISTEN_PORT, function() {
  console.log('express send server running and listening on port ' + LISTEN_PORT);
});

for (var i = 0; i <= sendLoops; i++) {
  request.get(sendUrl, function(err, response) {
    sendCount++;
    console.log('Number of GET requests sent ' + sendCount);
    if (err) {
      console.log('error when sending GET request', err);
    } else {
      responseCount++;
      console.log('response received. Total number ' + responseCount);
    }
  });
}

