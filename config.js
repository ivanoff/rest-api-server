module.exports = {
  models: [
    'stars',
    'movies',
    'comments',
  ],
  freeAccess: {
    comments: ['GET', 'POST'],
  },
  links: {
    movies: 'stars',
  },
}