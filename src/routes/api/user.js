const user = require('../../models/user');
const gen = require('../../models/gen');

module.exports = (express) => {
  const router = express.Router();

  // create
  router.post('/users', (req, res) => {
    const rb = req.body;
    // hashes password before create
    rb.password = gen.generateHash(rb.password);
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// get
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //  get by id
  router.get('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //  update
  router.post('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    // hashes new password
    rb.password = gen.generateHash(rb.password);
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //  delete
  router.delete('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// returns correct data
  return router;
};
