const { Comment } = require('../models');
const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Wow!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Thats awesome!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "This is great news!"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;