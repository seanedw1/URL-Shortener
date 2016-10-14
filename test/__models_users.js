const expect = require('chai').expect;
const User = require('../src/models/user');
const gen = require('../src/models/gen');

describe('user model', () => {
  // fake test user
  let testUser = {
    name: 'testUser',
    username: 'simpsonsfan',
    password: gen.generateHash('password'),
    tokenreq: true,
  };

  // Create user
  it('Create user', (done) => {
// create method
    User.create(testUser, (err) => {
      if (err) throw err;
    }, (user) => {
      expect(user.name).to.be.equal(testUser.name);
      expect(user.username).to.be.equal(testUser.username);
      done();
    }
    );
  });

  // read all users
  it('Read all users', (done) => {
    // read all method
    User.findAll((err) => {
      if (err) throw err;
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
  // read by id method
    User.find(testUser, (err) => {
      if (err) throw err;
    }, (user) => {
      expect(user.name).to.be.equal(testUser.name);
      done();
    }
  );
  });

  it('Update user', () => {});
  it('Delete user', () => {});
});
