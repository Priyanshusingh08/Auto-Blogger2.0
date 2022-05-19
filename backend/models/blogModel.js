const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  discription: String,
  data: String,
  thumbnail: Number,
  uploadedby: String,
  createAt: { type: Date, default: new Date() },
});

const model = mongoose.model("blog", schema);

module.exports = model;