var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (done) {
  new User.model({
    name: { first: 'Fulano', last: 'Beltrano' },
    email: 'test@test.com',
    password: 'test',
    canAccessKeystone: true,
  }).save(done);
};
