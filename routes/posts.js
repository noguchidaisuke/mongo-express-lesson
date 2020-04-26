const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
// get post
router.get('/', async (req,res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch(err) {
    res.json({ message: err })
  }
})

//submit
router.post('/',async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try{
  const savePost = await post.save();
  res.json(savePost)
  } catch {
    res.json({message: err})
  }
})

//specific post
router.get ('/:postId', async (req, res) => {
  const post = await Post.findById(req.params.postId)
  res.json(post);
})

router.delete( '/:postId', async(req, res) => {
  try{
    const removePost = await Post.remove({_id: req.params.postId})
    res.json(removePost)
  } catch(err) {
    res.json({message: err})
  }
})

router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne({_id: req.params.postId},{$set: {title: req.body.title}})
    res.json(updatePost);
  } catch (error) {
    res.json({message: error})
  }
})

module.exports = router;

// async await　なかったら？

// exports.sake = "string";
// model = require("")  model.sake => "string"