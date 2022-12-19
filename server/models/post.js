const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  roaster: String,
  origin: String,
  brewMethod: String,
  grinder: String,
  grindSize: String,
  pourGroup: { type: Array, default: [] },
  comment: String,
  coffeeWeight: Number,
  waterTemp: Number,
  method: String,
  title: String,
  tasteProfile: Number,
  image: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
