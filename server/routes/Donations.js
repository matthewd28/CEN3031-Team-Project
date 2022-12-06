const express = require("express");
const router = express.Router();
const { Donations } = require("../models");

router.get("/", async (req, res) => {
  const donationsList = await Donations.findAll();
  res.json(donationsList);
});

router.post("/", async (req, res) => {
  const donation = req.body;
  await Donations.create(donation);
  res.json(donation);
});

module.exports = router;