var keystone = require('keystone');
var Types = keystone.Field.Types;

var Stocks = new keystone.List('Stocks', {
  label: 'Ação',
  plural: 'Ações',
  singular: 'Ação',
  nodelete: false,
  defaultSort: 'name',
});

Stocks.add({
  name: {
    type: String,
    required: true,
    label: 'Nome',
    initial: true,
  },
  indice: {
    ref: 'Indice',
    type: Types.Relationship,
    required: true,
    initial: true,
    label: 'Índice',
  },
  section: {
    ref: 'Section',
    type: Types.Relationship,
    required: true,
    initial: true,
    label: 'Setor',
  },
});

Stocks.defaultColumns = 'name, indice, section';
Stocks.register();
