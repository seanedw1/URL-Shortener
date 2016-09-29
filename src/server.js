const express = require('express');
const body_parser = require('body-parser');
const app = express();

// config
const port = 3000;


app.listen(port, ()=> {
  console.log('server active on', port);
})
