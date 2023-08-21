const express = require("express");
const router = express.Router();
const Product = require("../models/team_d_models/Product.model");
const products = require("../assets/team-d/productData");

router.get("/", (req, res) => {
  const teamAData = {
    team: "Team D",
    message: "Welcome to Team D endpoint!",
  };
  res.json(teamAData);
});

router.get("/products", async (req, res) => {
  let products;
  if (req.query) {
    products = await Product.find(req.query);
  } else {
    products = await Product.find(req.query);
  }
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const products = await Product.findById(id);
  res.json({ data: products });
});

module.exports = router;
