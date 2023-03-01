const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  roaster: String,
  origin: String,
  brewMethod: String,
  grinder: String,
  grindSize: Number,
  pourGroup: { type: Array, default: [] },
  coffeeWeight: Number,
  waterTemp: Number,
  method: String,
  title: String,
  image: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
