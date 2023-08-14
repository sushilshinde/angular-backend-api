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
  // const products = await Product.find();
  const trendy = req.query.trendy
  let productsData = products;
  if (trendy) {
    productsData = productsData.filter((item) => item.trendy);
    console.log(productsData)
  }

  res.json(productsData);
});
router.get("/products/:id", async (req, res) => {
  // const products = await Product.find();
  const id = req.params.id;

  const productsData = products.find((item) => item.id === +id);

  res.json({ data: productsData });
});

module.exports = router;
