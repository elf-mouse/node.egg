module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.fetchById(id);
    },
    users(root, { ids }, ctx) {
      return ctx.connector.user.fetchByIds(ids);
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
