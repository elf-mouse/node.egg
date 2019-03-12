// const DataLoader = require('dataloader');

class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
    // this.loader = new DataLoader(this.fetch.bind(this));
  }

  // fetch(ids) {
  //   console.log('fetch', this.ctx.app.model);
  //   const users = this.ctx.app.model.User.findAll({
  //     where: {
  //       id: {
  //         $in: ids
  //       }
  //     }
  //   }).then(us => us.map(u => u.toJSON()));
  //   return users;
  // }

  // fetchByIds(ids) {
  //   return this.loader.loadMany(ids);
  // }

  // fetchById(id) {
  //   return this.loader.load(id);
  // }

  // 直接调用 service
  async getUserById(userId) {
    return await this.ctx.service.user.find(userId);
  }
}

module.exports = UserConnector;
