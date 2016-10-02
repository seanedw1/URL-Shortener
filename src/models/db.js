const Sequelize = require('sequelize');
require('localenvironment');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  password_hash: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.VIRTUAL,
    set: (val) => {
      this.setDataValue('password', val);
      this.setDataValue('password_hash', this.salt + val);
    },
  },
  tokenreq: {
    type: Sequelize.BOOLEAN,
  },
});

const url = sequelize.define('url', {
  olink: {
    type: Sequelize.STRING,
  },
  slink: {
    type: Sequelize.STRING,
  },
});

user.hasMany(url, {
  foreignKey: 'userID',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.url = url;
