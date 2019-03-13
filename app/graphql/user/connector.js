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
    }).then(us => us.map(u => u.toJSON()));
    return users;
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids);
  }

  fetchById(id) {
    return this.loader.load(id);
  }

  createUser(user) {
    return this.ctx.app.model.User.create(user);
  }

  updateUser(id, user) {
    return this.ctx.app.model.User.update(user, {
      where: {
        id
      }
    });
  }

  deleteUser(id) {
    return this.ctx.app.model.User.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = UserConnector;
