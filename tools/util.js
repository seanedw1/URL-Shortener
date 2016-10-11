// time stamp
const stamp = new Date();

const fs = require('fs');

exports.debug = () => {
  if (process.env.DEBUG) {
    fs.appendFile('./error.log', () => {

    });
  }
};
