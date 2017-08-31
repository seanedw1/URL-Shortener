// const remer = require('remer');
const remer = require('../../demo_logger/src/util');

module.exports = (express) => {
  const router = express.Router();

  // route to get hello world
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
    remer.debug('api index hit', 'sucess');
  });

  // route to check api status
  router.get('/status', (req, res) => {
    res.json({ healty: true });
    remer.debug('api status hit', 'sucess');
  });

  // linking routes
  router.use('/api/v1/', require('./api/url')(express));
  router.use('/api/v1/', require('./api/user')(express));
  router.use('/go/', require('./go/redirect')(express));

  // returns correct data
  return router;
};
