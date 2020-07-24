const keystone = require('keystone');

const getHistoryOrdersUser = (orders) => {
  const historyOrders = orders.map(item => {
    return {
      stock: item._doc.stock._doc.name,
      quantity: item._doc.orderQuantity,
      price: item._doc.orderPrice,
      type: item._doc.orderType,
      date: item._doc.orderDate,
    }
  });

  return historyOrders;
};

const getStocksUser = async (userId) => {
  const OrderStocksModel = keystone.list('OrderStocks');
  const filter = {
    user: userId,
  };

  const ordersUser = await OrderStocksModel.model.find(filter).populate('stock')
    .then((items) => getHistoryOrdersUser(items))
    .catch((err) => console.log('err', err));

  return ordersUser;
};

module.exports = {
  getStocksUser,
};
