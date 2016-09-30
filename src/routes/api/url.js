// links to link generation model
const est = require('../../models/gen');

// accepts express as a parameter of express
module.exports = (express) => {
  // express router function
  const router = express.Router();

// post method
  router.post('/url', (req, res) => {
    // console.log(req.body.link);
    // respond with link
    res.json(est.genURL(req.body.link));
  });

// returns correct data
  return router;
};
