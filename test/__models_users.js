const expect = require('chai').expect;
const User = require('../src/models/user');

describe('user model', () => {
  // Create user
  it('Create user', (done) => {
// fake test user
    const testUser = {
      name: 'testUser',
      username: 'simpsonsfan',
      password: 'testpass',
      tokenreq: true,
    };
// create method
    User.create(testUser, (err) => {
      throw new Error(err);
    }, (user) => {
      expect(user.name).to.be.equal(testUser.name);
      done();
    }
    );
  });

  it('Read all users', () => {});
  it('Read user by id', () => {});
  it('Update user', () => {});
  it('Delete user', () => {});
});
