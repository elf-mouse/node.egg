/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  graphql: {
    enable: true,
    package: 'egg-graphql'
  }
};
