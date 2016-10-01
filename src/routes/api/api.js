module.exports = (express) => {
  const router = express.Router();

// route to get hello world
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

// route to check api status
  router.get('/status', (req, res) => {
    res.json({ healty: true });
  });

  return router;
};
