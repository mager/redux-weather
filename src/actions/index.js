import axios from 'axios';

const API_KEY = 'c7b3d30ab575475a7da0d00952346ec1';
const COUNTRY = 'us';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


// Canonical name for action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Our application state holds all of the data in our application, and that includes weather data. To load our weather data, we need to call an action create responsible for that Ajax request. Here's an API request to fetch the weather data.
export function fetchWeather(city) {
  // Make API request
  const url = `${ROOT_URL}&q=${city},${COUNTRY}`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
