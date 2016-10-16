const expect = require('chai').expect;
const User = require('../src/models/user');
const gen = require('../src/models/gen');
const util = require('../tools/util');

let testId;

describe('user model', () => {
  // fake test user
  let testUser = {
    name: 'dinasour',
    username: 'simpsonsfan',
    password: gen.generateHash('password'),
    tokenreq: true,
  };

  // Create user
  it('Create user', (done) => {
    // create method
    User.create(testUser, (fail) => {
      util.debug('failed to create mock url', fail);
    }, (user) => {
      testId = user.id;
      expect(user.name).to.be.equal(testUser.name);
      expect(user.username).to.be.equal(testUser.username);
      done();
    }
    );
  });

  // read all users
  it('Read all users', (done) => {
    // read all method
    User.findAll((fail) => {
      util.debug('failed to read urls', fail);
    // sucess callback
    }, (users) => {
      this.testUsers = users;
      expect(this.testUsers.length).to.be.above(0);
      done();
    }
  );
  });

  // Read user by id
  it('Read user by id', (done) => {
    const testDemo = {
      id: testId,
    };
  // read by id method
    User.find(testDemo, (fail) => {
      util.debug('failed to delete mock user', fail);
    // sucess callback
    }, (user) => {
      // console.log(user);
      expect(user.id).to.be.equal(testId);
      done();
    }
  );
  });

  // Update a User
  it('Update user', (done) => {
 // Load in the info for an existing user
    testUser = {
      id: testId,
      name: 'animal',
      username: 'southparkfan',
      password: gen.generateHash('lol'),
      tokenreq: false,
    };
    // update user method
    User.update(testUser, (fail) => {
      util.debug('failed to delete mock user', fail);
    // sucess callback
    }, (user) => {
      expect(user.dataValues.name).to.be.equal(testUser.name);
      done();
    }
    );
  });


  // Delete user
  it('Delete user', (done) => {
    // delete user method
    User.destroy(testUser, (fail) => {
      util.debug('failed to delete mock user', fail);
    // sucess callback
    }, (res) => {
      expect(res).to.be.equal(1);
      done();
    }
    );
  });
// closes describe
});
