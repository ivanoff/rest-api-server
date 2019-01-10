const config = require('./config');
const Api = require('create-rest-api');

const {TOKEN_SECRET: secret, TOKEN_EXPIRE: expire, ADMIN_LOGIN: login, ADMIN_PASSWORD: password} = process.env;
const token = {secret, expire};
const admin = {login, password};

const api = new Api({token, admin});

for(let model of Object.keys(config.freeAccess)) {
  api.model(model);
}

api.needToken();

for(let model of config.models) {
  let linkModel = config.links[model];
  let link = linkModel? {[linkModel]: {link: model}} : {};
  api.model(model, link);
}

api.start();
