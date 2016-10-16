const db = require('./db');
const remer = require('remer');

// create
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  remer.debug('Create user model');
};

// find all
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
  remer.debug(' Read all user model');
};

// find by id
exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    // find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  remer.debug('Read user by id model');
};

// update
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  remer.debug('Update user model');
};

// delete
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  remer.debug('Delete user model');
};
