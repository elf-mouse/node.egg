module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.fetchById(id);
    },
    users(root, { page, limit = 10 }, ctx) {
      return ctx.connector.user.list(page, limit);
    }
  },
  Mutation: {
    createUser(root, { user }, ctx) {
      return ctx.connector.user.createUser(user);
    },
    updateUser(root, { id, user }, ctx) {
      return ctx.connector.user.updateUser(id, user);
    },
    deleteUser(root, { id }, ctx) {
      return ctx.connector.user.deleteUser(id);
    }
  }
};
