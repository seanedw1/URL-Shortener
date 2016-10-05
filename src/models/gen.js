const bcrypt = require('bcrypt-nodejs');

// sets generate module
exports.genURL = () => {
  // creates link string with a mth random
  const URLId = Math.random().toString(32).slice(2);
// returns new link
  return URLId;
};

// generates hash
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
