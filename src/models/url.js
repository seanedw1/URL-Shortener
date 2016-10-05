const db = require('./db');

// create
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

// find all
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

// find by id
exports.find = (payload, err, success) => {
  // find where id is same as payload
  db.url.find({
    where: {
      id: payload.id,
    },
    // find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// redirect
exports.go = (payload, err, success) => {
  // finds where shortURL is same as payload
  db.url.find({
    where: {
      shortURL: payload.shortURL,
    },
  }).then(success).catch(err);
};

// update
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
