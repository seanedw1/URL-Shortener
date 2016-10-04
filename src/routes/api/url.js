// links to link generation model
const gen = require('../../models/gen');
const url = require('../../models/url');

// accepts express as a parameter of express
module.exports = (express) => {
  // express router function
  const router = express.Router();

  //  create
  router.post('/urls', (req, res) => {
    const rb = req.body;
    rb.shortURL = gen.genURL(url);
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // get
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

    //  get by id
  router.get('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

    //  update
  router.post('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

    //  delete
  router.delete('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

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
