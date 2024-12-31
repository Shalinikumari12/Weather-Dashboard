const apiKey = 'your_API_key';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
  const city =  encodeURIComponent(cityInput.value);
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name!');
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert('City not found!');
    }
  } catch (error) {
    alert('Error fetching weather data.');
  }
}

function displayWeather(data) {
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

