const keystone = require('keystone');

const getUserId = async (userSlug) => {
  const PlayerModel = keystone.list('User');
  const filter = {
    slug: userSlug
  };

  const userData = await PlayerModel.model.findOne(filter, (err, item) => {
    if(err) {
      console.log('err', err);
      return null;
    }

    return item;
  });

  return userData._id;
};

module.exports = {
  getUserId,
};
