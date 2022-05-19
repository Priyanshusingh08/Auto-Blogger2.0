const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  file: String,
  uploadedby: String,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("videos", schema);

module.exports = model;