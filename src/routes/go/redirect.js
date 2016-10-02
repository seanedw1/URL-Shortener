module.exports = (express) => {
  const router = express.Router();

  //  update
  router.post('/go/:surl', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // returns correct data
  return router;
};
