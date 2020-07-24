const keystone = require('keystone');

const getUserId = async (userSlug) => {
  const PlayerModel = keystone.list('User');
  const filter = {
    slug: userSlug
  };

  const userData = await PlayerModel.model.findOne(filter)
    .then((item) => item)
    .catch((err) => console.log('err', err));

  return userData._id;
};

module.exports = {
  getUserId,
};
