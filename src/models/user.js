const db = require('./db');

// create
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

// find all
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
};
