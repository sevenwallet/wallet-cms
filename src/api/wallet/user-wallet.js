const keystone = require('keystone');
const { getUserId } = require('../utils/user');
const { getStocksUser } = require('../utils/wallet');

const getWalletUser = async (userSlug) => {
  const userId = await getUserId(userSlug);
  const userOrdersStocks = await getStocksUser(userId);

  return {
    wallet: {
      exampleOrdersUser: userOrdersStocks,
    },
  };
};

module.exports = {
  getWalletUser,
};
