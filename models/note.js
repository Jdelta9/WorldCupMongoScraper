// Require Mongoose
const mongoose = require('mongoose');

// Create a Schema Class
const Schema = mongoose.Schema;

// Create Comment Schema
const CommentSchema = new Schema({

    // Author's Name
    author: {
        type: String
    },
    // Comment Content
    content: {
        type: String
    }

});


// Create the Comment model with Mongoose
const Comment = mongoose.model('Comment', CommentSchema);

// Export the Model
module.exports = Comment;