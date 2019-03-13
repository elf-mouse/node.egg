/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  // router.get('/user/info/:id', controller.user.info);

  router.resources('users', '/api/users', controller.user);
  router.resources('posts', '/api/posts', controller.post);
};
