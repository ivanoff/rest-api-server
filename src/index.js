const Api = require('create-rest-api');
const api = new Api({
  token: {
    secret: '1//⟶Sǝcяeť✙', // token's secret, required
    expire: 60 * 10,    // 10 minutes token expired, not required, default is 1 minute
  },
});

api.model('comments');  // /comments are free to anyone

api.needToken();        // after that etheryfing will be checked for token ( X-Access-Token in headers, use /login to get one )

api.model('movies', {   // for login store use /my/{login}/movies, for group store - /our/{group}/movies, others - /movies
  stars: { link: 'stars' },
});

api.model('stars');     // for login store use /my/{login}/stars, for group store - /our/{group}/stars, others - /stars

api.start();
