const url = require('../../models/url');

module.exports = (express) => {
  const router = express.Router();

  //  redirect
  router.get('/:shortURL', (req, res) => {
    const rb = req.body;
    rb.shortURL = req.params.shortURL;
    url.go(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect(data.url);
    });
  });
  // returns correct data
  return router;
};
