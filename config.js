module.exports = {

  models: {
    stars: { name: 'string', birth: 'date' },
    movies: { name: 'string' },
    comments: { title: 'string', comment: { type: 'string', required: true } },
  },

  links: {
    movies: ['stars', 'comments'],
  },

  freeAccess: {
    movies: ['GET'],
    comments: ['GET', 'POST'],
  },

  users: [
    { login: 'l', md5: '83878c91171338902e0fe0fb97a8c47a' },
  ],

}
