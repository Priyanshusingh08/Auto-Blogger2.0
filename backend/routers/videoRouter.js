
const express = require("express");
const Model = require("../models/videoModel");
// create router
const router = express.Router();
router.get("/home", (req, res) => {
  console.log("a request at user home");
  res.send("you have found user Home");
});
router.post("/add", (req, res) => {
  console.log(req.body);
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("data saved");
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});


router.get("/getbyuser/:id", (req, res) => {
  console.log(req.params.id);

  Model.find({uploadedBy : req.params.id})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });

});


router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("data saved");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/authenticate", (req, res) => {
  const formdata = req.body;

  Model.findOne({ email: formdata.email, password: formdata.password })
    .then((data) => {
      if (data) {
        console.log("login success");
        res.status(200).json(data);
      } else {
        console.log("login failed");
        res.status(400).json({ message: "failed" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
