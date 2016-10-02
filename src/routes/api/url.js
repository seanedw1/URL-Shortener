// links to link generation model
const est = require('../../models/gen');
const url = require('../../models/url');

// accepts express as a parameter of express
module.exports = (express) => {
  // express router function
  const router = express.Router();

  // // post method
  // router.post('/url', (req, res) => {
  //     // console.log(req.body.link);
  //     // respond with link
  //   res.json(est.genURL(req.body.link));
  // });

  // create
  router.post('/urls', (req, res) => {
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
      // console.log(req.body.link);
      // respond with link
      res.json(est.genURL(req.body.link));
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

// returns correct data
  return router;
};
