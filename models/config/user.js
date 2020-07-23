var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
  label: 'Usuários do sistema',
  hidden: true,
  noedit: false,
  nodelete: true,
});

User.add({
  name: {
    type: Types.Name,
    required: true,
    index: true,
  },
  slug: {
    type: String,
    initial: true,
    required: true,
    unique: true,
  },
  email: {
    type: Types.Email,
    initial: true,
    required: true,
    index: true,
  },
  password: {
    type: Types.Password,
    initial: true,
  },
  canAccessKeystone: {
    type: Boolean,
    initial: true,
  },
});

User.defaultColumns = 'name, slug|20%';
User.register();
