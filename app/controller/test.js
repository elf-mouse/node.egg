const Controller = require('egg').Controller;

class TestController extends Controller {
  async info() {
    const ctx = this.ctx;

    console.log('testql:', JSON.stringify(ctx.request.body));
    ctx.body = await ctx.service.graphql.query(
      JSON.stringify(ctx.request.body)
    );
  }
}

module.exports = TestController;
