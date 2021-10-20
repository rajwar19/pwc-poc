var nodeEnv = process.env.NODE_ENV || 'development';
var config = {
  development: require('./development'),
  production: require('./production')
};

module.exports = config[nodeEnv];
