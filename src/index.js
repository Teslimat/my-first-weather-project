function refreshWeather(response) {
  let temperatureElement = document.querySelector("#weather-app-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  speedElement.innerHTML = `${response.data.wind.speed}km/h`;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `  <img src=${response.data.condition.icon_url}
                class="weather-app-icon" />`;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "92dd828taa17b53d1feo43a40bd1ab2f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let serachFormElement = document.querySelector("#search-form");
serachFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
