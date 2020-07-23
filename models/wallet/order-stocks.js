var keystone = require('keystone');
var Types = keystone.Field.Types;

var OrderStocks = new keystone.List('OrderStocks', {
  label: 'Ordens da carteira',
  plural: 'Ordens da carteira',
  singular: 'Ordens da carteira',
  nodelete: false,
  defaultSort: '-orderDate',
});

OrderStocks.add({
  user: {
    ref: 'User',
    type: Types.Relationship,
    required: true,
    initial: true,
    label: 'Usuário',
  },
  stock: {
    ref: 'Stocks',
    type: Types.Relationship,
    required: true,
    initial: true,
    label: 'Ação',
  },
  orderType: {
    type: Types.Select,
    required: true,
    initial: true,
    label: 'Tipo de ordem',
    options: 'Compra, Venda',
  },
  orderQuantity: {
    type: Types.Number,
    required: true,
    initial: true,
    label: 'Quantidade',
  },
  orderPrice: {
    type: Types.Number,
    required: true,
    initial: true,
    label: 'Preço executado',
  },
  orderDate: {
    type: Types.Datetime,
    default: Date.now,
    utc: true,
    initial: true,
    label: 'Dia da ordem executada',
  },
});

OrderStocks.defaultColumns = 'name, stock, orderQuantity, orderType, orderPrice, user, orderDate';
OrderStocks.register();
