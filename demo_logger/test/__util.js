
const expect = require('chai').expect;
const remer = require('../src/util');

// turn on debug mode for these tests
process.env.DEBUG = true;
describe('remer log tool tests', () => {
  // Read url by id
  it('remer should return "sucess" when using console.log()', (done) => {
    // const test = remer.debug('this is a log', 'sucess');

    const t = remer.debug('', 'sucess');
    expect(t).to.equal('sucess');
    done();
  });

  it('remer should return "warn" when using console.warn()', (done) => {
    // const test = remer.debug('this is a log', 'sucess');

    const t = remer.debug('', 'warn');
    expect(t).to.equal('warn');
    done();
  });

  it('remer should return "fail" when using console.error()', (done) => {
    // const test = remer.debug('this is a log', 'sucess');

    const t = remer.debug('', 'fail');
    expect(t).to.equal('fail');
    done();
  });
});
