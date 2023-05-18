const router = require("express").Router();

let User = require("../model/user");

router.route("/").get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body;
  const user = User.create(name)
    .then((user) =>
      res.json({ userName: user.name, res: "user added successfully" })
    )
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
