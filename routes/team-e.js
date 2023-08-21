const express = require("express");
const router = express.Router();
const usersData = require("./../assets/team_e/usersData");
const moviesData = require("./../assets/team_e/moviesData");

// Now, you can use the `usersData` array in your code.
console.log(usersData);

// Now, you can use the `usersData` array in your code.
console.log(usersData);

router.get("/movies", (req, res) => {
  const teamEData = moviesData;
  res.json(teamEData);
});
router.get("/users", (req, res) => {
  const teamEData = usersData;
  res.status=200
  res.json(teamEData);
});

module.exports = router;
