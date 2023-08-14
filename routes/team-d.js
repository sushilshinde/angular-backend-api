const express = require("express");
const router = express.Router();
const Product = require("../models/team_d_models/Product.model");

router.get("/", (req, res) => {
  const teamAData = {
    team: "Team D",
    message: "Welcome to Team D endpoint!",
  };
  res.json(teamAData);
});

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
