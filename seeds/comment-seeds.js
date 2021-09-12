const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is great!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Very cool tool!"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "well done!"
    }
]

    const seedComments = () => Comment.bulkCreate(commentData);
    
    module.exports = seedComments;