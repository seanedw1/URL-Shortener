// sets contant express module
const express = require('express');

// sets contant body parser module
const bodyParser = require('body-parser');

// express functionality
const app = express();

// sets port to 3000
const port = 3000;

// parses text as json
app.use(bodyParser.json());

// parses text as url encoded data
app.use(bodyParser.urlencoded({
  extended: true,
}));

// link routes
app.use('/', require('./routes')(express));

// sets server to listening port
const server = app.listen(port, () => {
  console.log('server active on ' + port);
});

// makes server modular
module.exports = server;
