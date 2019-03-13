const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    // const user = await ctx.service.user.find(userId);

    const query = JSON.stringify({
      query: `{
        user(id: ${userId}) {
          id
          password,
          created_at
        }
      }`
    });
    const user = await ctx.service.graphql.query(query);

    ctx.body = user;
  }
}

module.exports = UserController;
