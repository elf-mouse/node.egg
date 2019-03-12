/* eslint valid-jsdoc: "off" */

const SECURITY_COOKIE_KEYS = '_1552258990018_5464';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks'
      }
    },
    news: {
      pageSize: 5,
      serverUrl: 'https://hacker-news.firebaseio.com/v0'
    },
    middleware: ['robot'],
    robot: {
      ua: [/Baiduspider/i]
    },
    onerror: {
      errorPageUrl: '/public/50x.html'
    },
    notfound: {
      pageUrl: '/public/404.html'
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + SECURITY_COOKIE_KEYS;

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
