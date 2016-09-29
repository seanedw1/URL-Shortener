module.exports = (express) => {

  const router = express.Router();

  router.post('/v1/url', (req, res) => {
  });

  router.get('/v1/url', (req, res) => {
    res.json({});
  });

  return router;
}
