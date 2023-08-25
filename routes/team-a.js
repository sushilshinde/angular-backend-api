const citiesJson = require('../data/cities.json');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const teamAData = {
    team: 'Team A',
    message: 'Welcome to Team A endpoint!',
  };
  res.json(teamAData);
});

function findCityStateForLocation(location) {
  for (const state in citiesJson) {
    const cities = citiesJson[state];
    const formattedLocation = location?.substring(0, 1).toUpperCase() + location.substring(1);
    if (cities.includes(formattedLocation)) {
      return [location, state];
    }
  }
  return undefined;
}

function findWeatherForLocation(location, weatherData) {
  const matchedCityState = findCityStateForLocation(location);
  if (matchedCityState) {
    const [city, state] = matchedCityState;
    const weatherForLocation = {
      ...weatherData,
      city,
      state,
      country: 'India',
    };
    return weatherForLocation;
  }
  return undefined;
}

router.get('/weather-details', (req, res) => {
  let city = req.query.city;
  city = city?.substring(0, 1).toUpperCase() + city.substring(1);
  const weatherData = {
    city,
    state: 'Karnataka',
    country: 'India',
    weatherStatus: 'Sunny',
    temperature: 30,
    humidity: 12,
    wind: 14,
    precipitation: 13,
    rainChance: 11,
    rainChanceHourly: [
      {
        '6h': 50,
      },
      {
        '12h': 37,
      },
      {
        '18h': 46,
      },
      {
        '24h': 68,
      },
    ],
    windSpeedHourly: [
      {
        '6h': 30,
      },
      {
        '12h': 10,
      },
      {
        '18h': 20,
      },
      {
        '24h': 15,
      },
    ],
    temperatureHourly: [
      {
        '6h': 25,
      },
      {
        '12h': 32,
      },
      {
        '18h': 20,
      },
      {
        '24h': 18,
      },
    ],
    precipitationHourly: [
      {
        '6h': 12,
      },
      {
        '12h': 5,
      },
      {
        '18h': 7,
      },
      {
        '24h': 19,
      },
    ],
    temperatureWeekly: [
      {
        Mon: 30,
      },
      {
        Tue: 35,
      },
      {
        wed: 18,
      },
      {
        Thu: 20,
      },
      {
        Fri: 31,
      },
      {
        Sat: 20,
      },
      {
        Sun: 35,
      },
    ],
  };
  const getData = findWeatherForLocation(city, weatherData)

  const teamAData = { ...getData };
  res.json(teamAData);
});

router.get('/aa', (req, res) => {
  const teamAData = {
    team: 'Team AA',
    message: 'Welcome to Team AA endpoint!',
  };
  res.json(teamAData);
});

module.exports = router;
