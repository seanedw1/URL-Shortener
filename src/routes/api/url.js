// links to link generation model
const gen = require('../../models/gen');
const url = require('../../models/url');
const util = require('../../../tools/util');


// accepts express as a parameter of express
module.exports = (express) => {
  // express router function
  const router = express.Router();

  //  create
  router.post('/urls', (req, res) => {
    const rb = req.body;
    // generates shorturl
    rb.shortURL = gen.genURL(url);
    url.create(req.body, (err) => {
      res.status(500).json(err);
      util.debug(' Create url fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      util.debug(' Create url sucess', 'sucess');
    });
  });

  // get
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
      util.debug(' Read all url fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      util.debug(' Read all url sucess', 'sucess');
    });
  });

  // get by id
  router.get('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
      util.debug(' Read url by id fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      util.debug(' Read url by id sucess', 'sucess');
    });
  });

  // update
  router.post('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
      util.debug(' Update url fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      util.debug(' Update url sucess', 'sucess');
    });
  });

  // delete
  router.delete('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
      util.debug(' Delete url fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      util.debug(' Delete url sucess', 'sucess');
    });
  });

  // returns correct data
  return router;
};
