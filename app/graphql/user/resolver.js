module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.getUserById(id);
    }
  }
};