var config = {};

config.mongo = {};
config.app = {};

config.mongo.conn = 'mongodb://127.0.0.1:27017/Vehicle';
config.app.PORT = 8081;
module.exports = config;