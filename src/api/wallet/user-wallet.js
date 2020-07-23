const keystone = require('keystone');
const { getUserId } = require('../utils/user');

const getWalletUser = async (userSlug) => {
  const userId = await getUserId(userSlug);

  // TODO
  // usar a variável userId acima para pegar as ordens de compra/venda
  // do usuário e retornar a carteira de ações

  return {
    wallet: [],
  };
};

module.exports = {
  getWalletUser,
};
