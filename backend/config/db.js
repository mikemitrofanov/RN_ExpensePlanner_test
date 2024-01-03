const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/docker-node-mongo';

const connect = async () => {
  await mongoose.connect(url)
}

module.exports = connect;