const express = require('express');
const router = express.Router();
const userData = require('../assets/team-b/users.json')
fs = require('fs');

router.get('/', (req, res) => {
  const teamAData = {
    team: 'Team B',
    message: 'Welcome to Team B endpoint!'
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

router.post("/users", (req, res) => {
    // console.log(req.body);
    userData.users.push(req.body);
    writeUserData(userData);
    res.send({ userData });
    console.log(userData);
  });
  router.get('/users',(req,res)=>{
    res.json(userData.users);
  })
module.exports = router;
