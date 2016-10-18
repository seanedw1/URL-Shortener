const express = require('express');
const bodyParser = require('body-parser');
// const remer = require('remer');
const remer = require('../demo_logger/src/util');

// express functionality
const app = express();

// sets port to 3000
const port = process.env.PORT || 3000;

// parses text as json
app.use(bodyParser.json());

// parses text as url encoded data
app.use(bodyParser.urlencoded({
  extended: true,
}));

// formatting json
app.set('json spaces', 2);

// link routes
app.use('/', require('./routes')(express));

// sets server to listening port
const server = app.listen(port, () => {
  remer.debug(' server active on ' + port);
});
// makes server modular
module.exports = server;
