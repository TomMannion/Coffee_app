const axios = require("axios");
const Posts = require("../models/post");
var mongoose = require("mongoose");

const postsController = {
  findAll: async (req, res) => {
    try {
      const posts = await Posts.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  create: async (req, res) => {
    try {
      const newPost = new Posts(req.body);
      await newPost.save();
      res.json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = postsController;
