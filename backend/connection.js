const mongoose = require("mongoose");

const cors = require("cors");

const url =
  "mongodb+srv://Wind:12345@cluster0.qrdcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });

  module.exports = mongoose;