// Include the momentJS library
const moment = require("moment");

// Require Mongoose
const mongoose = require('mongoose');

// Create a Schema Class
const Schema = mongoose.Schema;

// Create Article Schema
const ArticleSchema = new Schema({

    // Title of Article
    title: {
        type: String,
        required: true
    },

    // Link to Article
    link: {
        type: String,
        required: true
    },

    // Summary of Article
    summary: {
        type: String,
        required: true
    },

    // Date of article scrape (saving as a string to pretify it in Moment-JS)
    updated: {
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm A')
    },

    // Create a relation with the Comment model
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]

});

// Create the Article model with Mongoose
const Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;