const express = require("express");
const router = express.Router();
const { Hours } = require("../models");

router.get("/", async (req, res) => {
  const hoursList = await Hours.findAll();
  res.json(hoursList);
});

router.post("/", async (req, res) => {
  const hours = req.body;
  await Hours.create(hours);
  res.json(hours);
});

module.exports = router;