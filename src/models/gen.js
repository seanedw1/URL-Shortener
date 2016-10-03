const db = require('./db');

// sets generate module
exports.genURL = (link) => {
  // creates link string with a mth random
  const URLId = 'http://bs.com/' + Math.random().toString(32).slice(2);

// returns new link
  return { url: link, shortURL: URLId };
};

// create
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
  return { url: link, shortURL: URLId };
};
