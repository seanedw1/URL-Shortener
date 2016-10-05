const bcrypt = require('bcrypt-nodejs');

// sets generate module
exports.genURL = () => {
  // string of letters
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let URLId = '';

  // for loop generating string
  for (let i = 0; i < 5; i++) {
    URLId += string.charAt(Math.floor(Math.random() * string.length));
  }
  return URLId;
};

// generates password hash
exports.generateHash = (payload) => {
  // generates password hash
  const hash = bcrypt.hashSync(payload, bcrypt.genSaltSync(8));
  // returns hashed password
  return hash;
};

// compares hashed password
exports.validateHash = (payload) => {
  // compares pasword returns in BOOLEAN
  const hash = bcrypt.compareSync(payload.password, this.localpassword);
  return hash;
};
