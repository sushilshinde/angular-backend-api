const express = require("express");
const router = express.Router();
import products from "../assets/team-d/productData";
import { usersData } from "../assets/team_e/usersData";

router.get("/movies", (req, res) => {
  const teamEData = products;
  res.json(teamEData);
});
router.get("/users", (req, res) => {
  const teamEData = usersData;
  res.json(teamEData);
});
router.post("/users", (req, res) => {
  const newUser = req.body;
  usersData.push(newUser)
  res.json(usersData);
});


router;

module.exports = router;
