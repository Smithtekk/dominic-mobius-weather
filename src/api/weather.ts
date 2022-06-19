const apiURL = 'https://api.openweathermap.org/data/2.5';

// Using open weather map API for fetching weather data, structuring link to fetching data based on user request
// Documentation: https://openweathermap.org/current#geo
// REACT_APP_WEATHER_API_KEY is set as a environment variable

export const WeatherData = async (city: string | { lat: number; lng: number }) => {
  let url = `${apiURL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${apiURL}/weather?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }
  return await (await fetch(url)).json();
};

export const ExtendedForecastData = async (city: string | { lat: number; lng: number }) => {
  let url = `${apiURL}/forecast/daily?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${apiURL}/forecast/daily?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }

  return await (await fetch(url)).json();
};
