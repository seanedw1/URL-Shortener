const bcrypt = require('bcrypt-nodejs');
const remer = require('remer');

// sets generate module
exports.genURL = () => {
  // string of letters
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let URLId = '';

  // for loop generating string
  for (let i = 0; i < 5; i++) {
    URLId += string.charAt(Math.floor(Math.random() * string.length));
  }
  remer.debug('generates short url model');
  // returns short url
  return URLId;
};

// generates password hash
exports.generateHash = (payload) => {
  // generates password hash
  const hash = bcrypt.hashSync(payload, bcrypt.genSaltSync(8));
  remer.debug('generates hashed password model');
  // returns hashed password
  return hash;
};

// compares hashed password
exports.validateHash = (payload) => {
  // compares pasword returns in BOOLEAN
  const hash = bcrypt.compareSync(payload.password, this.localpassword);
  remer.debug('compares hashed password model');
  // return boolean
  return hash;
};
