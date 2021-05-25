const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    try {
        const posts = await loadPostsCollection();
        res.send(await posts.find({}).toArray());
    } catch (error) {
        console.log(error);
    }

})

// Add Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date()
    });

    res.status(201).send();
})

// connect to posts collection
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc123:alexandresoares@cluster0.rpmw9.mongodb.net/vue_express_blog?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('vue_express_blog').collection('posts')
}

module.exports = router;