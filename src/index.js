const config = require('./config');
const Api = require('api-i');

const {TOKEN_SECRET: secret, TOKEN_EXPIRE: expire, ADMIN_LOGIN: login, ADMIN_PASSWORD: password} = process.env;
const token = secret? {token: {secret, expire}} : {};
const admin = {login, password};

const api = new Api({...config, ...token, admin});

(async() => {
  for(let model of Object.keys(config.models)) {
    const links = config.links[model] || {};
    const openMethods = config.freeAccess[model] || {};
    await api.model(model, config.models[model], { links, openMethods });
  }

  for(let user of config.users) {
    await api.user(user);
  }

  await api.start();
})();