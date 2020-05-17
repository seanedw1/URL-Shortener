const user = require('../../models/user');
const gen = require('../../models/gen');
// const remer = require('remer');
const remer = require('../../../demo_logger/src/util');


module.exports = (express) => {
  const router = express.Router();

  // create
  router.post('/users', (req, res) => {
    const rb = req.body;
    // hashes password before create
    rb.password = gen.generateHash(rb.password);
    user.create(req.body, (err) => {
      res.status(500).json(err);
      remer.debug(' Create user fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      remer.debug(' Create user sucess', 'sucess');
    });
  });

  // get all
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
      remer.debug(' Read all user fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      remer.debug(' Read all user sucess', 'sucess');
    });
  });

  // get by id
  router.get('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
      remer.debug(' Read user by id fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      remer.debug(' Read user by id sucess', 'sucess');
    });
  });

  // update
  router.post('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    // hashes new password
    rb.password = gen.generateHash(rb.password);
    user.update(req.body, (err) => {
      res.status(500).json(err);
      remer.debug(' Update user fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      remer.debug(' Update user sucess', 'sucess');
    });
  });

  // delete
  router.delete('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
      remer.debug(' Delete user fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      remer.debug(' Delete user sucess', 'sucess');
    });
  });

  // returns correct data
  return router;
};
