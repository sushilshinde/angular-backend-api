const express = require("express");
const router = express.Router();
const userData = require("../assets/team-b/users.json");
const allTasksData = require("../assets/team-b/all_tasks.json");
fs = require("fs");

router.get("/", (req, res) => {
  const teamAData = {
    team: "Team B",
    message: "Welcome to Team B endpoint!",
  };
  res.json(teamAData);
});

const writeUserData = (jsonData) => {
  try {
    fs.writeFileSync(
      "assets/team-b/users.json",
      JSON.stringify(jsonData),
      "utf8"
    );
  } catch (error) {
    console.error("Error writing data:", error);
  }
};
const writeAllTasksData = (jsonData) => {
  try {
    fs.writeFileSync(
      "assets/team-b/all_tasks.json",
      JSON.stringify(jsonData),
      "utf8"
    );
  } catch (error) {
    console.error("Error writing data:", error);
  }
};

router.post("/users", (req, res) => {
  userData.users.push(req.body);
  writeUserData(userData);
  res.send({ userData });
  console.log(userData);
});
router.get("/users", (req, res) => {
  res.json(userData.users);
});

router.post("/all_tasks", (req, res) => {
  allTasksData["all_tasks"] = req.body;
  writeAllTasksData(allTasksData);
  res.send({ allTasksData });
  console.log(allTasksData);
});

router.get("/all_tasks", (req, res) => {
  res.json(allTasksData.all_tasks);
});
module.exports = router;
