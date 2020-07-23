require('dotenv').config();

const keystone = require('keystone');

keystone.init({
  'name': 'Seven Wallet CMS',
  'brand': 'Seven Wallet CMS',
  'port': process.env.PORT || 3000,
  'static': [],
  'auto update': true,
  'mongo': process.env.DB_URI,
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.DB_URI,
});

keystone.import('./models');
keystone.set('routes', require('./src/routes'));

keystone.start();
