module.exports = (express) => {
  const router = express.Router();

// post method
  router.post('/user', (req, res) => {
    res.json({});
  });

// returns correct data
  return router;
};
