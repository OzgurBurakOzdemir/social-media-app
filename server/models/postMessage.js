const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFiler: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: String,
        default: new Date(),
    }
})

module.exports = mongoose.model('PostMessage', postSchema)