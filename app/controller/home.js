const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home.tpl', { a: 'Hello world' });
  }
}

module.exports = HomeController;
