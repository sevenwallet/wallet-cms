var keystone = require('keystone');
var Types = keystone.Field.Types;

var Section = new keystone.List('Section', {
  label: 'Setor',
  plural: 'Setores',
  singular: 'Setor',
  nodelete: false,
  defaultSort: 'name',
});

Section.add({
  name: {
    type: String,
    required: true,
    label: 'Nome',
    initial: true,
  },
});

Section.defaultColumns = 'name';
Section.register();
