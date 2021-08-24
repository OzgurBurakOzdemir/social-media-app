
const PostMessage = require('../models/postMessage')

const getPosts = (req, res) =>
{
    res.send('Get Post ')

}
const createPost = (req, res) =>
{
    res.send('Create Post')

}
module.exports = {
    getPosts,
    createPost
}