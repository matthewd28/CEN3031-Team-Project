const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

//API get page for user posts
router.get("/", async (req, res) => {
  const postList = await Posts.findAll();
  res.json(postList);
});

//API post page for user posts
router.post("/", async (req, res) => {
  const post = req.body;

  await Posts.create(post);
  res.json(post);
});

module.exports = router;
