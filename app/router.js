/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);

  router.resources('users', '/api/users', controller.user);
  router.resources('posts', '/api/posts', controller.post);

  router.post('/api/test', controller.test.info);
};
