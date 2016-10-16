const url = require('../../models/url');
const remer = require('remer');


module.exports = (express) => {
  const router = express.Router();

  // redirect
  router.get('/:shortURL', (req, res) => {
    const rb = req.body;
    rb.shortURL = req.params.shortURL;
    url.go(req.body, (err) => {
      res.status(500).json(err);
      remer.debug(' url redirect fail', 'fail');
    }, (data) => {
      res.redirect(data.url);
      remer.debug(' url redirect sucess', 'sucess');
    });
  });
  // returns correct data
  return router;
};
