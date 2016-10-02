const user = require('../../models/user');

module.exports = (express) => {
  const router = express.Router();

  // create
  router.post('/users', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// route for users
  router.get('/users', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'david',
        username: 'david12',
        password: 'reojgoifdklm',
        createdAt: '2016-10-08T01:45:31.000Z',
        updatedAt: '2016-10-08T01:45:31.000Z',
        urls: [],
      },
      {
        id: 2,
        name: 'peter',
        username: 'peterpanman',
        password: 'reojgoifdklm',
        createdAt: '2016-10-08T01:45:31.000Z',
        updatedAt: '2016-10-08T01:45:31.000Z',
        urls: [],
      },
      {
        id: 3,
        name: 'dan',
        username: 'dantheman',
        password: 'reojgoifdklm',
        createdAt: '2016-10-08T01:45:31.000Z',
        updatedAt: '2016-10-08T01:45:31.000Z',
        urls: [],
      },
    ]);
  });

// route for user by id
  router.get('/users/:id', (req, res) => {
    res.json(
      {
        id: 3,
        name: 'dan',
        username: 'dantheman',
        password: 'reojgoifdklm',
        tokenreq: 'true',
        createdAt: '2016-10-08T01:45:31.000Z',
        updatedAt: '2016-10-08T01:45:31.000Z',
        urls: [],
      });
  });

// returns correct data
  return router;
};
