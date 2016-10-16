const expect = require('chai').expect;
const Url = require('../src/models/url');
const gen = require('../src/models/gen');
const remer = require('remer');

describe('url model', () => {
  let testUrl = {
    url: 'http://www.google.com',
    shortURL: gen.genURL('http://www.google.com'),
  };

  let testId;
  let shortURL;

  // Create user
  it('Create url', (done) => {
    // create method
    Url.create(testUrl, (fail) => {
      remer.debug('failed to create mock url', fail);
    }, (url) => {
      testId = url.id;
      shortURL = url.shortURL;
      expect(url.url).to.be.equal(testUrl.url);
      expect(url.shortURL).to.be.equal(testUrl.shortURL);
      done();
    }
    );
  });

  // Read all urls
  it('Read all urls', (done) => {
    // read all method
    Url.findAll((fail) => {
      remer.debug('failed to read all users', fail);
    // sucess callback
    }, (urls) => {
      this.testUrls = urls;
      expect(this.testUrls.length).to.be.above(0);
      done();
    }
  );
  });

  // Read url by id
  it('Read url by id', (done) => {
    const testDemo = {
      id: testId,
    };
  // read by id method
    Url.find(testDemo, (fail) => {
      remer.debug('failed to read by id url', fail);
    // sucess callback
    }, (url) => {
      expect(url.id).to.be.equal(testId);
      done();
    }
  );
  });

  // Redirect
  it('Redirect', (done) => {
    const testDemo = {
      shortURL,
    };
  // read by id method
    Url.go(testDemo, (fail) => {
      remer.debug('failed to redirect', fail);
    // sucess callback
    }, (url) => {
      expect(url.shortURL).to.be.equal(shortURL);
      done();
    }
    );
  });

  // Update a Url
  it('Update url', (done) => {
    // Load in the info for an existing user
    testUrl = {
      id: testId,
      url: 'http://www.facebook.com',
      shortURL: gen.genURL('http://www.facebook.com'),
    };
    // update method
    Url.update(testUrl, (fail) => {
      remer.debug('failed to update mock url', fail);
    // sucess callback
    }, (url) => {
      expect(url.dataValues.url).to.be.equal(testUrl.url);
      done();
    }
    );
  });

  // Delete url
  it('Delete url', (done) => {
    // delete method
    Url.destroy(testUrl, (fail) => {
      remer.debug('failed to delete mock url', fail);
    // sucess callback
    }, (res) => {
      expect(res).to.be.equal(1);
      done();
    }
    );
  });
});
