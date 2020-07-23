# Seven Wallet CMS

### Stack
* [KeystoneJS](https://www.keystonejs.com/)
* [Mongo DB](https://account.mongodb.com/account/login)
* [Heroku](https://www.heroku.com/)

### Comandos
* ``npm run dev``
  * para development, com livereload
  * acesse: http://localhost:3000/keystone/signin

* ``npm run start``
  * para iniciar a aplicação em produção

### Configuração

Crie o arquivo ``.env`` com as seguintes configurações:

* ``DB_URI`` - MongoDB database server
* ``SECRET_COOKIE`` - Token para o KeystoneJS

### API
* ``/api/wallet/:user``
