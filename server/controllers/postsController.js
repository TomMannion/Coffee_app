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
  // find with filter criteria with passed in params brewMethod, origin and title
  find: async (req, res) => {
    try {
      const { brewMethod, origin, title } = req.query;
      const posts = await Posts.find({
        title: { $regex: title, $options: "i" },
        origin: { $regex: origin, $options: "i" },
        brewMethod: { $regex: brewMethod, $options: "i" },
      });
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  origins: async (req, res) => {
    try {
      const posts = await Posts.find();
      const origins = posts.map((post) => post.origin);
      const uniqueOrigins = [...new Set(origins)];
      res.json(uniqueOrigins);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // find all brew methods
  brewMethods: async (req, res) => {
    try {
      const posts = await Posts.find();
      const brewMethods = posts.map((post) => post.brewMethod);
      const uniqueBrewMethods = [...new Set(brewMethods)];
      res.json(uniqueBrewMethods);
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
