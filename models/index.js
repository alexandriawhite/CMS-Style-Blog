const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});
Comment.belongsTo(User, {
  foreignkey: 'user_id',
  onDelete: 'cascade'
})
Comment.belongsTo(Post, {
  foreignkey: 'post_id',
  onDelete: 'cascade'
})
User.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'cascade'
});


module.exports = { User, Comment, Post };
