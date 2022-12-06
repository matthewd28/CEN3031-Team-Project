const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

//Uses bcrypt to encrypt the inputted password when registering
router.post("/", async (req, res) => {
  const { userName, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      userName: userName,
      password: hash,
    });
    res.json("Success");
  });
});

//Checks for correct user credentials when logging in
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const user = await Users.findOne({ where: { userName: userName } });

  if (!user) res.json({ error: "User does not exist" });
  else {
    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) {
        res.json({ error: "Incorrect username and/or password" });
      } else {
        const accessToken = sign(
          { userName: user.userName, id: user.id },
          "charitablesAuth"
        );
        res.json(accessToken);
      }
    });
  }
});

module.exports = router;
