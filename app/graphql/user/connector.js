const DataLoader = require('dataloader');

class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }

  fetch(ids) {
    const users = this.ctx.app.model.User.findAll({
      where: {
        id: {
          $in: ids
        }
      }
    }).then(keys => keys.map(data => data.toJSON()));
    return users;
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids);
  }

  fetchById(id) {
    const user = this.loader.load(id).catch(error => {
      this.ctx.throw(404, 'user not found');
      throw error;
    });
    return user;
  }

  async list(page, limit) {
    const result = await this.ctx.model.User.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
      order: [['created_at', 'desc'], ['id', 'desc']]
    });
    return {
      page,
      pageSize: limit,
      totalCount: result.count,
      list: result.rows
    };
  }

  createUser(user) {
    return this.ctx.app.model.User.create(user);
  }

  async updateUser(id, updates) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }

  async deleteUser(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.destroy();
  }
}

module.exports = UserConnector;
