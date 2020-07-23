var keystone = require('keystone');
var Types = keystone.Field.Types;

var Indice = new keystone.List('Indice', {
  label: 'Índice',
  plural: 'Índices',
  singular: 'Índice',
  nodelete: false,
  defaultSort: 'name',
});

Indice.add({
  name: {
    type: String,
    required: true,
    label: 'Nome',
    initial: true,
  },
});

Indice.defaultColumns = 'name';
Indice.register();
