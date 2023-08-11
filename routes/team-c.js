const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const teamAData = {
    team: 'Team C',
    message: 'Welcome to Team C endpoint!'
  };
  res.json(teamAData);
});

module.exports = router;
